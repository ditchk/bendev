import { ReactNode } from "react"

type FormWrapperProps = {
  title: string
  children: ReactNode
}

export function FormWrapper({ title, children }: FormWrapperProps) {
  return (
    <>
      <h2 style={{ textAlign: "center", margin: 0, marginBottom: "2rem" }} className=" font-moon-dance text-4xl">
        {title}
      </h2>
      <div className="FormWrapperB">
        {children}
      </div>
    </>
  )
}