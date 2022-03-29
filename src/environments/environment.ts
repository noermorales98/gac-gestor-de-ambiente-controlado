// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyAsvcPiljOoPEtnlVD6g8pOVCncefynySU",
    authDomain: "gac-iot.firebaseapp.com",
    databaseURL: "https://gac-iot-default-rtdb.firebaseio.com",
    projectId: "gac-iot",
    storageBucket: "gac-iot.appspot.com",
    messagingSenderId: "1002938500186",
    appId: "1:1002938500186:web:dc9059b25cb9274fbb8463"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
