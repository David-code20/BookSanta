import React from 'react';
import {AppTabNavigator} from './AppTabNavigator';
import {CustomSideBarMenu} from './CustomSideBarMenu';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {SettingsScreen} from '../screens/SettingsScreen';
 export const AppDrawerNavigator=createDrawerNavigator({
     Home:{
         screen:AppTabNavigator
     },
     setting:{
         screen:SettingsScreen
     }
 },
 {
     contentComponent:CustomSideBarMenu
 },
 {
     initailRouteName:'Home'
 }
 
 )