import { Genres } from '../../../typings';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';


const GenreDropdown = async () => {
    const url = "https://api.themoviedb.org/3/genre/movie/list";

    // object
    const options: RequestInit = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_READ_ACCESS_TOKEN}`,
        },
        next: {
            revalidate: 60 * 60 * 24 // ISR caching revalidate every 24 hrs
        }
    };

    const response = await fetch(url, options)
    const data = (await response.json()) as Genres


    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="text-white flex justify-center items-center">
                Genre <ChevronDown className="ml-1" />
            </DropdownMenuTrigger>

            <DropdownMenuContent>
                <DropdownMenuLabel>Select a Genre</DropdownMenuLabel>
                <DropdownMenuSeparator />

                {data.genres.map((genre) => (
                    <DropdownMenuItem className="cursor-pointer" key={genre.id}>
                        <Link href={`/genre/${genre.id}?genre=${genre.name}`}>
                            {genre.name}
                        </Link>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default GenreDropdown