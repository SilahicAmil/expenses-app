import { FlatList, StyleSheet, Text, View } from "react-native";

import ExpenseItem from "./expense-item";

const renderExpenseItem = (itemData) => {
  return <ExpenseItem {...itemData.item} />;
};

const ExpensesList = ({ data }) => {
  return (
    <FlatList
      data={data}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default ExpensesList;
