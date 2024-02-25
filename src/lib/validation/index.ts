import * as z from 'zod';

export const messageValidation = z.object({
    name: z.string().min(2, {message: 'Name cant be empty'}),
    phone: z.string().min(2, {message: 'phone number cant be empty'}),
    email: z.string().min(2, {message: 'Enter a valid email'}),
    message: z.string().min(2, {message: 'message cant be less that 10 characters'})
  })

export const SigninValidation = z.object({
    email: z.string().min(2,{message: "Please provide a valid email"}),
    password:z.string().min(2,{message: "Password must be atleast 8 characters long"})
  })

export const SignupValidation = z.object({
  name: z.string().min(2),
  username: z.string().min(2),
  email: z.string().min(2),
  password:z.string().min(2,{message: "Password must be atleast 8 characters long"})
})

export const projectValidation = z.object({
    ProjectName: z.string().min(5).max(115, { message: "Cannot exceed 115 characters" }),
    file: z.custom<File[]>(),
    projectInfo: z.string().min(2).max(200, { message: "Cannot exceed 200 characters" }),
  })

export const PackageInfoValidation = z.object({
  name: z.string().min(5, {message: "Please check your input"}).max(100, {message: "Name cannot exceed 100 characters"}),
  email: z.string().email("Invalid Email"),
  description: z.string().min(0).max(300,{message:"Description cannot exceed 300 characters"}).optional()
});