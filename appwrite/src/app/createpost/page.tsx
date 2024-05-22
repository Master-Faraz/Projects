"use client"


import service from "@/appwrite/config";

const CreatePost = () => {

    const create = async () => {
        const response = await service.createPost(
            {
                "name": "service2",
                "address": "Phulwari Sharif",
                "state": "Bihar",
                "city": "Patna",
                "status": true,
                "slug": "appwrite_service2",
                "phone": "9661918210",
                "pin": "801505",
            }
        )

        if (response) {
            alert("Post created successfully")
        }

        // const client = new Client()
        //     .setEndpoint(conf.APPWRITE_ENDPOINT) // Your API Endpoint
        //     .setProject(conf.APPWRITE_PROJECT_ID); // Your project ID

        // const databases = new Databases(client);

        // const result = await databases.createDocument(
        //     conf.APPWRITE_DATABASE_ID, // databaseId
        //     conf.APPWRITE_COLLECTION_ID, // collectionId
        //     ID.unique(), // documentId
        // {
        //     "name": "test4 create",
        //     "address": "Phulwari Sharif",
        //     "state": "Bihar",
        //     "city": "Patna",
        //     "status": true,
        //     "slug": "test1",
        //     "phone": "9661918210",
        //     "pin": "801505",

        // }, // data
        // );

        // console.log(result);
    }

    const deletePost = async () => {
        const response = await service.deletePost("appwrite_service2")

        if (response)
            alert("Post deleted successfully")
    }

    const updatePost = async () => {
        const response = await service.updatePost("appwrite_service", { name: "updated name " })

        if (response)
            alert("Post updated successfully")
    }

    const showPost = async () => {
        const response = await service.getPost("appwrite_service")

        if (response) {
            alert("getting post successfully")
            console.log(response)

        }
    }

    const AllPosts = async () => {
        const response = await service.getPosts()
        if (response) {
            alert("getting posts successfully")
            console.log(response)

        }
    }

    return (
        <div className="flex flex-col my-5 space-x-8 space-y-8">
            <h1>Create Post</h1>
            <button type="button" onClick={() => { create() }}>Create Post </button>

            <button type="button" onClick={() => { deletePost() }}>Delete Post </button>

            <button type="button" onClick={() => { updatePost() }}>Update Post </button>

            <button type="button" onClick={() => { showPost() }}>Show Post </button>

            <button type="button" onClick={() => { AllPosts() }}>All Posts </button>

        </div>
    )
}

export default CreatePost