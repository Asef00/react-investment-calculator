import Input from './Input'
import { FormData } from '../types'

type Props = {
  onChangeInput: (value: string, id: string) => void
  formData: FormData
}

export default function UserInputs({ onChangeInput, formData }: Props) {
  return (
    <form className="grid grid-cols-2 gap-8 bg-gray-900 p-8 max-w-screen-sm mx-auto">
      <Input
        initialValue={formData.initialInvestment}
        id="initialInvestment"
        label="Initial Investment"
        placeholder="$0"
        onUpdate={(value: string) => onChangeInput(value, 'initialInvestment')}
        required
      />
      <Input
        initialValue={formData.annualInvestment}
        id="annualInvestment"
        label="Initial Investment"
        placeholder="$0"
        onUpdate={(value: string) => onChangeInput(value, 'annualInvestment')}
        required
      />
      <Input
        initialValue={formData.expectedReturn}
        id="expectedReturn"
        label="Initial Investment"
        placeholder="$0"
        onUpdate={(value: string) => onChangeInput(value, 'expectedReturn')}
        required
      />
      <Input
        initialValue={formData.duration}
        id="duration"
        label="Initial Investment"
        placeholder="$0"
        onUpdate={(value: string) => onChangeInput(value, 'duration')}
        required
      />
    </form>
  )
}
