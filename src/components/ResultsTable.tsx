import { FormData } from '../types'
import { calculateInvestmentResults, formatter } from '../utils/invetments'

type Props = {
  data: FormData
}

export default function ResutlsTable({ data }: Props) {
  const resultData = calculateInvestmentResults(data)

  const initialInvestment =
    resultData[0].valueEndOfYear -
    resultData[0].interest -
    resultData[0].annualInvestment

  console.log(resultData)

  return (
    <>
      <table className="mx-auto my-8 border-spacing-5 border-separate">
        <thead className="text-left">
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </thead>
        <tbody>
          {resultData.map((item) => {
            const totalInterest =
              item.valueEndOfYear -
              item.annualInvestment * item.year -
              initialInvestment

            const totalAmountInvested = item.valueEndOfYear - totalInterest

            return (
              <tr key={item.year}>
                <td>{item.year}</td>
                <td>{formatter.format(item.valueEndOfYear)}</td>
                <td>{formatter.format(item.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(totalAmountInvested)}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}
