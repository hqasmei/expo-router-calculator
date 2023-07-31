import { router } from "expo-router";
import React, { useState, useReducer } from "react";
import {
  TextInput,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import { Octicons } from "@expo/vector-icons";

import Button from "@/components/button";
import DigitButton from "@/components/digit-button";
import OperationButton from "@/components/operation-button";

import { reducer } from "@/utils/reducer";
import { formatOperand } from "@/utils/formatters";

import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useColorContext } from "../context/color-context";

const Home = () => {
  const insets = useSafeAreaInsets();
  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;
  const { currentColor } = useColorContext();

  // Assuming initialState is of type State
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  );

  const backgroundColor = currentColor || "#000";

  return (
    <View
      style={{
        flex: 1,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        backgroundColor: backgroundColor,
      }}
    >
      <TouchableOpacity
        className="bg-gray-900 p-3 rounded-lg absolute top-0 right-10 z-10"
        style={{ marginTop: insets.top }}
        onPress={() => router.push("/modal")}
      >
        <Octicons name="paintbrush" size={18} color="#F3F3F3" />
      </TouchableOpacity>
      <View className="h-2/5">
        <View className="items-end justify-end flex-1 pr-8">
          <Text className="text-white text-7xl">
            {formatOperand(previousOperand)} {operation}
          </Text>
          <Text className="text-white text-7xl">
            {formatOperand(currentOperand)}
          </Text>
        </View>
      </View>
      <View
        className={`flex flex-col ${
          screenHeight >= 844 ? "space-y-4" : "space-y-1"
        }  h-3/5 pt-4`}
      >
        <View className="flex flex-row justify-evenly">
          <Button
            value="AC"
            dispatch={dispatch}
            buttonColor="#A5A5A5"
            textColor="black"
          />
          <Button
            value="+/-"
            dispatch={dispatch}
            buttonColor="#A5A5A5"
            textColor="black"
          />
          <OperationButton
            operation="%"
            dispatch={dispatch}
            buttonColor="#A5A5A5"
            textColor="black"
          />
          <OperationButton
            operation="÷"
            dispatch={dispatch}
            buttonColor="#F1A33B"
            textColor="white"
          />
        </View>
        <View className="flex flex-row  justify-evenly">
          <DigitButton
            digit="7"
            dispatch={dispatch}
            buttonColor="#333333"
            textColor="white"
          />
          <DigitButton
            digit="8"
            dispatch={dispatch}
            buttonColor="#333333"
            textColor="white"
          />
          <DigitButton
            digit="9"
            dispatch={dispatch}
            buttonColor="#333333"
            textColor="white"
          />
          <OperationButton
            operation="×"
            dispatch={dispatch}
            buttonColor="#F1A33B"
            textColor="white"
          />
        </View>
        <View className="flex flex-row  justify-evenly">
          <DigitButton
            digit="4"
            dispatch={dispatch}
            buttonColor="#333333"
            textColor="white"
          />
          <DigitButton
            digit="5"
            dispatch={dispatch}
            buttonColor="#333333"
            textColor="white"
          />
          <DigitButton
            digit="6"
            dispatch={dispatch}
            buttonColor="#333333"
            textColor="white"
          />
          <OperationButton
            operation="-"
            dispatch={dispatch}
            buttonColor="#F1A33B"
            textColor="white"
          />
        </View>
        <View className="flex flex-row  justify-evenly">
          <DigitButton
            digit="1"
            dispatch={dispatch}
            buttonColor="#333333"
            textColor="white"
          />
          <DigitButton
            digit="2"
            dispatch={dispatch}
            buttonColor="#333333"
            textColor="white"
          />
          <DigitButton
            digit="3"
            dispatch={dispatch}
            buttonColor="#333333"
            textColor="white"
          />
          <OperationButton
            operation="+"
            dispatch={dispatch}
            buttonColor="#F1A33B"
            textColor="white"
          />
        </View>
        <View className="flex flex-row justify-evenly">
          <DigitButton
            digit="0"
            dispatch={dispatch}
            buttonColor="#333333"
            textColor="white"
            span={true}
          />
          <DigitButton
            digit="."
            dispatch={dispatch}
            buttonColor="#333333"
            textColor="white"
          />
          <Button
            value="="
            dispatch={dispatch}
            buttonColor="#F1A33B"
            textColor="white"
          />
        </View>
      </View>
    </View>
  );
};
export default Home;
