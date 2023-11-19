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

export const projectValidation = z.object({
    projectName: z.string().min(5).max(2200),
    file: z.custom<File[]>(),
    projectInfo: z.string().min(2).max(100),
  })