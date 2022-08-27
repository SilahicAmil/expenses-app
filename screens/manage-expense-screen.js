import { StyleSheet, Text, View } from "react-native";

import { useLayoutEffect } from "react";

const ManageExpense = ({ route, navigation }) => {
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  return (
    <View>
      <Text>This is the ManageExpense screen</Text>
    </View>
  );
};

export default ManageExpense;
