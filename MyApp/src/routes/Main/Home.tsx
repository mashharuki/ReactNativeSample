/**
 * ホーム画面用のナビゲーターコンポーネント
 */

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { DETAIL, HOME } from "../../constants/path";
import { Detail, Home } from "../../components/pages";
import { HeaderLeft, headerTintColor  } from "../Header";
import styles from "../../../src/StyleSheet";

// Stack用の変数
const Stack = createStackNavigator();

/**
 * HomeNavigatorコンポーネント
 */
function HomeNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={HOME}
      screenOptions={{ headerStyle: styles.headerStyle, cardStyle: styles.cardStyle, headerTintColor }}>
      <Stack.Screen name={HOME} component={Home} options={{ headerLeft: () => <HeaderLeft />, title: 'Home', }}/>
      <Stack.Screen name={DETAIL} component={Detail} options={{ title: 'Details', }} />
    </Stack.Navigator>
  );
}

export default HomeNavigator;
