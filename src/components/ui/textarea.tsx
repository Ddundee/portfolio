import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
    return (
        <textarea
            data-slot="textarea"
            className={cn(
                "file:text-foreground placeholder:text-muted-foreground dark:bg-input/30 border-stone-400 flex h-9 w-full min-w-0 rounded-sm border bg-transparent px-3 py-1 shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm text-stone-100 duration-100",
                "focus-visible:border-stone-100",
                "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive min-h-16",
                className
            )}
            {...props}
        />
    )
}

export { Textarea }
