import { FlatList, StyleSheet, Text, View } from "react-native";

import ExpenseItem from "./expense-item";

const renderExpenseItem = (itemData) => {
  // we get itemData from FlatList and then we spread "..." the items from itemData to expense item
  // since we only have description, date, amount, id in the dummy data this is fine
  // you can define each but in this case more convinent to just spread
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
