import Link from "next/link"
import { ThemeToggler } from "./ThemeToggler"


const Header = () => {
  return (
    <header className="fixed w-full z-20 top-0 flex items-center justify-between p-5 ">

      <Link href="/" className="mr-10">
        <h1>Logo</h1>
      </Link>

      <div className="flex space-x-9">
        <div className="mt-1 flex space-x-9">
          <Link href={"/post/listings"}>My Listings</Link>
          <Link href={"/post/allposts"}>Find RoomMates</Link>
          <Link href={"/post/createpost"}>Share Room</Link>
          <Link href={"/auth/register"}>Register</Link>
          <Link href={"/auth/login"}>Login</Link>
        </div>
        <ThemeToggler />
      </div>
    </header>
  )
}

export default Header