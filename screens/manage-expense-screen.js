import { StyleSheet, Text, View } from "react-native";

import { useLayoutEffect } from "react";

const ManageExpense = ({ route, navigation }) => {
  // taking param of the route "?" mean if null then dont get an id since there isnt one
  const editedExpenseId = route.params?.expenseId;
  // takes the editedExpenseId and turns it into a boolean (true in this case)
  const isEditing = !!editedExpenseId;

  // using useLayoutEffect because want it to load synchronously that way we dont get a weird double render
  useLayoutEffect(() => {
    //settings navigation options within here since we want titles to load conditionally
    navigation.setOptions({
      // below means if we are editing an expense based on if we pressed an already exisitng expense
      //  then on the modal popup we change the title it "Edit Expense"
      // else when we press on the top right add button change the title to "Add Expense"
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
    // useLayoutEffect dependencies (essentially what we are using in the effect)
  }, [navigation, isEditing]);

  return (
    <View>
      <Text>This is the ManageExpense screen</Text>
    </View>
  );
};

export default ManageExpense;
