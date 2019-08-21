import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import MovieScreen from "../screens/Movie";
import TVScreen from "../screens/TV";
import SearchScreen from "../screens/Search";
import { BG_COLOR } from "../constants/Color";

const TabNavigation = createBottomTabNavigator(
  {
    Movie: MovieScreen,
    TV: TVScreen,
    Search: SearchScreen
  },
  {
    tabBarOptions: {
      showLabel: false,
      style: {
        backgroundColor: BG_COLOR
      }
    }
  }
);

export default createAppContainer(TabNavigation);
