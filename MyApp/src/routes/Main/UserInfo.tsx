/**
 * UserInfo画面用のコンポーネント
 */

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { USER_INFO } from "../../constants/path";
import { UserInfo } from "../../components/pages";
import { HeaderLeft, headerTintColor  } from "../Header";
import styles from "../../../src/StyleSheet";

// Stack用の変数
const Stack = createStackNavigator();

/**
* UserInfoコンポーネント
*/
function UserInfoNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={USER_INFO}
      screenOptions={{ headerStyle: styles.headerStyle, cardStyle: styles.cardStyle, headerTintColor }}>
      <Stack.Screen name={USER_INFO} component={UserInfo} options={{ headerLeft: () => <HeaderLeft />, title: 'User Info'}}/>
    </Stack.Navigator>
  );
}

export default UserInfoNavigator;
