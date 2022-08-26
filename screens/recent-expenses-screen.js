import { Text, View } from "react-native";

import ExpensesOutput from "../components/ExpensesOutput/expenses-output";

const RecentExpenses = () => {
  return <ExpensesOutput periodName="Last 7 Days" />;
};

export default RecentExpenses;
