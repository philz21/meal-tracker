"use client";

import { useNow } from "@/lib/useNow";

export default function TodaysDate() {
    const now = useNow();

    return (
        <p className="h-5 text-sm text-gray-500">
            {now?.toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long" })}
        </p>
    );
}