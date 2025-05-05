
import { Card, CardDescription, CardHeader } from '@/components/ui/card'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import React from 'react'
import TruncatableTitle from '../TruncatableTitle'

const partners = [
    { name: "Warner Bros", logo: "https://www.warnerbros.com/assets/images/blue-wb-shield-500x480.png" },
    { name: "Universal", logo: "https://upload.wikimedia.org/wikipedia/commons/6/62/Universal_Pictures_2021_%28Blue%29.svg" },
    { name: "Paramount", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Paramount_Pictures_2022_%28Blue%29.svg/1200px-Paramount_Pictures_2022_%28Blue%29.svg.png" },
    { name: "Marvel", logo: "https://1000logos.net/wp-content/uploads/2023/01/Marvel-Studios-logo.png" },
]

const movies = [
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
    },
    {
        id: 5, name: "Black Widow", year: 2021,
        poster: 'https://www.onlymelbourne.com.au/image/film_black-widow.jpg',
        thumbnail: 'https://i1.wp.com/m2now.com/wp-content/uploads/2021/06/Black-Widow-Girls.jpg?fit=1920%2C1080&ssl=1',
        description: 'Natasha Romanoff confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises.'
    },
    {
        id: 6, name: "Fist of Fury", year: 1972,
        poster: 'https://m.media-amazon.com/images/M/MV5BZDAxMWZjMTgtNDdkMC00YmI5LWFkNzYtOTA0NDMwNjE2Y2MzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
        thumbnail: 'https://thecinematheque.ca/assets/images/films/_large169/FistFury_web7.jpg',
        description: "During the Japanese occupation of Shanghai, the star pupil of a recently-deceased martial arts teacher battles a Japanese dojo which seeks the demise of his master's fighting school."
    },
    {
        id: 7, name: "Mulan", year: 2020,
        poster: 'https://tatler.lakesideschool.org/wp-content/uploads/2020/10/Mulan-2020-An-Overambitious-Love-Letter-From-Disney-Mulan-Live-Action-CoverChannel-News.jpeg',
        thumbnail: 'https://i.ytimg.com/vi/PqZC__2BG04/maxresdefault.jpg',
        description: "To keep her ailing father from serving in the Imperial Army, a fearless young woman disguises herself as a man and battles northern invaders in China."
    },
    {
        id: 8, name: "3 Idiots", year: 2009,
        poster: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p7951929_p_v8_aa.jpg',
        thumbnail: 'https://occ-0-8407-90.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABWxGGWJ5IZaDixzryLKYJRGx9PZAVUGVjhHOvb_MoJT20M5zu5iMrAXDFsdN456GIaxIZZZWe-bT4Sy1SAASIxZUojO1MdWqzgw-.jpg?r=ddb',
        description: "Two friends are searching for their long lost companion. They revisit their college days and recall the memories of their friend who inspired them to think differently, even as the rest of the world called them \"idiots\"."
    },
    {
        id: 9, name: "The Curious Case of Benjamin Button", year: 2008,
        poster: 'https://m.media-amazon.com/images/M/MV5BYjIyNDExOWItM2Y4ZC00NmY3LWFlN2ItYTJlZDQ1NTJlZTUwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
        thumbnail: 'https://www.hollywoodreporter.com/wp-content/uploads/2018/12/curious_case_of_benjamin_button_-_h_-_2008.jpg',
        description: "Benjamin Button, born in 1918 with the physical state of an elderly man, ages in reverse. He experiences love and break-ups, ecstasy and sorrow, and timelessness by the time he dies in 2003 as a baby."
    },
    {
        id: 10, name: "The Imitation Game", year: 2014,
        poster: 'https://bifa.imgix.net/web/2018/10/MV5BOTgwMzFiMWYtZDhlNS00ODNkLWJiODAtZDVhNzgyNzJhYjQ4L2ltYWdlXkEyXkFqcGdeQXVyNzEzOTYxNTQ@._V1_SX1920.jpg?auto=compress%2Cformat&fit=scale&h=1145&ixlib=php-3.3.1&w=768&wpsize=md',
        thumbnail: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj1gda4aoEAGsxrPjiWdJKK6_CN0dgcbZn87QKywDtxpwxduCaHrIlOa7-0JF2R-w8_Yos-iIWLY_kdZFjoliOrdqhVgwFG-rxfAkB1c5x56gb7E5Ev1eRg9We5m3zfzxylTw7198xeou9N/s1600/The+Imitation+Game+Fashions+01.jpg',
        description: "During World War II, the English mathematical genius Alan Turing tries to crack the German Enigma code with help from fellow mathematicians while attempting to come to terms with his troubled private life."
    },
    {
        id: 11, name: "Romeo + Juliet", year: 1996,
        poster: 'https://m.media-amazon.com/images/M/MV5BZjBhYjkxN2EtNDc1Yy00NTViLTkxMjQtMDYxMzM0MzA3NGQ4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
        thumbnail: 'https://s3.amazonaws.com/thumbnails.thecrimson.com/photos/2021/12/31/140515_1353613.jpeg.1500x983_q95_crop-smart_upscale.jpg',
        description: "Shakespeare's famous play is updated to the hip modern suburb of Verona still retaining its original dialogue."
    },
    {
        id: 12, name: "Dangal", year: 2016,
        poster: 'https://m.media-amazon.com/images/M/MV5BMTQ4MzQzMzM2Nl5BMl5BanBnXkFtZTgwMTQ1NzU3MDI@._V1_.jpg',
        thumbnail: 'https://i.ytimg.com/vi/7CCLb6Ptga0/maxresdefault.jpg',
        description: "Mahavir Singh Phogat, a former wrestler, decides to fulfill his dream of winning a gold medal for his country by training his daughters for the Commonwealth Games despite the existing social stigmas."
    }
]

export default function Movies() {
    return (
        <div className="flex flex-col items-center justify-center font-[family-name:var(--font-geist-sans)]">
            <div className="w-[calc(100vw-13rem)] min-h-[calc(100vh-5rem)]">
                <section className="bg-gradient-to-r from-gray-100 via-white to-gray-100 rounded-xl p-6 shadow-md">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
                        {partners.map((partner) => (
                            <div
                                key={partner.name}
                                className="h-40 w-full flex justify-center relative grayscale hover:grayscale-0 transition duration-300"
                            >
                                <img
                                    src={partner.logo}
                                    alt={partner.name}
                                    className="h-full"
                                />
                            </div>
                        ))}
                        <div></div>
                        <div
                            className="h-40 w-full flex justify-center relative grayscale hover:grayscale-0 transition duration-300"
                        >
                            <img
                                src="https://logonoid.com/images/disney-logo.png"
                                alt="disney"
                                className="h-full"
                            />
                        </div>
                        <div
                            className="h-40 w-full flex justify-center relative grayscale hover:grayscale-0 transition duration-300"
                        >
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/DC_Comics_logo.svg/1200px-DC_Comics_logo.svg.png"
                                alt="DC"
                                className="h-full"
                            />
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="uppercase relative inline-block heading-bar  mt-8">Movies</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
                        {movies.map((movie) => (
                            <Card key={movie.id} className="card-animated-border cursor-pointer hover:brightness-90 transition duration-300">
                                <img
                                    src={movie.poster}
                                    alt={movie.name}
                                    className="w-full h-64 object-contain"
                                />
                                <CardHeader>
                                    <HoverCard>
                                        <HoverCardTrigger asChild>
                                            <TruncatableTitle>
                                                {`${movie.name} (${movie.year})`}
                                            </TruncatableTitle>
                                        </HoverCardTrigger>
                                        <HoverCardContent className="text-sm">
                                            {movie.name} ({movie.year})
                                        </HoverCardContent>
                                    </HoverCard>

                                    <CardDescription className="line-clamp-3 text-sm text-justify mt-1">
                                        {movie.description}
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    )
}
