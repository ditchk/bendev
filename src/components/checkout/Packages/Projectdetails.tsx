import { Textarea } from "@/components/ui/textarea"
import { FormWrapper } from "./Formwrapper"

type AddressData = {
  projectName: string
  description: string
  projectDuration: string
  notes: string
}

type ProjectFormProps = AddressData & {
  updateFields: (fields: Partial<AddressData>) => void
}

export function Projectdetails({
  projectName,
  description,
  projectDuration,
  notes,
  updateFields,
}: ProjectFormProps) {
  return (
    <FormWrapper title="Project details">
          <label className="FormLabels" >Project Name</label>
          <input
            autoFocus
            className="Form_inpt"
            required
            placeholder="What are you working on"
            type="text"
            value={projectName}
            onChange={e => updateFields({ projectName: e.target.value })}
          />
          <label className="FormLabels" >Description</label>
          <Textarea
            required
            className="textarea"
            placeholder="Briefly describe your project"
            value={description}
            onChange={e => updateFields({ description: e.target.value })}
          />
          <label className="FormLabels" >Project duration</label>
          <input
            required
            className="Form_inpt"
            type="text"
            value={projectDuration}
            placeholder="How long will this project take"
            onChange={e => updateFields({ projectDuration: e.target.value })}
          />
          <label className="FormLabels" >Aditional notes(Optional)</label>
          <Textarea
            required
            className="textarea"
            value={notes}
            placeholder="Is there anything else you wuld like to add?"
            onChange={e => updateFields({ notes: e.target.value })}
          />
    </FormWrapper>
  )
}