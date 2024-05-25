"use client";

import CardWrapper from "./card-wrapper";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { z } from "zod";
import { useFormStatus } from "react-dom";
import { useState } from "react";
import { LoginSchema } from "@/utils/schemas";
import { useRouter } from "next/navigation";
import authService from "@/appwrite/auth";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter()

  const form = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof LoginSchema>) => {
    setLoading(true);
    try {
      const val = await authService.login(data)
      // console.log(val)

    } catch (error) {
      alert(error?.message)
    }

    setLoading(false)
    router.push("/")

  };

  const { pending } = useFormStatus();
  return (
    <CardWrapper
      label="Login to your account"
      title="Login"
      backButtonHref="/auth/register"
      backButtonLabel="Don't have an account? Register here."
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      placeholder="johndoe@gmail.com"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input {...field} type="password" placeholder="******" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" className="w-full" disabled={pending}>
            {loading ? "Logging in..." : "Login"}
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};

export default LoginForm;




// import authService from '@/appwrite/auth'
// import { useRouter } from 'next/navigation'
// import { useState } from 'react'
// import { useForm } from 'react-hook-form'

// const LoginForm = () => {
//     const router = useRouter()
//     const [value, setvalue] = useState("Signin")
//     const {
//         register,
//         handleSubmit,
//         formState: { errors, isSubmitting },
//         reset,
//     } = useForm()

//     const submit = async (data: any) => {
//         setvalue("Signing in")
//         const val = await authService.login(data)
//         console.log(val)
//         setvalue("Signin")
//         reset
//         router.push("/")
//     }

//     return (
//         <div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%'>
//             {/* Card */}
//             <div className="bg-white p-5 w-1/3 flex flex-col rounded-3xl text-black ">

//                 {/* Header of card */}
//                 <div className="flex flex-col items-center justify-center">
//                     <h1 className={`text-3xl font-semibold drop-shadow-md `}> 🔐 AaoMates    </h1>

//                     <p className="text-md m-4 text-gray-500">Sign In to your account</p>
//                 </div>

//                 {/* Form */}
//                 <form onSubmit={handleSubmit(submit)} className="flex flex-col mx-4 my-2">



//                     {/* Email */}

//                     <label htmlFor="email" className=" text-gray-700 mt-2">Email</label>

//                     <input type="email" placeholder='abc@gmailcom' id='email'{...register("email", {
//                         required: "Email is required",
//                     })} className="my-3 outline-slate-200  mx-1 outline outline-offset-4 outline-2 rounded" />

//                     {errors.email && (<p className='text-red-600'>{errors.email?.message?.toString()}</p>)}


//                     {/* Password */}
//                     <label htmlFor="password" className=" text-gray-700 mt-2">Password</label>

//                     <input type="password" placeholder="Enter a password" id='password'{...register("password", {
//                         required: "password is required",
//                         minLength: { value: 6, message: "Password must be atleast 6 character long" }
//                     })} className="my-3 outline-slate-200  mx-1 outline outline-offset-4 outline-2 rounded" />

//                     {errors.password && (<p className='text-red-600' >{errors.password?.message?.toString()}</p>)}


//                     {/* Button */}

//                     <button type="submit" disabled={isSubmitting} className=" my-3 py-2 px-7 text-center rounded-lg font-semibold drop-shadow-lg bg-black text-white">
//                         {value}
//                     </button>

//                 </form>
//             </div>
//         </div>
//     )
// }

// export default LoginForm