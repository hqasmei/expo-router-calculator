import React from "react";
import { ACTIONS } from "../utils/actions";

import { Text, View, TouchableOpacity } from "react-native";

const PercentButton = ({
  dispatch,
  operation,
  buttonColor,
  textColor,
}: {
  dispatch: any;
  operation: any;
  buttonColor: string;
  textColor: string;
}) => {
  return (
    <TouchableOpacity
      className="h-[70px] w-[70px] items-center justify-center rounded-full"
      style={{ backgroundColor: buttonColor }}
      onPress={() =>
        dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })
      }
    >
      <Text style={{ color: textColor }} className="text-3xl">
        {operation}
      </Text>
    </TouchableOpacity>
  );
};

export default PercentButton;
