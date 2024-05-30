import appwriteService from "../appwrite/config"
import Link from 'next/link'
import Image from 'next/image'

function PostCard({ title, state, city, slug, phone, pincode, img1, name }: any) {
    return (
        <Link href={`/post/userpost/${slug}`}>
            <div className='w-full bg-gray-600 rounded-xl p-4'>
                <div className='w-full justify-center mb-4'>
               
                    <Image
                        src={appwriteService.getFilePreview(img1).toString()}
                        alt={title}
                        className='rounded-xl'
                        // Additional props for optimization (optional):
                        // layout='fill' // Adjusts image size to container
                        width={500}
                        height={500}
                        priority // Prioritize loading for critical images
                        // placeholder='blur' // Blur-up placeholder (optional)
                    />

                </div>
                <h2
                    className='text-xl font-bold'
                >{title}</h2>
                <h2
                    className='text-lg italic'
                >{name}</h2>
            </div>
        </Link>
    )
}


export default PostCard



// const Card = ({ name, address ,state,city,phone}: any) => {
//     return (
//         <div className="bg-white shadow-sm rounded-full">
//             <div className="p-4">
//                 <h3 className="text-lg font-medium mb-2">{name}</h3>
//                 <p className="text-gray-600 line-clamp-3">{address} {city} {state} </p>
//                 <p className="text-gray-600 line-clamp-3">{phone}</p>
//                 <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-600 hover:bg-blue-700 rounded-md">Check here</a>
//             </div>
//         </div>
//     )
// }

// export default Card