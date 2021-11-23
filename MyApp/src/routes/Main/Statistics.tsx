/**
 * Statistics画面用のナビゲーターコンポーネント
 */

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { DETAIL, STATISTICS } from "src/constants/path";
import { Detail, Statistics } from "src/components/pages";

// Stack用の変数
const Stack = createStackNavigator();

/**
* StatisticsNavigatorコンポーネント
*/
function StatisticsNavigator() {
  return (
    <Stack.Navigator initialRouteName={STATISTICS}>
      <Stack.Screen name={STATISTICS} component={Statistics} />
      <Stack.Screen name={DETAIL} component={Detail} />
    </Stack.Navigator>
  );
}

export default StatisticsNavigator;
