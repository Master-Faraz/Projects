"use client"
import service from "@/appwrite/config";
import Card from "@/components/Card";
import { useEffect, useState } from "react";


const AllPosts = () => {

    const [blogs, setBlogs] = useState([])


    // const handleClick = async () => {
    //     await service.getPosts().then((res) => setBlogs(res.documents))

    // }

    useEffect(() => {
        ; (async () => {
            await service.getPosts().then((res) => setBlogs(res.documents))

        })()
    }, [blogs])


    return (
        <div >
            {/* <button onClick={() => { handleClick() }}>Show all Blogs</button> */}
            <div className="flex space-x-10 mt-2">
                {
                    blogs?.map((blog: any, index: any) => (
                        <Card key={index} {...blog} />
                    ))
                }
            </div>
        </div>
    )
}

export default AllPosts