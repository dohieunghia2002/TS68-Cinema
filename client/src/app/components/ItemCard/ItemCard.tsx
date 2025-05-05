// components/ItemCard.tsx
import React from 'react'
import { Card, CardHeader, CardDescription } from "@/components/ui/card"
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card"
import TruncatableTitle from '@/app/TruncatableTitle'

export interface ItemCardProps {
    item: {
        id: number
        name: string
        year: number
        poster: string
        description: string
    }
}

export default function ItemCard({ item }: ItemCardProps) {
    return (
        <Card key={item.id} className="card-animated-border cursor-pointer hover:brightness-90 transition duration-300">
            <img
                src={item.poster}
                alt={item.name}
                className="w-full h-64 object-contain"
            />
            <CardHeader>
                <HoverCard>
                    <HoverCardTrigger asChild>
                        <TruncatableTitle>
                            {`${item.name} (${item.year})`}
                        </TruncatableTitle>
                    </HoverCardTrigger>
                    <HoverCardContent className="text-sm">
                        {item.name} ({item.year})
                    </HoverCardContent>
                </HoverCard>

                <CardDescription className="line-clamp-3 text-sm text-justify mt-1">
                    {item.description}
                </CardDescription>
            </CardHeader>
        </Card>
    )
}
