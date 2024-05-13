"use client"
import authService from "@/appwrite/auth"
const LogoutBun = () => {

    const logout = async () => {
        try {
             await authService.logout();
            alert("Logout successfull")
        } catch (error) {
            console.log(error)
        }
    };
    return (
        <button type="button" onClick={logout} className="bg-blue-500 text-black p-2 rounded-xl">Logout</button>
    )
}

export default LogoutBun