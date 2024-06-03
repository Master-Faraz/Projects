"use client"
import authService from "@/appwrite/auth"
async function getuserdata () {
    return await authService.getCurrentUser().then((userData: any) => { return userData }).catch((error) => console.error("Error in fetching the user :: " + error));
    // console.log(userData);
    // return userData
}

export default getuserdata