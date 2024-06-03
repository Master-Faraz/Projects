"use client"

import Image from 'next/image'
import service from '@/appwrite/config'
import { useRouter } from 'next/navigation'
import { Button } from '../ui/button'
function Listing({ title, state, city, slug, phone, pincode, img1, name }: any) {

    const router = useRouter();

    return (
        <div className='w-full bg-gray-600 rounded-xl p-4'>
            <div className='w-full justify-center mb-4'>

                <Image
                    src={service.getFilePreview(img1).toString()}
                    alt={title}
                    className='rounded-xl'
                    width={500}
                    height={500}
                    priority // Prioritize loading for critical images
                />

            </div>
            <div>
                <h2
                    className='text-xl font-bold'
                >{title}</h2>
                <h2
                    className='text-lg italic'
                >{name}</h2>
            </div>
            <div className='flex space-x-4'>
                <Button variant={'outline'} onClick={() => {
                    router.push(`/post/createpost/${slug}`)
                }}>Update</Button>

                <Button variant={'outline'} onClick={() => {
                    service.deletePost(slug)
                    router.push(`/`)
                    setTimeout(() => {
                        router.push(`/post/listings`)
                        alert("Post deleted successfully")
                    }, 50);
                }}>Delete</Button>
            </div>
        </div>
    )
}


export default Listing
