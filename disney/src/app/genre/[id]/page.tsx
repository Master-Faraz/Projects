import MoviesCarousel from "@/components/home/MoviesCarousel"
import { getDiscoverMovies } from "@/lib/getMovies"

type Props = {
    params: { id: string },
    searchParams: { genre: string }
}

const GenrePage = async ({ params: { id }, searchParams: { genre } }: Props) => {

    const movies = await getDiscoverMovies(id)
    // console.log(props) -> to find the props and its type

    return (
        // http://localhost:3000/genre/80?genre=Crime 
        // <div>id : {id} genre : {genre}</div>

        <div className="max-w-7xl mx-auto">
            {/* Azure openAI suggestions */}
            <div className="flex flex-col space-y-5 mt-32 xl:mt-42">
                <h1 className="text-6xl font-black px-10 ">Results for {genre}</h1>

                <MoviesCarousel title={`genre`} movies={movies} isVertical />

            </div>

        </div>
    )
}

export default GenrePage