import { useState } from 'react'
import Input from './Input'

export default function UserInputs() {
  const [formData, setFormData] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  })

  function handleInputUpdate(inputValue: string, id: string) {
    setFormData((prevFormData) => {
      return { ...prevFormData, [id]: inputValue }
    })
  }

  return (
    <form className="grid grid-cols-2 gap-8 bg-gray-900 p-8 max-w-screen-sm mx-auto">
      <Input
        initialValue={formData.initialInvestment}
        id="initialInvestment"
        label="Initial Investment"
        placeholder="$0"
        onUpdate={(value: string) =>
          handleInputUpdate(value, 'initialInvestment')
        }
        required
      />
      <Input
        initialValue={formData.annualInvestment}
        id="annualInvestment"
        label="Initial Investment"
        placeholder="$0"
        onUpdate={(value: string) =>
          handleInputUpdate(value, 'annualInvestment')
        }
        required
      />
      <Input
        initialValue={formData.expectedReturn}
        id="expectedReturn"
        label="Initial Investment"
        placeholder="$0"
        onUpdate={(value: string) => handleInputUpdate(value, 'expectedReturn')}
        required
      />
      <Input
        initialValue={formData.duration}
        id="duration"
        label="Initial Investment"
        placeholder="$0"
        onUpdate={(value: string) => handleInputUpdate(value, 'duration')}
        required
      />
    </form>
  )
}
