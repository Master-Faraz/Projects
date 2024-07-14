"use client"

import Link from "next/link"
import { ThemeToggler } from "./ThemeToggler"
import { useEffect, useState } from "react"
import authService from "@/appwrite/auth"

const Header = () => {
  const [user, setUser] = useState(null)
  useEffect(() => {
    async function UserDetails() {
      try {
        authService.getCurrentUser().then((userData: any) => setUser(userData)).catch((error) => console.error("Error in fetching the user :: " + error))

      } catch (error) {
        setUser(null)
        console.log("User Data try catch error" + error)
      }
    }
    UserDetails()
  }, [user])
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
          {user ? (<span className="text-orange-600">{user === null ? "User not logged in" : (user !== null && (user?.email ? user.email : ""))}</span>) : (<Link href={"/auth/login"}>Login</Link>)}
        </div>
        <ThemeToggler />
      </div>
    </header>
  )
}

export default Header