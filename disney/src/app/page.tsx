import CarouselBannerWrapper from "@/components/home/CarouselBannerWrapper";
import MoviesCarousel from "@/components/home/MoviesCarousel";
import { getPopularMovies, getTopRatedMovies, getUpcomingMovies } from "@/lib/getMovies";

export default async function Home() {

  const upcommingMovies = await getUpcomingMovies();
  const topRatedMovies = await getTopRatedMovies();
  const popularMovies = await getPopularMovies()


  return (
    <main className="">

      <CarouselBannerWrapper />

      <div className="flex flex-col space-y-2 xl:-mt-48">
        <MoviesCarousel movies={upcommingMovies} title="Upcoming" isVertical={false} />
        <MoviesCarousel movies={topRatedMovies} title="Top Rated" isVertical={false} />
        <MoviesCarousel movies={popularMovies} title="Popular" isVertical={false} />
      </div>
    </main>
  );
}
