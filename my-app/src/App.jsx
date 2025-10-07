import ExpenseItem from "./components/ExpenseItem";
function App() {
  const expense = [
    { title: "Shop", amount: 250.7, date: new Date(2025, 27, 9) },
    { title: "Entertainment", amount: 150.7, date: new Date(2025, 27, 9) },
    { title: "Grocery", amount: 350.7, date: new Date(2025, 27, 9) },
  ];
  return (
    <div>
      <h2>Let's get started with Vite + React!</h2>
      <ExpenseItem
        title={expense[0].title}
        amount={expense[0].amount}
        date={expense[0].date}
      />
      <ExpenseItem
        title={expense[1].title}
        amount={expense[1].amount}
        date={expense[1].date}
      />
      <ExpenseItem
        title={expense[2].title}
        amount={expense[2].amount}
        date={expense[2].date}
      />
    </div>
  );
}

export default App;
