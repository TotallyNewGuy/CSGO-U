import React from "react";
import { Text } from "react-native";

import defaultStyles from "../config/styles";

function MyContext({ children, style, ...otherProps }) {
  return (
    <Text style={[defaultStyles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
}

export default MyContext;
