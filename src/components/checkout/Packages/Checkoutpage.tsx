import { FormEvent, useState } from "react"
import { AccountForm } from "./AccountForm"
import { AddressForm } from "./AddressForm"
import { UserForm } from "./UserForm"
import { useMultistepForm } from "./useMultiStepForm"
import { Link } from "react-router-dom"

type FormData = {
  firstName: string
  lastName: string
  age: string
  name: string
  description: string
  duration: string
  notes: string
  phone: string
  email: string
  password: string
}

const INITIAL_DATA: FormData = {
  firstName: "",
  lastName: "",
  age: "",
  name: "",
  description: "",
  duration: "",
  notes: "",
  phone: "",
  email: "",
  password: "",
}

function App() {
  const [data, setData] = useState(INITIAL_DATA)
  function updateFields(fields: Partial<FormData>) {
    setData(prev => {
      return { ...prev, ...fields }
    })
  }
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <UserForm {...data} updateFields={updateFields} />,
      <AddressForm {...data} updateFields={updateFields} />,
      <AccountForm {...data} updateFields={updateFields} />,
    ])

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (!isLastStep) return next()
    alert("Successful Account Creation")
  }

  return (
    <div className="CheckoutForm">
      <form onSubmit={onSubmit}>
        <Link to={'/'} className="flex w-full justify-center items-center">
              <img src="/assets/images/logo1.png" width={100} height={100} alt="Bswp" />
          </Link>
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