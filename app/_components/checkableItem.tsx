"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import CheckIfMe from "../util/checkIfMe";
import { Item } from "./about";

function CheckableItem({ item }: { item: Item }) {
    const isMe = CheckIfMe();
    const [checked, setChecked] = useState(item.checked)
    const handleCheckedChange = () => {
        if (isMe) setChecked(!checked);
    }

    return (
        <div className={`flex gap-2 items-center ml-4`}>
            <Checkbox onCheckedChange={handleCheckedChange} checked={checked} className={isMe ? "cursor-pointer" : "cursor-default"} />
            <p className={`${checked ? "text-neutral-500 line-through" : ""} ${isMe ? "cursor-pointer" : "cursor-default"}`}>{item.text}</p>

        </div>
    )
}

export default CheckableItem;
