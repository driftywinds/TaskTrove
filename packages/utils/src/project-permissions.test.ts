import { describe, it, expect } from "vitest";
import {
  addProjectMember,
  canManageProject,
  isProjectOwner,
  makeProjectPublic,
  removeProjectMember,
  transferProjectOwnership,
} from "./project-permissions";
import { createProjectId, createUserId } from "@tasktrove/types/id";
import { DEFAULT_PROJECT_SECTION } from "@tasktrove/types/defaults";
import type { Project, User } from "@tasktrove/types/core";

const PROJECT_ID = createProjectId("99999999-9999-4999-8999-999999999999");
const OWNER = createUserId("11111111-1111-4111-8111-111111111111");
const MEMBER = createUserId("22222222-2222-4222-8222-222222222222");
const OTHER = createUserId("33333333-3333-4333-8333-333333333333");

function project(members?: (typeof OWNER)[]): Project {
  return {
    id: PROJECT_ID,
    name: "Test",
    color: "#3b82f6",
    sections: [DEFAULT_PROJECT_SECTION],
    ...(members ? { members } : {}),
  };
}

const ownerUser: User = {
  id: OWNER,
  username: "owner",
  password: "x",
  role: "user",
};
const adminUser: User = {
  id: OTHER,
  username: "admin",
  password: "x",
  role: "admin",
};
const plainUser: User = {
  id: MEMBER,
  username: "member",
  password: "x",
  role: "user",
};

describe("isProjectOwner (recovered: owner = members[0])", () => {
  it("is false for public projects", () => {
    expect(isProjectOwner(project(), OWNER)).toBe(false);
  });

  it("is true only for the first member", () => {
    expect(isProjectOwner(project([OWNER, MEMBER]), OWNER)).toBe(true);
    expect(isProjectOwner(project([OWNER, MEMBER]), MEMBER)).toBe(false);
  });
});

describe("canManageProject (owner or admin)", () => {
  it("allows the owner and admins, nobody else", () => {
    const p = project([OWNER, MEMBER]);
    expect(canManageProject(p, ownerUser)).toBe(true);
    expect(canManageProject(p, adminUser)).toBe(true);
    expect(canManageProject(p, plainUser)).toBe(false);
  });
});

describe("addProjectMember (recovered pH)", () => {
  it("makes the first member of a public project the owner", () => {
    expect(addProjectMember(project(), MEMBER).members).toEqual([MEMBER]);
  });

  it("appends new members and keeps the owner first", () => {
    expect(addProjectMember(project([OWNER]), MEMBER).members).toEqual([
      OWNER,
      MEMBER,
    ]);
  });

  it("is a no-op for existing members", () => {
    const p = project([OWNER, MEMBER]);
    expect(addProjectMember(p, MEMBER)).toBe(p);
  });
});

describe("removeProjectMember (recovered wV, verbatim errors)", () => {
  it("throws on public projects", () => {
    expect(() => removeProjectMember(project(), MEMBER)).toThrow(
      "Cannot remove member from public project",
    );
  });

  it("throws when removing the owner", () => {
    expect(() => removeProjectMember(project([OWNER, MEMBER]), OWNER)).toThrow(
      "Cannot remove owner. Transfer ownership first.",
    );
  });

  // Note: the recovered "Cannot remove last member" guard is defensive in Pro —
  // removing a non-owner always leaves members[0], and removing members[0] hits
  // the owner guard first.

  it("removes non-owner members", () => {
    expect(
      removeProjectMember(project([OWNER, MEMBER]), MEMBER).members,
    ).toEqual([OWNER]);
  });
});

describe("transferProjectOwnership (recovered mI, verbatim errors)", () => {
  it("throws on public projects", () => {
    expect(() => transferProjectOwnership(project(), MEMBER)).toThrow(
      "Cannot transfer ownership of a public project",
    );
  });

  it("moves the target user to members[0] and dedupes", () => {
    expect(
      transferProjectOwnership(project([OWNER, MEMBER]), MEMBER).members,
    ).toEqual([MEMBER, OWNER]);
  });
});

describe("makeProjectPublic (recovered ZE, verbatim errors)", () => {
  it("throws when already public", () => {
    expect(() => makeProjectPublic(project(), OWNER)).toThrow(
      "Project is already public",
    );
  });

  it("throws for non-owners", () => {
    expect(() => makeProjectPublic(project([OWNER, MEMBER]), MEMBER)).toThrow(
      "Only the owner can make a project public",
    );
  });

  it("clears members for the owner", () => {
    expect(makeProjectPublic(project([OWNER, MEMBER]), OWNER).members).toEqual(
      [],
    );
  });
});
