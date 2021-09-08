import Constants from "expo-constants";

const settings = {
    dev: {
        apiUrl: 'http://localhost:5000'
    },
    staging: {
        apiUrl: 'https://csgo-u.herokuapp.com'
    },
    prod: {
        apiUrl: 'https://csgo-u.herokuapp.com'
    },
}

const getCurrentSettings = () => {
    if (__DEV__) return settings.dev;
    if (Constants.manifest.releaseChannel === 'staging') return settings.staging;
    return settings.prod
}

export default getCurrentSettings();