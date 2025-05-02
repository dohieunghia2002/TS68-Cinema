'use client';

import { useEffect, useRef, useState } from 'react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { CardTitle } from "@/components/ui/card";

export default function TruncatableTitle({ children }: { children: string }) {
    const ref = useRef<HTMLDivElement>(null);
    const [isTruncated, setIsTruncated] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (el) {
            setIsTruncated(el.scrollWidth > el.offsetWidth);
        }
    }, [children]);

    const title = (
        <CardTitle
            ref={ref}
            className="text-base truncate whitespace-nowrap overflow-hidden block w-full"
        >
            {children}
        </CardTitle>
    );

    if (isTruncated) {
        return (
            <HoverCard>
                <HoverCardTrigger asChild>{title}</HoverCardTrigger>
                <HoverCardContent className="text-sm">{children}</HoverCardContent>
            </HoverCard>
        );
    }

    return title;
}
