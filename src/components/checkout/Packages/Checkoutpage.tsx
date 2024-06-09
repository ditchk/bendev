import { FormEvent, useState } from "react"
import { Projectdetails } from "./Projectdetails"
import { UserForm } from "./UserForm"
import { useMultistepForm } from "./useMultiStepForm"
import { OrderSubmission } from "@/lib/appwrite/api"
import { useToast } from "@/components/ui/use-toast"
import { useNavigate } from "react-router"

type FormData = {
  FirstName: string
  LastName: string
  projectName: string
  description: string
  projectDuration: string
  notes: string
  phone: string
  email: string
}

const INITIAL_DATA: FormData = {
  FirstName: "",
  LastName: "",
  projectName: "",
  description: "",
  projectDuration: "",
  notes: "",
  phone: "",
  email: "",
}

function App() {
  const [data, setData] = useState(INITIAL_DATA)
  function updateFields(fields: Partial<FormData>) {
    setData(prev => {
      return { ...prev, ...fields }
    })
  }

  const {toast} = useToast()
  const navigate = useNavigate()

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <UserForm {...data} updateFields={updateFields} />,
      <Projectdetails {...data} updateFields={updateFields} />,
      // <AccountForm {Formdata} updateFields={updateFields} />,
    ])

    const createOrder = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
          if (!isLastStep) return next()
          const newOrder = await OrderSubmission({
            ...data
          }) 
          if(!newOrder) {
            toast({
              title: "something went wrong! please try again"
            })
          } else {
            toast({
              title: "Your project was sent successfully, please check your email for more info!"
            }) && navigate('/')
          }
  }

  return (
    <div className="CheckoutForm">
      <form onSubmit={createOrder}>
        <div className="ProgressBar">
          <span className="font-bold mr-2 text-teal-500">Step</span> {currentStepIndex + 1} <span className="font-bold m-2 text-teal-500">of</span> {steps.length}
        </div>
          {step}
        <div
          style={{
            marginTop: "1rem",
            display: "flex",
            gap: ".5rem",
            justifyContent: "flex-end",
          }}
        >
          {!isFirstStep && (
            <button type="button" className="CheckoutFormButton" onClick={back}>
              Back
            </button>
          )}
          <button type="submit" className="CheckoutFormButton">{isLastStep ? "Finish" : "Next"}</button>
        </div>
      </form>
    </div>
  )
}

export default App