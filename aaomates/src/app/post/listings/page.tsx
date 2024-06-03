"use client"
import service from "@/appwrite/config"
import authService from '@/appwrite/auth'
import { useEffect, useState } from "react";
import { Query } from "appwrite";
import Listing from "@/components/post/Listing";



const Listings = () => {

  const [post, setPost] = useState()

  useEffect(() => {
    async function func() {
      await authService.getCurrentUser().then((userData: any) => {
        const fun = async () => {
          var filtered_posts = await service.getPosts([Query.equal("uid", userData?.email)]);
          setPost(filtered_posts);
        }
        fun()
      })
        .catch((error) => console.error("Error in fetching the user :: " + error));
    }
    func()
    console.log("Rendered")

  }, [])


  return (
    <div className='w-full py-8'>
      <div className='w-full max-w-7xl mx-auto px-4'>
        <div className='flex flex-wrap'>
          {post && (
            post?.documents.map((post: any) => (
              <div key={post.$id} className='p-2 w-1/4'>
                <Listing {...post} />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default Listings