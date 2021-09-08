import React from "react";
import { NavigationContainer } from '@react-navigation/native';

import logger from "./app/utility/logger";
import OffineNotice from './app/components/OffineNotice';
// index navigator
import FeedNavigator from "./app/navigation/FeedNavigator";

logger.start();

export default function App() {
  // logger.log(new Error("Error in app"));
  return (
    <>
      <OffineNotice />
      <NavigationContainer>
        <FeedNavigator />
      </NavigationContainer>
    </>
  );
}