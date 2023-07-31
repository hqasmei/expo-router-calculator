import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { ACTIONS } from "@/utils/actions";

const Button = ({
  value,
  dispatch,
  buttonColor,
  textColor,
}: {
  value: string;
  dispatch: any;
  buttonColor: string;
  textColor: string;
}) => {
  if (value === "AC") {
    return (
      <TouchableOpacity
        className="h-[70px] w-[70px] items-center justify-center rounded-full"
        style={{ backgroundColor: buttonColor }}
        onPress={() => dispatch({ type: ACTIONS.CLEAR })}
      >
        <Text style={{ color: textColor }} className="text-3xl">
          {value}
        </Text>
      </TouchableOpacity>
    );
  }

  if (value === "+/-") {
    return (
      <TouchableOpacity
        className="h-[70px] w-[70px] items-center justify-center rounded-full"
        style={{ backgroundColor: buttonColor }}
        onPress={() =>
          dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { value } })
        }
      >
        <Text style={{ color: textColor }} className="text-3xl">
          {value}
        </Text>
      </TouchableOpacity>
    );
  }

  if (value === "%") {
    return (
      <TouchableOpacity
        className="h-[70px] w-[70px] items-center justify-center rounded-full"
        style={{ backgroundColor: buttonColor }}
        onPress={() =>
          dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { value } })
        }
      >
        <Text style={{ color: textColor }} className="text-3xl">
          {value}
        </Text>
      </TouchableOpacity>
    );
  }

  if (value === "=") {
    return (
      <TouchableOpacity
        className="h-[70px] w-[70px] items-center justify-center rounded-full"
        style={{ backgroundColor: buttonColor }}
        onPress={() => dispatch({ type: ACTIONS.EVALUATE })}
      >
        <Text style={{ color: textColor }} className="text-3xl">
          {value}
        </Text>
      </TouchableOpacity>
    );
  }
};

export default Button;
