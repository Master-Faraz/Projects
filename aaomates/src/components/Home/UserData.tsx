"use client"
import authService from "@/appwrite/auth"
import { useState } from "react"

const UserData = () => {
    const [user, setUser] = useState(null)

    const handleClick = () => {

        try {
            authService.getCurrentUser().then((userData: any) => setUser(userData)).catch((error) => console.error("Error in fetching the user :: " + error))

        } catch (error) {
            setUser(null)
            console.log("User Data try catch error" + error)
        }

    }
    return (

        <div className="flex space-x-5">
            <button type="button" onClick={() => { handleClick() }} className="bg-gray-700 mx-7 px-2 py-1 rounded-2xl">Get current user</button>
            <p>Current user :: <span className="text-orange-600">{user === null ? "User not logged in" : (user !== null && (user?.email ? user.email : ""))}</span></p>
        </div>

    )
}

export default UserData