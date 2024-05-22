"use client"
import service from "@/appwrite/config";
import Card from "@/components/Card";
import { useState } from "react";

const AllPosts = () => {

    const [blogs, setBlogs] = useState([])

        ; (async () => {
            const response = await service.getPosts()
            setBlogs(response.documents)
        })()

    return (
        <div >
            <div className="flex space-x-10">
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