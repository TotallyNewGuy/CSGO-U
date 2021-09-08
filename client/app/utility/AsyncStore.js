import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';

import logger from './logger';

const expiryInMinutes = 5;

const storeData = async (key, value) => {
    try {
        const item = {
            value,
            timestamp: Date.now()
        }

        const jsonValue = JSON.stringify(item)
        await AsyncStorage.setItem(key, jsonValue);
    } catch (error) {
        logger.log(error);
    }
}

const isExpried = (item) => {
    const now = moment(Date.now());
    const storedTime = moment(item.timestamp);
    return now.diff(storedTime, 'minutes') > expiryInMinutes;
}

const getDataById = async (key, setState, myId, setIsRefresh) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key)
        if (jsonValue !== null) {
            const parsed = JSON.parse(jsonValue)

            if (isExpried(parsed)) {
                await AsyncStorage.removeItem(key)
                return null;
            }

            const data = parsed.value.filter((item) => item._id === myId)
            setState(data[0])
            // console.log(data[0].title)
            setIsRefresh(false)
        }
    } catch (error) {
        console.log(error);
    }
}

const getData = async (key, setState, mapName, itemSide, itemType, setIsRefresh) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key)
        if (jsonValue !== null) {
            const parsed = JSON.parse(jsonValue)

            if (isExpried(parsed)) {
                await AsyncStorage.removeItem(key)
                return null;
            }
            // console.log(parsed.value)
            const data = parsed.value.filter((item) => item.map === mapName && item.side === itemSide && item.type === itemType)
            setState(data)
            setIsRefresh(false)
        }
    } catch (error) {
        logger.log(error);
    }
}

export { storeData, getData, getDataById };