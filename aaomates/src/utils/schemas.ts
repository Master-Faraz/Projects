import * as z from 'zod';

export const RegisterSchema = z.object({
    email: z.string().email({
        message: "Please enter a valid email address"
    }),
    name: z.string().min(1, {
        message: "Please enter your name"
    }),
    password: z.string().min(6, {
        message: "Password must be at least 6 characters long"
    }),
    confirmPassword: z.string().min(6, {
        message: "Password must be at least 6 characters long"
    })
}).refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Password do not match"
})

export const LoginSchema = z.object({
    email: z.string().email({
        message: "Please enter a valid email address"
    }),
    password: z.string().min(6, {
        message: "Password must be at least 6 characters long"
    })
})

export const CreatePostSchema = z.object({
    title: z.string({ message: "Title is required" }).min(2).max(50, { message: "Title must be less than 50 characters long" }),

    address: z.string({ message: "address is required" }).min(2).max(150, { message: "address must be less than 150 characters" }),

    state: z.string({ message: "State is required" }).min(2).max(30, { message: "State must be less than 30 characters" }),

    city: z.string({ message: "City is required" }).min(2).max(30, { message: "City must be less than 30 characters" }),

    phone: z.string({ message: "Mobile Number is required" }).min(8, { message: "Mobile Number must be atleast 8 characters long" }).max(12, { message: "Mobile Number must be less than 12 characters long" }),

    pincode: z.string({ message: "Pin Code is required" }).min(6, { message: "Pin Code must be 6 characters long" }).max(6, { message: "Pin Code must be 6 characters long" }),

    uid: z.string({ message: "UID is required" }),

    description: z.string({ message: "description is required" }).max(250, { message: "Description must be less than 250 characters" }),

    slug: z.string({ message: "Slug is required" }),

    status: z.boolean({ message: "Status is required" }),

    img1: z.string({ message: "Cover image is required" }),
    img2: z.string(),
    img3: z.string(),
    img4: z.string(),
    img5: z.string(),

})