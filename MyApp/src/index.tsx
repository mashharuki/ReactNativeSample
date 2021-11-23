/**
 * インデックスファイル
 * @format
 */

import { useNavigation, NavigationContainer } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import styles from "./StyleSheet";

/**
 * Main画面用のコンポーネント
 */
function Main() {
  return (
    <View style={styles.container}>
      <Text>Main</Text>
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

// createBottomTabNavigator型の変数を生成する。
const Tab = createBottomTabNavigator();

/**
 * ルーティングを設定する関数
 */
function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Main" component={Main} />
      <Tab.Screen name="Sub" component={Sub} />
    </Tab.Navigator>
  );
}

/**
 * 外部に公開するコンポーネント
 */
export default function() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}
