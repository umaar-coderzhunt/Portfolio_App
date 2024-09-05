import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Theme from '../pages/DarkTheme';
import Home from '../pages/Home';
import ToDo from '../pages/ToDo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useColorScheme} from 'nativewind';

const BottomTab = () => {
  const Tab = createBottomTabNavigator();
  const isDarkTheme = useColorScheme().colorScheme;

  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        tabBarStyle: {
          paddingBottom: 10,
          paddingTop: 6,
          backgroundColor: isDarkTheme === 'light' ? '#DCDCDC' : '#333333',
        },
      })}>
      <Tab.Screen
        options={{
          tabBarLabel: 'Profile',
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({color}) => (
            <FontAwesome name="user" color={color} size={20} />
          ),
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'ToDo',
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({color}) => (
            <MaterialIcons name="task-alt" color={color} size={20} />
          ),
        }}
        name="ToDo"
        component={ToDo}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Theme',
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({color}) => (
            <MaterialIcons
              name={isDarkTheme === 'light' ? 'light-mode' : 'dark-mode'}
              color={color}
              size={20}
            />
          ),
          // light-mode
        }}
        name="Theme"
        component={Theme}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
