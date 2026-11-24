import { useEffect, useState } from "react";

export function useNow(intervalMs = 60_000) {
    const [now, setNow] = useState<Date | null>(null);

    useEffect(() => {
        const update = () => setNow(new Date());
        const first = setTimeout(update, 0);
        const timer = setInterval(update, intervalMs);

        return () => {
            clearTimeout(first);
            clearInterval(timer);
        };
    }, [intervalMs]);

    return now;
}