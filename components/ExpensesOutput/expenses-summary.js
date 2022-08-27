import { StyleSheet, Text, View } from "react-native";

import { GlobalStyles } from "../../constants/styles";

const ExpensesSummary = ({ periodName, expenses }) => {
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>${expensesSum.toFixed(2)}</Text>
    </View>
  );
};

export default ExpensesSummary;

const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 8,
    backgroundColor: GlobalStyles.color.tealBlue,
    borderRadius: 6,
    elevation: 3,
    shadowColor: GlobalStyles.color.Ming,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.66,
  },
  period: {
    fontSize: 14,
    color: "white",
    fontWeight: "bold",
  },
  sum: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
});
