export function calculateInvestmentResults({
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration
}) {
    const annulData = []
    let investmentValue = initialInvestment

    for (let i = 0; i < duration; i++) {
        const interestEarnedInYear = investmentValue * expectedReturn
        investmentValue += interestEarnedInYear + annualInvestment
        annulData.push({
            year: i + 1,
            interest: interestEarnedInYear,
            valueEndOfYear: investmentValue,
            annualInvestment:annualInvestment
        })
    }

    return annulData
}

export const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
})