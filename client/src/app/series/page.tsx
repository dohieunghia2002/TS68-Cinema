
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

const series = [
    {
        id: 5, name: "First of Frost", year: 2025,
        poster: 'https://i.mydramalist.com/VXzRyz_4f.jpg',
        thumbnail: 'https://radii.co/wp-content/uploads/2025/03/radii-the-first-frost-success-backlash-01.jpg',
        description: 'Wen Yifan, a reporter, meets Sang Yan, her former high school crush at a bar. Initially pretending not to recognize each other, circumstances lead them to become housemates. They rekindle their love and reconcile the relationship.'
    },
    {
        id: 6, name: "WandaVision", year: 2021,
        poster: 'https://m.media-amazon.com/images/I/91boO4r6UML._AC_UF1000,1000_QL80_.jpg',
        thumbnail: 'https://media.glamour.com/photos/6000a7b794257b37bbadd41c/master/w_2560%2Cc_limit/wvk7040_trl_comp_v003_uhd_r709_d85abcd9.jpeg',
        description: "Blends the style of classic sitcoms with the MCU, in which Wanda Maximoff and Vision - two super-powered beings living their ideal suburban lives - begin to suspect that everything is not as it seems."
    },
    {
        id: 7, name: "Loki Season 1", year: 2019,
        poster: 'https://m.media-amazon.com/images/I/81e1IWtwFQL._AC_UF1000,1000_QL80_.jpg',
        thumbnail: 'https://images.immediate.co.uk/production/volatile/sites/3/2020/09/loki-tv-show-ddb01c2.jpg',
        description: "The mercurial villain Loki resumes his role as the God of Mischief in a new series that takes place after the events of \"Avengers: Endgame.\""
    },
    {
        id: 8, name: "Samurai 7", year: 2004,
        poster: 'https://m.media-amazon.com/images/M/MV5BYjVhMmRjMjYtNmFhYy00ZGQ2LTg1YWItNmMwNzBkZGFhZDk4XkEyXkFqcGc@._V1_.jpg',
        thumbnail: 'https://occ-0-8407-92.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABXj8y03gxkd8FIWKqgzOMgGvRHzyqYRrd13pE_rHn5hWK1f1Za1G-6c-yF1-yOudKOTlkPuJxKlCzwX72WcPyfeETNYS9FYCQ6k7.jpg?r=4ae',
        description: "A small village gets raided by bandits every harvest season. The villagers can't take it anymore, and decide to recruit samurais to defend them in exchange for rice. Will the villagers find who would defend them from the bandits?"
    },
    {
        id: 9, name: "Kamen Rider Decade", year: 2009,
        poster: 'https://m.media-amazon.com/images/M/MV5BNzQ5MjY3MjUtZjhlYS00YjEwLWE5M2YtNTRkZDU4ZDc5ODZkXkEyXkFqcGc@._V1_.jpg',
        thumbnail: 'https://gundamshop.vn/wp-content/uploads/2023/05/064e9fdaa83fb3340b601adbc323eee2.jpg',
        description: "Nine universes of the previous Kamen Riders merging into one that would destroy all the worlds. Tsukasa Kadoya transforms into Kamen Rider Decade and travels to all of the Another Rider's worlds and eliminate the anomalies in those worlds."
    },
    {
        id: 10, name: "Descendants of The Sun", year: 2016,
        poster: 'https://m.media-amazon.com/images/M/MV5BYTQ3MWI2MjEtM2Q3NS00YjU4LWFkZGItNDA0OTc2NjcwZWY3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
        thumbnail: 'https://0.soompi.io/wp-content/uploads/2016/02/17154750/descendants-of-the-sun2.jpg',
        description: "This drama tells of the love story that develops between a surgeon and a special forces officer."
    },
    {
        id: 11, name: "Business Proposal", year: 2022,
        poster: 'https://m.media-amazon.com/images/M/MV5BYWM2NTM4MTktNDFiNi00NTI3LThiZTgtZmJiZTQ2NzdhNDE3XkEyXkFqcGc@._V1_.jpg',
        thumbnail: 'https://cdn-media.sforum.vn/storage/app/media/wp-content/uploads/2022/03/1-39.jpg',
        description: "In disguise as her friend, Ha-ri shows up to a blind date to scare him away. But plans go awry when he turns out to be her CEO - and makes a proposal."
    },
    {
        id: 12, name: "Crash Landing On You", year: 2019,
        poster: 'https://m.media-amazon.com/images/M/MV5BZmYyYTczZGYtMmM4MC00OWRiLWFlN2ItZTA4ODVlZjljOWNjXkEyXkFqcGc@._V1_.jpg',
        thumbnail: 'https://img.jakpost.net/c/2020/02/17/2020_02_17_86796_1581916183._large.jpg',
        description: "The absolute top secret love story of a chaebol heiress who made an emergency landing in North Korea because of a paragliding accident and a North Korean special officer who falls in love with her and who is hiding and protecting her."
    }
]

export default function Series() {
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
                    <h2 className="uppercase relative inline-block heading-bar  mt-8">TV-Series</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
                        {series.map((film) => (
                            <Card key={film.id} className="card-animated-border cursor-pointer hover:brightness-90 transition duration-300">
                                <img
                                    src={film.poster}
                                    alt={film.name}
                                    className="w-full h-64 object-contain"
                                />
                                <CardHeader>
                                    <HoverCard>
                                        <HoverCardTrigger asChild>
                                            <TruncatableTitle>
                                                {`${film.name} (${film.year})`}
                                            </TruncatableTitle>
                                        </HoverCardTrigger>
                                        <HoverCardContent className="text-sm">
                                            {film.name} ({film.year})
                                        </HoverCardContent>
                                    </HoverCard>

                                    <CardDescription className="line-clamp-3 text-sm text-justify mt-1">
                                        {film.description}
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
