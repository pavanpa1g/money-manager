import './index.css'

const TransactionItem = ({details, setMoneyList}) => {
  const onClickDelete = id => {
    const newList = details.filter(item => item.id !== id)
    setMoneyList(newList)
  }

  return (
    <ul>
      {details.map(item => (
        <li className="transaction-container" key={item.id}>
          <p className="para-trans ">{item.title}</p>
          <p className="para-trans second-para">Rs {item.amount}</p>
          <p className="para-trans third-para">{item.type}</p>
          <button
            type="button"
            className="delete-button"
            onClick={() => onClickDelete(item.id)}
            data-testid="delete"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
              alt="delete"
              className="delete-icon"
            />
          </button>
        </li>
      ))}
    </ul>
  )
}

export default TransactionItem
