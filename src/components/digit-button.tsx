import React from "react";
import { ACTIONS } from "../utils/actions";

import { Text, View, TouchableOpacity } from "react-native";

const DigitButton = ({
  dispatch,
  digit,
  buttonColor,
  textColor,
  span = false,
}: {
  dispatch: any;
  digit: any; 
  buttonColor: string;
  textColor: string;
  span?: boolean;
}) => {
  if (!span) {
    return (
      <TouchableOpacity
        className="h-[70px] w-[70px] items-center justify-center rounded-full"
        style={{ backgroundColor: buttonColor }}
        onPress={() =>
          dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })
        }
      >
        <Text style={{ color: textColor }} className="text-3xl">
          {digit}
        </Text>
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity
        className="h-[70px] w-[160px] items-start pl-6 justify-center rounded-full"
        style={{ backgroundColor: buttonColor }}
        onPress={() =>
          dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })
        }
      >
        <Text style={{ color: textColor }} className="text-3xl">
          {digit}
        </Text>
      </TouchableOpacity>
    );
  }
};

export default DigitButton;
