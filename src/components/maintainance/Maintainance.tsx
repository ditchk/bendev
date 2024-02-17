import { IoMdBuild } from "react-icons/io";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert"

const Maintainance = () => {
  return (
    <div>
       <Alert className="flex flex-col justify-center items-center w-full h-screen">
            <AlertTitle className="text-4xl text-green-600 font-extrabold text-start"><IoMdBuild   className="text-green-600 text-5xl text-center" />Maintainance Ongoing</AlertTitle>
            <AlertDescription className="text-red-900 text-sm text-start">
                Its not you! its us. We are currently working on this page. You can still explore more pages  and features of the website. If you encounter any issues or have questions, please contact us immediately
            </AlertDescription>
        </Alert>
    </div>
  )
}

export default Maintainance
