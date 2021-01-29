import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile198156Navigator from '../features/UserProfile198156/navigator';
import Tutorial198155Navigator from '../features/Tutorial198155/navigator';
import NotificationList198127Navigator from '../features/NotificationList198127/navigator';
import Settings198126Navigator from '../features/Settings198126/navigator';
import Settings198118Navigator from '../features/Settings198118/navigator';
import UserProfile198116Navigator from '../features/UserProfile198116/navigator';
import BlankScreen71198094Navigator from '../features/BlankScreen71198094/navigator';
import UserProfile198084Navigator from '../features/UserProfile198084/navigator';
import Tutorial198083Navigator from '../features/Tutorial198083/navigator';
import NotificationList198055Navigator from '../features/NotificationList198055/navigator';
import Settings198054Navigator from '../features/Settings198054/navigator';
import Settings198046Navigator from '../features/Settings198046/navigator';
import UserProfile198044Navigator from '../features/UserProfile198044/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile198156: { screen: UserProfile198156Navigator },
Tutorial198155: { screen: Tutorial198155Navigator },
NotificationList198127: { screen: NotificationList198127Navigator },
Settings198126: { screen: Settings198126Navigator },
Settings198118: { screen: Settings198118Navigator },
UserProfile198116: { screen: UserProfile198116Navigator },
BlankScreen71198094: { screen: BlankScreen71198094Navigator },
UserProfile198084: { screen: UserProfile198084Navigator },
Tutorial198083: { screen: Tutorial198083Navigator },
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
