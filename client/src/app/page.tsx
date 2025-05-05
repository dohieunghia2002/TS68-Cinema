import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import MoviesCarousel from "./MoviesCarousel";
import ItemCard from "./components/ItemCard/ItemCard";

export default function Home() {
  const updatedMovies = [
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

  const updatedSeries = [
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

  return (
    <div className="content w-[calc(100vw-13rem)]">
      <MoviesCarousel />
      <main>
        <h2 className="uppercase relative inline-block heading-bar mt-8">Recently updated movies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
          {updatedMovies.map((movie) => (
            <ItemCard key={movie.id} item={movie} />
          ))}
        </div>

        <h2 className="uppercase relative inline-block heading-bar mt-8">Recently updated TV-Series</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
          {updatedSeries.map((series) => (
            <ItemCard key={series.id} item={series} />
          ))}
        </div>
      </main>
    </div>
  );
}
