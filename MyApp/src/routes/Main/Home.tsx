/**
 * ホーム画面用のナビゲーターコンポーネント
 */

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { DETAIL, HOME } from "src/constants/path";
import { Detail, Home } from "src/components/pages";

// Stack用の変数
const Stack = createStackNavigator();

/**
 * HomeNavigatorコンポーネント
 */
function HomeNavigator() {
  return (
    <Stack.Navigator initialRouteName={HOME}>
      <Stack.Screen name={HOME} component={Home} />
      <Stack.Screen name={DETAIL} component={Detail} />
    </Stack.Navigator>
  );
}

export default HomeNavigator;
