"use client"

import { useState } from "react"
import { useTranslation } from "@tasktrove/i18n"
import { SmilePlus } from "lucide-react"
import type { TaskComment } from "@tasktrove/types/core"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { REACTION_EMOJIS, useToggleCommentReaction } from "@/components/task/comment-reactions"

interface AddReactionButtonProps {
  comment: TaskComment
}

/**
 * Emoji picker button for a comment (Pro `AddReactionButton`).
 *
 * Recovered contract: a ghost icon button (`comment-react-button-<id>`
 * test id) opening a 5-column emoji grid from the fixed Pro palette;
 * picking an emoji toggles the reaction and closes the popover.
 */
export function AddReactionButton({ comment }: AddReactionButtonProps) {
  const { t } = useTranslation("task")
  const [open, setOpen] = useState(false)
  const toggleReaction = useToggleCommentReaction()

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="h-6 w-6 p-0 text-muted-foreground hover:text-primary"
          aria-label={t("reactions.addReaction", "Add reaction")}
          data-testid={`comment-react-button-${comment.id}`}
        >
          <SmilePlus className="h-3 w-3" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-2" align="start">
        <div className="grid grid-cols-5 gap-1">
          {REACTION_EMOJIS.map((emoji) => (
            <Button
              key={emoji}
              variant="ghost"
              size="sm"
              onClick={() => {
                toggleReaction(comment, emoji)
                setOpen(false)
              }}
            >
              {emoji}
            </Button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  )
}
