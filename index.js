/**
 * @format
 */

import {register} from '@videosdk.live/react-native-sdk';
import {AppRegistry,Platform} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import PushNotificationIOS from "react-native-push-notification";

PushNotificationIOS.configure({
    onNotification:function(notification){
        console.log('Nofication', notification);
    },
    permissions:{
        alert:true,
        badge:true,
        sound:true
    },
    popInitialNotification:true,
    requestPermissions:Platform.OS='ios'
})



register();

AppRegistry.registerComponent(appName, () => App);
