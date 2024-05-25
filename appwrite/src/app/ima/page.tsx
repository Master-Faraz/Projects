// Import necessary libraries
"use client"
import service from "@/appwrite/config";
import conf from "@/conf/conf";
import { Client, Storage, ID } from "appwrite";
import { useState } from "react";
const page = () => {

    const client = new Client()
        .setEndpoint(conf.APPWRITE_ENDPOINT)
        .setProject(conf.APPWRITE_PROJECT_ID);

    const storage = new Storage(client);

    // Function to upload images
    const uploadImages = async (file: File) => {
        const promise = storage.createFile(
            conf.APPWRITE_BUCKET_ID,
            "file1",
            file
        );

        promise.then(function (response) {
            console.log(response); // Success
        }, function (error) {
            console.log(error); // Failure
        });
    };


    const [image, setimage] = useState()

    const handleImageChange = (event: any) => {
        const file = event.target.files[0];
        setimage(file)
    };

    // JSX code for the upload form
    return (


        <div>
            <div className="w-1/3 px-2">
                <label>Your Image File
                    <input type="file" name="myImage" accept="image/*" onChange={handleImageChange} />
                </label>

                <button type="submit" className="w-full" onClick={() => {
                    uploadImages(image)
                }}>
                    {"Submit"}
                </button>

                {<div className="w-full mb-4">
                    <img
                        src={service.getFilePreview("file1")}
                        alt={"Not found"}
                        className="rounded-lg"
                    />
                </div>}

            </div>
        </div>
    );
};

export default page;




// "use client"
// import conf from "@/conf/conf";
// import { Client, Storage, ID } from "appwrite";

// const page = () => {

//     const uploadImages = async (file : File) => {
//         const client = new Client()
//             .setEndpoint(conf.APPWRITE_ENDPOINT)
//             .setProject(conf.APPWRITE_PROJECT_ID);

//         const storage = new Storage(client);

//         const promise = storage.createFile(
//             conf.APPWRITE_BUCKET_ID,
//             ID.unique(),
//             file
//         );

//         promise.then(function (response) {
//             console.log(response); // Success
//         }, function (error) {
//             console.log(error); // Failure
//         });
//     }

//     return (
//         <div>
//             <div className="w-1/3 px-2">
//                 <label>Your Image File
//                     <input type="file" name="myImage" accept="image/*" />
//                 </label>
//                 <button type="submit" className="w-full" onClick={()=>{
//                     uploadImages()
//                 }}>
//                     {"Submit"}
//                 </button>
//             </div>
//         </div>
//     )
// }

// export default page