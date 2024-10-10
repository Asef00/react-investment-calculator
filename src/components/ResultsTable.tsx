import { FormData } from '../types'
import { calculateInvestmentResults } from '../utils/invetments'

type Props = {
  data: FormData
}

export default function ResutlsTable({ data }: Props) {
  const resultData = calculateInvestmentResults(data)

  console.log(resultData)

  return (
    <>
      <table className="mx-auto my-8 border-spacing-5 border-separate">
        <thead className="text-left">
          <th>Year</th>
          <th>Interest</th>
          <th>Value End of Year</th>
          <th>Annual Investment</th>
        </thead>
        <tbody>
          {resultData.map((item) => (
            <tr>
              <td>{item.year}</td>
              <td>{item.interest}</td>
              <td>{item.valueEndOfYear}</td>
              <td>{item.annualInvestment}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
