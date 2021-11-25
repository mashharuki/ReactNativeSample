/**
 * Statistics画面用のナビゲーターコンポーネント
 */

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { DETAIL, STATISTICS } from "../../constants/path";
import { Detail, Statistics } from "../../components/pages";
import { HeaderLeft, headerTintColor  } from "../Header";
import styles from "../../../src/StyleSheet";

// Stack用の変数
const Stack = createStackNavigator();

/**
* StatisticsNavigatorコンポーネント
*/
function StatisticsNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={STATISTICS}
      screenOptions={{ headerStyle: styles.headerStyle, cardStyle: styles.cardStyle, headerTintColor }}>
      <Stack.Screen name={STATISTICS} component={Statistics} options={{ headerLeft: () => <HeaderLeft />, title: 'Statistics', }}/>
      <Stack.Screen name={DETAIL} component={Detail} options={{ title: 'Details', }} />
    </Stack.Navigator>
  );
}

export default StatisticsNavigator;
