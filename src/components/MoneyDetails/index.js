import './index.css'

// Write your code here

const MoneyDetails = props => {
  const {details} = props

  const totalAmount = details.reduce((accumulator, item) => {
    if (item.type === 'Income') {
      return accumulator + parseInt(item.amount)
    }
    return accumulator
  }, 0)

  const totalExpenses = details.reduce((accumulator, item) => {
    if (item.type === 'Expenses') {
      return accumulator + parseInt(item.amount)
    }
    return accumulator
  }, 0)

  const totalBalance = totalAmount - totalExpenses

  console.log('amount', totalAmount)
  return (
    <div className="item-bg-container">
      <div className="item-container  balance">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png "
          alt="balance"
          className="img-logo"
        />
        <div>
          <p>Your Balance</p>
          <p data-testid="balanceAmount">Rs {totalBalance}</p>
        </div>
      </div>

      <div className="item-container income">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png "
          alt="income"
          className="img-logo"
        />
        <div>
          <p>Your Income</p>
          <p data-testid="incomeAmount">Rs {totalAmount}</p>
        </div>
      </div>

      <div className="item-container expenses">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png "
          alt="expenses"
          className="img-logo"
        />
        <div>
          <p>Your Expenses</p>
          <p data-testid="expensesAmount">Rs {totalExpenses}</p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
