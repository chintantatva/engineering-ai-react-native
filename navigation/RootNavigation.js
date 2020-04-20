
import { createStackNavigator } from 'react-navigation';


export  const RootNaviagtion=  createStackNavigator({
    // For each screen that you can navigate to, create a new entry like this:
    Profile: {
      // `ProfileScreen` is a React component that will be the main content of the screen.
      screen: ProfileScreen,
      // When `ProfileScreen` is loaded by the StackNavigator, it will be given a `navigation` prop.
      
    },
  });