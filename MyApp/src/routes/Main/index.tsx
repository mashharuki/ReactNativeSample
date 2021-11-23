/**
 * 画面遷移のルーティングを制御するファイル
 */

import React from "react";
import { createStackNavigator, StackCardInterpolationProps } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { INITIAL, LOADING, HOME, CHOOSE_LOGIN, STATISTICS } from "../../constants/path";
import { Initial, Loading, ChooseLogin} from "../../components/pages";
import * as UiContext from "../../contexts/ui";
import Statistics from "./Statistics";
import Home from "./Home";

// Stack用の変数を生成する。
const Stack = createStackNavigator();
// Tab用の変数を生成する。
const Tab = createBottomTabNavigator();
// アニメーション用の変数
const forFade = ({ current }: StackCardInterpolationProps) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

/**
 * Tab用のルーティングコンポーネント
 */
function TabRoutes() {
  return(
    <Tab.Navigator initialRouteName={HOME}>
      <Tab.Screen name={HOME} component={Home} />
      <Tab.Screen name={STATISTICS} component={Statistics} />
    </Tab.Navigator>
  );
}

/**
 * ログイン状態かどうかを確認する関数
 */
function switchingAuthStatus(status: UiContext.Status) {
  switch (status) {
    case UiContext.Status.UN_AUTHORIZED:
      return <Stack.Screen name={CHOOSE_LOGIN} component={ChooseLogin} />;
    case UiContext.Status.AUTHORIZED:
      return <Stack.Screen name={HOME} component={TabRoutes} />;
    case UiContext.Status.FIRST_OPEN:
    default:
      return <Stack.Screen name={INITIAL} component={Initial} />;
  }
}

/**
 * ルーティングロジックの本体
 */
function AuthWithRoutes() {
  // コンテキスト用の変数
  const uiContext = React.useContext(UiContext.Context);

  return (
    <Stack.Navigator initialRouteName={LOADING} headerMode="none" screenOptions={{ cardStyleInterpolator: forFade }}>
      { uiContext.applicationState !== UiContext.Status.LOADING ? (
        switchingAuthStatus(uiContext.applicationState)
      ) : (
        <Stack.Screen name={LOADING} component={Loading} />
      )}
    </Stack.Navigator>
  );
}

export default AuthWithRoutes;
