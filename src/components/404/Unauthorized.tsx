import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { BiSolidMessageAltError } from 'react-icons/bi'

const Unauthorized = () => {
  return (
    <div className="flex justify-center items-center h-screen mx-5 md:mx-24">
        <Alert className="w-full">
            <BiSolidMessageAltError  className="text-red-600 text-3xl" />
                <AlertTitle className="text-4xl text-red-600 font-semibold">404</AlertTitle>
            <AlertDescription className="text-red-900">
                Page not found!
            </AlertDescription>
        </Alert>
    </div>
  )
}

export default Unauthorized
