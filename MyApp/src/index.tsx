/**
 * インデックスファイル
 * @format
 */

import { useNavigation, NavigationContainer } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import styles from "./StyleSheet";

/**
 * Main画面用のコンポーネント
 */
function Main() {
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Main</Text>
      <TouchableOpacity onPress={() => { navigate('Sub'); }}>
        <Text>go to sub</Text>
      </TouchableOpacity>
    </View>
  );
}

/**
 * Sub画面用のコンポーネント
 */
function Sub() {
  return (
    <View style={styles.container}>
      <Text>Sub</Text>
    </View>
  );
}

// createStackNavigator型の変数を生成する。
const Stack = createStackNavigator();

/**
 * ルーティングを設定する関数
 */
function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Sub" component={Sub} />
    </Stack.Navigator>
  );
}

/**
 * 外部に公開するコンポーネント
 */
export default function() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
