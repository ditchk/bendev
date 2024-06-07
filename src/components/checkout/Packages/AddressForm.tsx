import { Textarea } from "@/components/ui/textarea"
import { FormWrapper } from "./Formwrapper"

type AddressData = {
  name: string
  description: string
  duration: string
  notes: string
}

type AddressFormProps = AddressData & {
  updateFields: (fields: Partial<AddressData>) => void
}

export function AddressForm({
  name,
  description,
  duration,
  notes,
  updateFields,
}: AddressFormProps) {
  return (
    <FormWrapper title="Project details">
          <label className="FormLabels" >Project Name</label>
          <input
            autoFocus
            className="Form_inpt"
            required
            placeholder="What are you working on"
            type="text"
            value={name}
            onChange={e => updateFields({ name: e.target.value })}
          />
          <label className="FormLabels" >Description</label>
          <Textarea
            required
            className="Form_inpt"
            placeholder="Briefly describe your project"
            value={description}
            onChange={e => updateFields({ description: e.target.value })}
          />
          <label className="FormLabels" >Project duration</label>
          <input
            required
            className="Form_inpt"
            type="text"
            value={duration}
            placeholder="How long will this project take"
            onChange={e => updateFields({ duration: e.target.value })}
          />
          <label className="FormLabels" >Aditional notes(Optional)</label>
          <Textarea
            required
            className="Form_inpt"
            value={notes}
            placeholder="Is there anything else you wuld like to add?"
            onChange={e => updateFields({ notes: e.target.value })}
          />
    </FormWrapper>
  )
}