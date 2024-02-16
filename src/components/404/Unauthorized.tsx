import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { BiSolidMessageAltError } from 'react-icons/bi'

const Unauthorized = () => {
  return (
    <div className="flex justify-center items-center h-screen mx-5 md:mx-24">
        <Alert className="flex flex-col justify-center items-center w-full md:w-2/3">
            <BiSolidMessageAltError  className="text-red-600 text-5xl text-center" />
            <AlertTitle className="text-4xl text-red-600 font-extrabold">Error 404</AlertTitle>
            <AlertDescription className="text-red-900 text-sm">
                Oops!! Page not found!
            </AlertDescription>
        </Alert>
    </div>
  )
}

export default Unauthorized
