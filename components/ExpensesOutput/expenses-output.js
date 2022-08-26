import { StyleSheet, View } from "react-native";

import ExpensesList from "./expenses-list";
import ExpensesSummary from "./expenses-summary";
import { GlobalStyles } from "../../constants/styles";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "pair of shoes",
    amount: 69.69,
    date: new Date("2022-08-26"),
  },
  {
    id: "e2",
    description: "jeans",
    amount: 420.69,
    date: new Date("2022-01-22"),
  },
  {
    id: "e3",
    description: "some bananas",
    amount: 1337.69,
    date: new Date("2021-03-02"),
  },
  {
    id: "e4",
    description: "ur mom lol",
    amount: 1.69,
    date: new Date("2021-05-02"),
  },
  {
    id: "e5",
    description: "ur dad lol",
    amount: 6969.69,
    date: new Date("2022-05-02"),
  },
];

const ExpensesOutput = ({ expenses, periodName }) => {
  return (
    <View style={styles.rootContainer}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={periodName} />
      <ExpensesList data={DUMMY_EXPENSES} />
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
  rootContainer: {
    padding: 24,
    backgroundColor: "white",
  },
});
