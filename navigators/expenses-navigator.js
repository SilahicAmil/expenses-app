import ExpensesOverview from "../navigators/bottom-tabs-navigator";
import { GlobalStyles } from "../constants/styles";
import ManageExpense from "../screens/manage-expense-screen";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const ExpensesNavigator = () => {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="ExpensesOverview"
          screenOptions={{
            headerBackTitle: "Back",
            headerStyle: { backgroundColor: GlobalStyles.color.blueNCS },
            headerTintColor: "white",
          }}
        >
          <Stack.Screen
            name="ExpensesOverview"
            component={ExpensesOverview}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="ManageExpense"
            component={ManageExpense}
            options={{
              presentation: "modal",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default ExpensesNavigator;
