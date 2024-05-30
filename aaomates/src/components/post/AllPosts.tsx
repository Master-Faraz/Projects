import appwriteService from '@/appwrite/config'
import Card from "@/components/Card";


async function AllPosts() {

    var posts = await appwriteService.getPosts([]).then((posts: any) => {
        if (posts) {
            return posts.documents
        }
    })

    return (

        <div className='w-full py-8'>
            <div className='w-full max-w-7xl mx-auto px-4'>
                <div className='flex flex-wrap'>
                    {posts.map((post: any) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <Card {...post} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AllPosts
