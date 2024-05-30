import service from '@/appwrite/config'
import Image from 'next/image'

const page = async ({ params }: { params: { slug: string } }) => {


    var data = await service.getPost(params.slug)
    // console.log(data)

    return (
        <div className='mt-[10vh] mx-4'>
            <div className='flex font-bold text-3xl w-full justify-center'>
                <h1>Title : {data?.title}</h1>
            </div>

            {/* Images */}
            <div className='font-bold text-xl w-full justify-center'>
                <h1>Images:</h1>
                <div className='flex space-x-5 my-4'>
                    <Image
                        src={service.getFilePreview(data?.img1).toString()}
                        alt={data?.title}
                        className='rounded-xl'
                        width={500}
                        height={200}
                        priority // Prioritize loading for critical images
                    />
                    <Image
                        src={service.getFilePreview(data?.img2).toString()}
                        alt={data?.title}
                        className='rounded-xl'
                        width={500}
                        height={500}
                        priority // Prioritize loading for critical images
                    />
                    <Image
                        src={service.getFilePreview(data?.img3).toString()}
                        alt={data?.title}
                        className='rounded-xl'
                        width={500}
                        height={500}
                        priority // Prioritize loading for critical images
                    />
                </div>
            </div>


            <div className='flex space-x-10 '>
                <h1 >Name : <span className='dark:text-gray-400 font-bold '>{data?.name}</span> </h1>
                <h1 >Email :  <span className='dark:text-gray-400 font-bold '>{data?.uid}</span> </h1>
                <h1 >City : <span className='dark:text-gray-400 font-bold '>{data?.city}</span> </h1>
                <h1 >State :  <span className='dark:text-gray-400 font-bold '>{data?.state}</span> </h1>

                <h1 >Pincode : <span className='dark:text-gray-400 font-bold '>{data?.pincode}</span> </h1>
                <h1 >Phone :  <span className='dark:text-gray-400 font-bold '>{data?.phone}</span> </h1>

                <h1 >Status :  <span className='dark:text-gray-400 font-bold '>{(data?.status) === true ? "Active" : "Deactive"}</span> </h1>
            </div>
            <div className='w-full mt-4 flex flex-col space-y-4'>
                <h1 className='font-bold text-xl'>Description : </h1>
                <p>{data?.description}</p>
            </div>
        </div>
    )
}

export default page