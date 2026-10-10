/**
 * Project membership & ownership helpers (Pro).
 *
 * Verbatim recovery of module 10326 from the official Pro image
 * (`tools/deob/out/server-chunks_1752/decoded-10326.js`). Semantics:
 *
 * - A project with no members is **public** (anyone can view; the base app has
 *   no visibility gating, so public = unrestricted).
 * - The **owner is `members[0]`** — there is no separate owner field.
 * - `canManage` = owner or admin.
 * - All guard messages below are the exact strings the Pro image throws.
 */

import type { Project, User } from "@tasktrove/types/core";
import type { UserId } from "@tasktrove/types/id";

/** True when the project has members and the given user is the first (owner). */
export function isProjectOwner(project: Project, userId: UserId): boolean {
  if (!project.members || project.members.length === 0) {
    return false;
  }
  return project.members[0] === userId;
}

/** Owner or admin may transfer ownership / make the project public. */
export function canManageProject(project: Project, user: User): boolean {
  return isProjectOwner(project, user.id) || user.role === "admin";
}

/**
 * Add a member (recovered `pH`). The first member of a public project becomes
 * the owner, because a project's owner is its first member.
 */
export function addProjectMember(project: Project, userId: UserId): Project {
  if (!project.members || project.members.length === 0) {
    return { ...project, members: [userId] };
  }
  if (project.members.includes(userId)) {
    return project;
  }
  return { ...project, members: [...project.members, userId] };
}

/**
 * Remove a member (recovered `wV`). Throws the verbatim Pro errors for a
 * public project, removing the owner, and removing the last member.
 */
export function removeProjectMember(project: Project, userId: UserId): Project {
  if (!project.members || project.members.length === 0) {
    throw new Error("Cannot remove member from public project");
  }
  if (project.members[0] === userId) {
    throw new Error("Cannot remove owner. Transfer ownership first.");
  }
  const nextMembers = project.members.filter(
    (member: UserId) => member !== userId,
  );
  if (nextMembers.length === 0) {
    throw new Error(
      "Cannot remove last member. Use makeProjectPublic() instead.",
    );
  }
  return { ...project, members: nextMembers };
}

/**
 * Transfer ownership by moving the target user to `members[0]`
 * (recovered `mI`). Throws on public projects.
 */
export function transferProjectOwnership(
  project: Project,
  userId: UserId,
): Project {
  if (!project.members || project.members.length === 0) {
    throw new Error("Cannot transfer ownership of a public project");
  }
  return {
    ...project,
    members: [
      userId,
      ...project.members.filter((member: UserId) => member !== userId),
    ],
  };
}

/**
 * Make the project public by clearing its members (recovered `ZE`).
 * Only the owner may do this.
 */
export function makeProjectPublic(project: Project, userId: UserId): Project {
  if (!project.members || project.members.length === 0) {
    throw new Error("Project is already public");
  }
  if (project.members[0] !== userId) {
    throw new Error("Only the owner can make a project public");
  }
  return { ...project, members: [] };
}
