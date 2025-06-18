'use client'
import React from 'react'
import { useEffect, useState } from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from '@/components/ui/button'
import { CirclePlay, Heart } from 'lucide-react';


const moviesIntro = [
    {
        id: 1, name: "Captaion America: The Winter Soldier", year: 2014,
        poster: 'https://m.media-amazon.com/images/M/MV5BNWY1NjFmNDItZDhmOC00NjI1LWE0ZDItMTM0MjBjZThiOTQ2XkEyXkFqcGc@._V1_.jpg',
        thumbnail: 'https://play-lh.googleusercontent.com/proxy/kLnu3oNlaS8J4FVQnD8463yUUTICYZkKHpJt4DD4r5UaoC50zMPRe4GUBi18JcrJNUdFmwS9uVxzDe-rKeaFJxQXPy1oMnsW8qsKhD0bXwhlSwbs3vEkKKk=s1920-w1920-h1080',
        description: 'As Steve Rogers struggles to embrace his role in the modern world, he teams up with a fellow Avenger and S.H.I.E.L.D agent, Black Widow, to battle a new threat from history: an assassin known as the Winter Soldier.'
    },
    {
        id: 2, name: "Avengers: Infinity War", year: 2018,
        poster: 'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_FMjpg_UX1000_.jpg',
        thumbnail: 'https://wallpapers.com/images/featured/avengers-infinity-war-4yngzhbhqmtam73j.jpg',
        description: 'The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.'
    },
    {
        id: 3, name: "Someday Or One Day", year: 2024,
        poster: 'https://i.mydramalist.com/jQEmxr_4f.jpg',
        thumbnail: 'https://1.vikiplatform.com/c/39580c/9e6065b215.jpg?x=b',
        description: "The story begins in 2009, when the 28-year-old Li Ziwei met the 17-year-old Huang Yuxuan at a beverage shop. Even though they only met for the first time, it feels like they've known each other for ages. Meanwhile, the time fast forwards to 2017, Huang Yuxuan resolutely accepts a new work assignment that takes her on a new journey. It will not only change her future but also affect Li Ziwei, Mo Junjie and even Chen Yunru whom she's never met before."
    },
    {
        id: 4, name: "My Love", year: 2021,
        poster: 'https://i.mydramalist.com/ERy35_4f.jpg',
        thumbnail: 'https://m.media-amazon.com/images/M/MV5BMmVkYzUyMGMtNzg4NS00NWNjLTg0ZjYtMWEyMDhlMWVlMmEwXkEyXkFqcGc@._V1_.jpg',
        description: "My Love is a 2021 Chinese romantic comedy film directed and co-written by Han Tian. It is a remake of the 2018 South Korean film On Your Wedding Day. The film stars Greg Hsu and Zhang Ruonan, and features Ding Guansen, Yan Zidong, Guo Cheng and Wang Shasha in supporting roles. The plot follows a story of first love, spanning fifteen years, from teenagers to adults."
    }
]

export default function MoviesCarousel() {
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    if (!hasMounted) return null;

    return (
        <Carousel className='h-full'>
            <CarouselContent>
                {moviesIntro.map((movie) => (
                    <CarouselItem key={movie.id}>
                        <div className="carousel-item-wrapper h-[calc(100vh-5rem)] relative">
                            <img
                                src={movie.thumbnail}
                                alt={movie.name}
                                className="w-full h-full object-fill"
                            />

                            <div className="absolute top-6 left-6 bottom-6 right-6 flex flex-col justify-between z-10">

                                <div className='h-[60%] flex'>
                                    <img src={movie.poster} alt="poster" className='h-full' />

                                    <div className='ml-6 text-4xl text-white flex flex-col'>
                                        <h3>{movie.name}</h3>
                                        <h3>({movie.year})</h3>
                                        <div className='mt-6'>
                                            <Button className='bg-green-600 text-green-50 py-6 px-12 text-lg'><CirclePlay /> Watch now</Button>
                                            <Button className='bg-red-600 text-red-50 py-6 px-12 text-lg ml-4'><Heart /> Add to your favorite</Button>
                                        </div>

                                    </div>
                                </div>
                                <p className='text-[1.3rem] text-indigo-100 text-justify'>{movie.description}</p>
                            </div>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>

    )
}
