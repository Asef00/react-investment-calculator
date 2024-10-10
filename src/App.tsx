import { useState } from 'react'
import Header from './components/Header'
import UserInputs from './components/UserInputs'
import ResutlsTable from './components/ResultsTable'

function App() {
  const [formData, setFormData] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  })

  const dataIsValid = formData.duration > 0

  function handleInputUpdate(inputValue: string, id: string) {
    setFormData((prevFormData) => {
      return { ...prevFormData, [id]: +inputValue }
    })
  }

  return (
    <>
      <Header />
      <UserInputs onChangeInput={handleInputUpdate} formData={formData} />
      {dataIsValid ? (
        <ResutlsTable data={formData} />
      ) : (
        <p className="text-center">Invalid input data</p>
      )}
    </>
  )
}

export default App
