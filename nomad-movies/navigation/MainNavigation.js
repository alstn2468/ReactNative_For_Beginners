import { createStackNavigator, createAppContainer } from "react-navigation";
import { headerStyles } from "./config";
import TabNavigation from "./TabNavigation";
import DetailScreen from "../screens/Detail";

const MainNavigation = createStackNavigator(
  {
    Tabs: { screen: TabNavigation, navigationOptions: { header: null } },
    Detail: {
      screen: DetailScreen,
      navigationOptions: {
        ...headerStyles
      }
    }
  },
  {}
);

export default createAppContainer(MainNavigation);
