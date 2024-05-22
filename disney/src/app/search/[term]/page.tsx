import MoviesCarousel from "@/components/home/MoviesCarousel";
import { getPopularMovies, getSearchedMovies } from "@/lib/getMovies";
import { notFound } from "next/navigation";

type Props = {
    params: {
        term: string
    }
}
const SearchPage = async ({ params: { term } }: Props) => {

    if (!term) notFound();

    // if we want to use abc wars but we get -> abc%20wars
    const termToUse = decodeURI(term);

    const movies = await getSearchedMovies(termToUse)
    const popularMovies = await getPopularMovies()


    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col space-y-4 mt-32 xl:mt-42">

                <h1 className="text-6xl font-bold px-10 ">Results for {termToUse}</h1>
                <MoviesCarousel title="Movies" movies={movies} isVertical />
                <MoviesCarousel title="You may also like" movies={popularMovies} />

            </div>


        </div>

    )
}

export default SearchPage