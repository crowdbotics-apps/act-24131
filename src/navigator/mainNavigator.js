import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList198055Navigator from '../features/NotificationList198055/navigator';
import Settings198054Navigator from '../features/Settings198054/navigator';
import Settings198046Navigator from '../features/Settings198046/navigator';
import UserProfile198044Navigator from '../features/UserProfile198044/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList198055: { screen: NotificationList198055Navigator },
Settings198054: { screen: Settings198054Navigator },
Settings198046: { screen: Settings198046Navigator },
UserProfile198044: { screen: UserProfile198044Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
