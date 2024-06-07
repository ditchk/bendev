import { FormEvent, useState } from "react"
import { AccountForm } from "./AccountForm"
import { AddressForm } from "./AddressForm"
import { UserForm } from "./UserForm"
import { useMultistepForm } from "./useMultiStepForm"
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md"

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
        <div className="ProgressBar">
          {/* {steps} */}
          step {currentStepIndex + 1} <MdOutlineKeyboardDoubleArrowRight /> of {steps.length}
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
            <button type="button" onClick={back}>
              Back
            </button>
          )}
          <button type="submit">{isLastStep ? "Finish" : "Next"}</button>
        </div>
      </form>
    </div>
  )
}

export default App