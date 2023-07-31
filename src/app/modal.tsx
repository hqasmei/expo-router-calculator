import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet } from "react-native";
import { Stack, useRouter } from "expo-router";
import { Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { useColorContext } from "../context/color-context";

export default function ModalScreen() {
  const router = useRouter();
  const { gridData, updateColor } = useColorContext();
  const handleColorPress = (id: number) => {
    updateColor(id);
  };

  return (
    <>
      <Stack.Screen
        options={{
          title: "",
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <Text className="text-white font-bold text-[16px]">Cancel</Text>
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: "#333",
          },
          headerShadowVisible: false,
        }}
      />

      <View className="flex-1 bg-[#333] px-4 text-white">
        <Text className="text-2xl text-white font-bold">Backgrounds</Text>

        <View className="flex flex-row  flex-wrap justify-evenly gap-4 mt-2">
          {gridData.map((item) => (
            <TouchableOpacity
              key={item.id}
              className={`h-32 w-24 rounded m-1 `}
              style={{ backgroundColor: item.color }}
              onPress={() => handleColorPress(item.id)}
            >
              {item.checked && (
                <View className="absolute top-1 right-1">
                  <Ionicons name="checkmark-circle" size={24} color="green" />
                </View>
              )}
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </>
  );
}
