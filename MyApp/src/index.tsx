/**
 * インデックスファイル
 * @format
 */

import { useNavigation, NavigationContainer, DrawerActions } from "@react-navigation/native";
import React from "react";
import { View, Text,TouchableOpacity } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import styles from "./StyleSheet";

/**
 * Main画面用のコンポーネント
 */
function Main() {

  const { dispatch } = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Main</Text>
      <TouchableOpacity onPress={() => dispatch(DrawerActions.openDrawer())}>
        <Text>open drawer</Text>
      </TouchableOpacity>
    </View>
  );
}

/**
 * Sub画面用のコンポーネント
 */
function Sub() {

  const { dispatch } = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Sub</Text>
      <TouchableOpacity onPress={() => dispatch(DrawerActions.openDrawer())}>
        <Text>open drawer</Text>
      </TouchableOpacity>
    </View>
  );
}

// createDrawerNavigator型の変数を用意する。
const Drawer = createDrawerNavigator();

/**
 * ルーティングを設定する関数
 */
function DrawerNavigator() {
  return (
    <Drawer.Navigator screenOptions={() => ({
      title: `${Date.now()}`,
    })}>
      <Drawer.Screen name="Main" component={Main} />
      <Drawer.Screen name="Sub" component={Sub} />
    </Drawer.Navigator>
  );
}

/**
 * 外部に公開するコンポーネント
 */
export default function() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
