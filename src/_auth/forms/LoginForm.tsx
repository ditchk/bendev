import { signInAccount } from "@/lib/appwrite/api";
import { FormEvent, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { motion } from 'framer-motion'
import { useToast } from "@/components/ui/use-toast";
import useUserContext from "@/context/useUserContext";
import SubmitLoader from "@/components/loaders/SubmitLoader";

export default function LoginForm () {

    const navigate = useNavigate();
    const { isAuthenticated } = useUserContext();
    const[formData, SetFormData] =useState({
        email: "",
        password: "",
    })
    const [loading, setLoading] = useState(false)
    const { toast } = useToast()

    const login = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault(),
        setLoading(true)
        try {
            const session= await signInAccount(formData);

            if(session) {
                setLoading(false)
                navigate("/")
            } else {
                setLoading(false)
                toast({
                    title: "Error, please check your info and try again"
                })
            }
        } catch (error) {
           throw Error
        }
    }

    if(isAuthenticated) {
        <Navigate to={'/'} />
    }
    return (
        <div className="flex justify-center items-center h-full w-full">
            <motion.form
            onSubmit={login}
            className="loginForm"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0, 0.71, 0.2, 1.01]
            }}
        >
            <Link to={'/'}>
                <img src="/assets/images/logo1.png" width={100} height={100} alt="Bswp" />
            </Link>
            <div className="flex flex-col w-full mt-5 gap-2 h-fit justify-center items-start">
                <label htmlFor="email" className="FormLabels">Email</label>
                <input
                    id="email" 
                    className="Form_inpt" 
                    type="text" 
                    value={formData.email} 
                    placeholder="Enter your username"
                    onChange={(e) => SetFormData((prev) => ({
                        ...prev, email: e.target.value
                    }))}
                    required
                />
                <label htmlFor="password" className="FormLabels">Password</label>
                <input
                    id="password" 
                    className="Form_inpt" 
                    type="password"
                    value={formData.password} 
                    placeholder="Enter your password"
                    onChange={(e) => SetFormData((prev) => ({
                        ...prev, password: e.target.value
                    }))}
                    required
                />
            </div>
            <button type="submit" className="LoginBtn">
            {loading ? (
                <SubmitLoader />
            ): (
                "LogIn"
            )}
            </button>
        <div>
            <h3 className="text-lg text-center font-bold font-moon-dance text-green-500">Want to join? Contact me using the livechat</h3>
        </div>
        </motion.form>
       
        </div>
        
    )
}