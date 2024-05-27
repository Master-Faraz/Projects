import CreatePost from "@/components/post/CreatePost"

const page = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <CreatePost />
        </div>
    )
}

export default page

























// import authService from "@/appwrite/auth";
// import service from "@/appwrite/config";
// import { ID } from "appwrite";

// const CreatePost = () => {

//     // slug transform is used to remove spaces from slug to make it a single variable
//     // const slugTransform = (title: string, pincode: string) => {
//     //     const value = title + pincode
//     //     if (value && typeof value === "string")
//     //         return value
//     //             .trim()
//     //             .toLowerCase()
//     //             .replace(/[^a-zA-Z\d\s]+/g, "-")
//     //             .replace(/\s/g, "-");

//     //     return "";
//     // };

//     const create = async () => {
//         const data = await authService.getCurrentUser().then((userData: any) => { return userData }).catch((error) => console.error("Error in fetching the user :: " + error))

//         // console.log(data)

//         const response = await service.createPost(
//             {
//                 "title": "Apex predator 9*9",
//                 "address": "Phulwari Sharif",
//                 "state": "Bihar",
//                 "city": "Patna",
//                 "status": true,
//                 "slug": ID.unique(),
//                 "phone": "9661918210",
//                 "pincode": "801505",
//                 "uid": data?.email,
//                 "description": "This is desc 1"
//             }
//         )

//         if (response) {
//             alert("Post created successfully")
//         }


//     }

//     const deletePost = async () => {
//         const response = await service.deletePost("appwrite_service2")

//         if (response)
//             alert("Post deleted successfully")
//     }

//     const updatePost = async () => {
//         const response = await service.updatePost("appwrite_service", { name: "updated name " })

//         if (response)
//             alert("Post updated successfully")
//     }

//     const showPost = async () => {
//         const response = await service.getPost("appwrite_service")

//         if (response) {
//             alert("getting post successfully")
//             console.log(response)

//         }
//     }

//     const AllPosts = async () => {
//         const response = await service.getPosts()
//         if (response) {
//             alert("getting posts successfully")
//             console.log(response)

//         }
//     }

//     return (
//         <div className="flex flex-col my-5 space-x-8 space-y-8">
//             <h1>Create Post</h1>
//             <button type="button" onClick={() => { create() }}>Create Post </button>

//             <button type="button" onClick={() => { deletePost() }}>Delete Post </button>

//             <button type="button" onClick={() => { updatePost() }}>Update Post </button>

//             <button type="button" onClick={() => { showPost() }}>Show Post </button>

//             <button type="button" onClick={() => { AllPosts() }}>All Posts </button>

//         </div>
//     )
// }

// export default CreatePost