import { Models } from "appwrite"

type ServiceBoxProps = {
    service: Models.Document
}

const ServicesBox = ({service} : ServiceBoxProps ) => {
  return (
    <div className="flex flex-row justify-center items-center p-5">
        <div className="flex flex-col justify-end items-end">
            <h1 className="text_title">
                Get work done like a pro. Hire my services to day and get 100% satisfcation.
            </h1>
            <p className="text-lg text-violet-400">
                {'Get your project running with my dedicated project management service'}
            </p>
            <ul className="flex list-disc list-inside">
                <li className="text_title">
                    Product management && All in one online Tookit pack
                </li>
            </ul>
        </div>
        <div className="">
            <img src={service.imageUrl} alt="" width={500} className="object-contain rounded-b-full rounded-l-full shadow-inner shadow-slate-300" />
        </div>
        
    </div>
  )
}

export default ServicesBox
