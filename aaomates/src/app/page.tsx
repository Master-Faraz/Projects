
import LogoutBun from "@/components/Home/LogoutBun"
import UserData from "@/components/Home/UserData"
import Link from "next/link"

const Home = () => {


  return (
    <div className="flex flex-col items-center min-h-screen my-6 space-y-10">
      <h1 className="text-4xl text-yellow-500">Home page</h1>
      <UserData/>
      <div className="flex space-x-10 my-10">
        <LogoutBun />
        <Link href="/auth/register" className=" bg-slate-700 px-2 py-1 rounded-xl">Signup</Link>
        <Link href="/auth/login" className=" bg-slate-700 px-2 py-1 rounded-xl">Signin</Link>
      </div>
    </div>

  )
}

export default Home


