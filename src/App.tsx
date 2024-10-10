import { useState } from 'react'
import Header from './components/Header'
import UserInputs from './components/UserInputs'

function App() {
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
    <>
      <Header />
      <UserInputs onChangeInput={handleInputUpdate} formData={formData} />
    </>
  )
}

export default App
