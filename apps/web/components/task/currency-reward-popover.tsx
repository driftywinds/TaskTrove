"use client"

import { useState } from "react"
import type { ReactNode } from "react"
import type { Task } from "@tasktrove/types/core"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CurrencyRewardContent } from "@/components/task/currency-reward-content"

interface CurrencyRewardPopoverProps {
  task: Task
  children: ReactNode
}

/**
 * Wraps a trigger (the reward badge) with a popover to set the task's
 * currency reward.
 */
export function CurrencyRewardPopover({ task, children }: CurrencyRewardPopoverProps) {
  const [open, setOpen] = useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent className="w-64" align="start">
        <CurrencyRewardContent task={task} onOpenChange={setOpen} />
      </PopoverContent>
    </Popover>
  )
}
