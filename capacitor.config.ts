import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ionic.eoapp',
  appName: 'eoapp',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
