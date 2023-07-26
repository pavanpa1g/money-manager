import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'

import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

const MoneyManager = () => {
  const [moneyList, setMoneyList] = useState([])
  const [title, setTitle] = useState('')
  const [type, setType] = useState(transactionTypeOptions[0].displayText)
  const [amount, setAmount] = useState('')

  const onTitleChange = event => {
    setTitle(event.target.value)
  }

  const onAmountChange = event => {
    setAmount(event.target.value)
  }

  const onSelectChange = event => {
    setType(event.target.value)
  }

  const onClickAdd = event => {
    event.preventDefault()
    const newTransaction = {
      id: uuidv4(),
      title,
      amount,
      type,
    }
    setMoneyList([...moneyList, newTransaction])
    setTitle('')
    setAmount('')
    setType(transactionTypeOptions[0].optionId)
  }

  console.log(moneyList)

  return (
    <div className="bg-container">
      <div className="top-head-container">
        <h1 className="head-top">Hi,Richard</h1>
        <p className="para">
          Welcome back to your <span className="span-para">Money Manager</span>
        </p>
      </div>

      <MoneyDetails details={moneyList} />

      <div className="bottom-container">
        <form className="form-container" onSubmit={onClickAdd}>
          <h1 className="head-form">Add Transaction</h1>
          <label htmlFor="input" className="label-item">
            TITLE
          </label>
          <br />
          <input
            id="input"
            type="text"
            placeholder="TITLE"
            className="input-item"
            value={title}
            onChange={onTitleChange}
            required
          />
          <br />
          <label htmlFor="AMOUNT" className="label-item">
            AMOUNT
          </label>
          <br />
          <input
            id="AMOUNT"
            type="number"
            placeholder="AMOUNT"
            className="input-item"
            name="positiveNumber"
            value={amount}
            min="0"
            required
            onChange={onAmountChange}
          />
          <br />
          <label htmlFor="typeOfIncome" className="label-item">
            TYPE
          </label>
          <br />

          <select id="dropdown" value={type} onChange={onSelectChange} required>
            {/* <option value="">Select</option> */}
            <option value={transactionTypeOptions[0].optionId}>
              {transactionTypeOptions[0].displayText}
            </option>
            <option value={transactionTypeOptions[1].optionId}>
              {transactionTypeOptions[1].displayText}
            </option>
          </select>

          <br />
          <button className="add-button" type="submit">
            Add
          </button>
        </form>

        <div className="trans-container">
          <h1 className="history-head">History</h1>
          <div className="transaction-bg-container">
            <div className="desp-container">
              <p className="para-tit">Title</p>
              <p className="para-tit">Amount</p>
              <p className="para-tit">Type</p>
            </div>
            {/* <hr /> */}
            {moneyList.length > 0 ? (
              <TransactionItem
                details={moneyList}
                setMoneyList={setMoneyList}
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
  //   }
}

export default MoneyManager
