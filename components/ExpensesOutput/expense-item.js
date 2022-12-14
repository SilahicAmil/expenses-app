import { Pressable, StyleSheet, Text, View } from "react-native";

import { GlobalStyles } from "../../constants/styles";
import { getFormattedDate } from "../../util/date";
import { useNavigation } from "@react-navigation/native";

const ExpenseItem = ({ description, date, amount, id }) => {
  const navigation = useNavigation();

  const expensePressedHandler = () => {
    // connects to manage expense screen and renders if an exisitng expense was pressed
    navigation.navigate("ManageExpense", {
      // we use expenseId in manage expense to get the ID with the route.params thingy
      expenseId: id,
    });
  };

  return (
    <Pressable
      onPress={expensePressedHandler}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.expenseItem}>
        <View>
          <Text style={[styles.textBase, styles.description]}>
            {description}
          </Text>
          <Text style={styles.textBase}>{getFormattedDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amountText}>${amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ExpenseItem;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.5,
  },
  expenseItem: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: GlobalStyles.color.tealBlue,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 6,
    elevation: 3,
    shadowColor: GlobalStyles.color.Ming,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.66,
  },
  textBase: {
    color: "white",
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: "bold",
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    minWidth: 80,
  },
  amountText: {
    color: "black",
  },
});
