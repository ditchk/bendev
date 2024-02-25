import { IoMdBuild } from "react-icons/io";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert"

const Maintainance = () => {
  return (
    <div className="flex flex-1 justify-center items-center w-full h-screen">
       <Alert className="flex flex-col justify-center items-center w-full md:w-2/3">
            <AlertTitle className="box-border flex flex-row justify-start items-start text-xl text-green-600 font-extrabold text-start"><IoMdBuild  className="text-green-600 text-4xl text-center" />Maintainance Ongoing</AlertTitle>
            <AlertDescription className="text-red-900 text-sm text-start">
                We are currently working on this page. You can still explore more pages  and features of the website. If you encounter any issues or have questions, please contact us immediately
            </AlertDescription>
        </Alert>
    </div>
  )
}

export default Maintainance
