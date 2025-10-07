import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // const expenseDate = new Date(2025, 9, 27);
  // const expenseTitle = 'Entertainment';
  // const expenseAmount = 1000;
  return (
    <div className="expense-item">
      <div>{props.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <h2 className="expense-item__price">${props.amount}</h2>
      </div>
    </div>
  );
};

export default ExpenseItem;
