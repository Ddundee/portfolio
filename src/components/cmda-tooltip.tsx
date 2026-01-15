import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { Info } from "lucide-react"

export default function CMDAToolTip() {
    return (
        <Tooltip delayDuration={50}>
            <TooltipTrigger>
                <span className="flex flex-row items-center gap-1 mr-1 border-b-[1px] border-border/30 hover:border-border/100 duration-200">cmda <Info className="size-3 opacity-60" /></span>
            </TooltipTrigger>
            <TooltipContent>
                <p>computational modeling and data analytics</p>
            </TooltipContent>
        </Tooltip >
    )
}
