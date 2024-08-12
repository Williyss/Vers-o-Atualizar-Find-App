import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import Home from '../screens/home/index';
import Chat from '../screens/chat';
import Route from '.';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
     return (

        <Tab.Navigator initialRouteName='Home'>
         <Tab.Screen name="Home" component={Route} />
         <Tab.Screen name="Chat" component={Route} />
        </Tab.Navigator>
  );
}
