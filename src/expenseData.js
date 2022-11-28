let expenses = [
  {
    name: "Dining Plan",
    number: 1,
    amount: "$6,134",
    date: "09/01/2021",
  },
  {
    name: "Food Truck",
    number: 2,
    amount: "$8.95",
    date: "01/31/2020",
  },
  {
    name: "Fees",
    number: 3,
    amount: "$90,000",
    date: "07/20/2021",
  },
  {
    name: "Tuition",
    number: 4,
    amount: "$85,738",
    date: "09/01/2021",
  },
  {
    name: "Textbooks",
    number: 5,
    amount: "$400",
    date: "09/06/2021",
  },
];

export function getExpenses() {
  return expenses;
}
export function getExpense(number) {
  return expenses.find((expense) => expense.number === number);
}
