"use client"
import authService from "@/appwrite/auth"
const getuserdata = async () => {
    const userData = await authService.getCurrentUser()
    return userData?.email
}

export default getuserdata