/**
 * UserInfo画面用のコンポーネント
 */

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { USER_INFO } from "../../constants/path";
import { UserInfo } from "../../components/pages";
import { HeaderLeft } from "../Header";

// Stack用の変数
const Stack = createStackNavigator();

/**
* UserInfoコンポーネント
*/
function UserInfoNavigator() {
  return (
    <Stack.Navigator initialRouteName={USER_INFO}>
      <Stack.Screen name={USER_INFO} component={UserInfo} options={{ headerLeft: () => <HeaderLeft />, }}/>
    </Stack.Navigator>
  );
}

export default UserInfoNavigator;
