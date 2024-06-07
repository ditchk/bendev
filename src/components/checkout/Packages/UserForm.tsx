import { FormWrapper } from "./Formwrapper"

type UserData = {
  firstName: string
  lastName: string
  email: string
  phone: string
}

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void
}

export function UserForm({
  firstName,
  lastName,
  email,
  phone,
  updateFields,
}: UserFormProps) {
  return (
    <FormWrapper title="Your contact details">
      <div className="flex flex-row justify-center items-center gap-5">
        <div className="flex flex-col justify-start items-start w-full h-fit">
          <label className="FormLabels">First Name</label>
          <input
            autoFocus
            className="Form_inpt"
            required
            type="text"
            value={firstName}
            onChange={e => updateFields({ firstName: e.target.value })}
          />
        </div>
        <div className="flex flex-col justify-start items-start w-full h-fit">
          <label className="FormLabels">Last Name</label>
          <input
            required
            className="Form_inpt"
            type="text"
            value={lastName}
            onChange={e => updateFields({ lastName: e.target.value })}
          />
        </div>
        
      </div>
      <div className="flex flex-col justify-start items-start w-full h-fit gap-5 mt-2">
        <div className="flex flex-col justify-start items-start w-full h-fit">
          <label className="FormLabels">Your Email</label>
          <input
            required
            className="Form_inpt"
            type="email"
            value={email}
            onChange={e => updateFields({ email: e.target.value })}
          />
        </div>
        <div className="flex flex-col justify-start items-start w-full h-fit">
          <label className="FormLabels">Your phone Number</label>
          <input
            required
            className="Form_inpt"
            type="phone"
            value={phone}
            onChange={e => updateFields({ phone: e.target.value })}
          />
        </div>
      </div>
    </FormWrapper>
  )
}