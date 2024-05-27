"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { CreatePostSchema } from "@/utils/schemas"
import authService from "@/appwrite/auth"
import service from "@/appwrite/config"
import { useState } from 'react';




const CreatePost = () => {


    // 1. Define React Hook Form and zod for client side validation.
    const form = useForm<z.infer<typeof CreatePostSchema>>({
        resolver: zodResolver(CreatePostSchema),
        defaultValues: {
            title: "",
            address: "",
            state: "",
            city: "",
            phone: "",
            pincode: "",
            uid: "",
            description: "",
            slug: "",
            status: false,
            img1: "",
            img2: "",
            img3: "",
            img4: "",
            img5: "",
        },
    })

    // 2. On-Submit handler
    const onSubmit = async (values: z.infer<typeof CreatePostSchema>) => {

        try {
            const data = await authService.getCurrentUser().then((userData: any) => { return userData }).catch((error) => console.error("Error in fetching the user :: " + error))

            values.uid = data?.email;
            values.slug = values.city + values.pincode;
            values.status = true;

            values.img1 = "Img1";
            values.img2 = "img2";
            values.img3 = "img3";
            values.img4 = "img4";
            values.img5 = "img5";

            const response = await service.createPost(values)
            if (response) {
                alert("Post created successfully")
            }
            else {
                alert("Post not created. Please try again")
            }
        } catch (error) {
            console.log("Error in onSubmit :: " + error)
        }
    }

    // ******************************************** Image Handling  ******************************


    // const [selectedImages, setSelectedImages] = useState([]);
    // const [img1, setimg1] = useState();
    // const [img2, setimg2] = useState();
    // const [img3, setimg3] = useState();
    // const [img4, setimg4] = useState();
    // const [img5, setimg5] = useState();

    // const handleImageChange = (event: any) => {
    //     const files = event.target.files;

    //     if (files.length > 5) {
    //         alert('You can only select up to 5 images.'); // Or display an error message
    //         return; // Prevent updating state if selection exceeds limit
    //     }

    //     setSelectedImages([...files]); // Update state with all selected files (up to 4)
    // };

    // const uploadMultipleImages = async () => {
    //     var count = 1;
    //     const uploadPromises = selectedImages.map(async (file) => {
    //         try {
    //             const response = await service.uploadFile(file); // Call service function
    //             if (response) {
    //                 if (count === 1) {
    //                     setimg1(response?.$id);
    //                     count = count + 1;
    //                 }
    //                 else if (count === 2) {
    //                     setimg2(response?.$id);
    //                     count = count + 1;
    //                 }
    //                 else if (count === 3) {
    //                     setimg3(response?.$id);
    //                     count = count + 1;
    //                 }
    //                 else if (count === 4) {
    //                     setimg4(response?.$id);
    //                     count = count + 1;
    //                 }
    //                 else if (count === 5) {
    //                     setimg5(response?.$id);
    //                     count = count + 1;
    //                 }


    //             }
    //             // response?.$id
    //         } catch (error) {
    //             console.error('Error uploading image:', error);
    //             // Handle individual upload errors (e.g., display error message)
    //         }
    //     });


    //     try {
    //         await Promise.all(uploadPromises);
    //         console.log('All images uploaded successfully!');
    //         // Handle overall success (e.g., display success message)
    //     } catch (error) {
    //         console.error('Error uploading some or all images:', error);
    //         // Handle overall upload failure (e.g., notify user)
    //     }
    // };

    //  ******************************************************************************************

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex space-y-8 space-x-8">

                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Title</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter a title" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>City</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter your city" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="state"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>State</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter your state" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter the description" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Phone</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter your mobile number" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="pincode"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Pincode</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter your pincode" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Address</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter your address" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* ******************************************************************************* */}

                {/* <div>
                    <div className="w-1/3 px-2">
                        <label>Your Image Files (Max 5)
                            <input type="file" name="myImages" accept="image/*" multiple onChange={handleImageChange} />
                        </label>

                        <button type="button" className="w-full" onClick={() => uploadMultipleImages()}>
                            Upload Images
                        </button>

                        {/* {<div className="w-full mb-4">
                    <img
                        src={service.getFilePreview("665358590032b95733c3")}
                        alt={"Not found"}
                        className="rounded-lg"
                    />
                </div>} */}
                {/* </div> */}
                {/* </div> */}

                {/* ******************************************************************************* */}



                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}

export default CreatePost


