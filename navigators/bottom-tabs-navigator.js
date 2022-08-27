import AllExpenses from "../screens/all-expenses-screen";
import { GlobalStyles } from "../constants/styles";
import IconButton from "../UI/IconButton";
import { Ionicons } from "@expo/vector-icons";
import RecentExpenses from "../screens/recent-expenses-screen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const BottomTabs = createBottomTabNavigator();

const ExpensesOverview = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: GlobalStyles.color.blueNCS },
        headerTintColor: "white",
        tabBarStyle: { backgroundColor: GlobalStyles.color.blueNCS },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "black",

        headerRight: ({ tintColor }) => (
          <IconButton
            icon="add"
            color={tintColor}
            size={24}
            onPress={() => {
              navigation.navigate("ManageExpense");
            }}
          />
        ),
      })}
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
export default ExpensesOverview;
