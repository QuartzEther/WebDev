import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'localNotificationTest',
  bundledWebRuntime: false,
  webDir: 'www',
  cordova: {},
  plugins:{
    LocalNotifications:{
      smallIcon: "ic_launcher_round",
      iconColor: "#FF0000"
    }
  }

};

export default config;
