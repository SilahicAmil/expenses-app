import { StyleSheet, Text, View } from "react-native";

import AllExpenses from "./screens/all-expenses-screen";
import { GlobalStyles } from "./constants/styles";
import { Ionicons } from "@expo/vector-icons";
import ManageExpense from "./screens/manage-expense-screen";
import { NavigationContainer } from "@react-navigation/native";
import RecentExpenses from "./screens/recent-expenses-screen";
import { StatusBar } from "expo-status-bar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

const ExpensesOverview = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: GlobalStyles.color.blueNCS },
        headerTintColor: "white",
        tabBarStyle: { backgroundColor: GlobalStyles.color.blueNCS },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "black",
      }}
    >
      <BottomTabs.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={{
          title: "Recent Expenses",
          tabBarLabel: "Recent ",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hourglass" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          title: "All Expenses",
          tabBarLabel: "All Expenses ",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" size={size} color={color} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="ExpensesOverview">
          <Stack.Screen
            name="ExpensesOverview"
            component={ExpensesOverview}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="ManageExpense" component={ManageExpense} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
