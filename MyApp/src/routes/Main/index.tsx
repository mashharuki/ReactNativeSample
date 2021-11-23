/**
 * 画面遷移のルーティングを制御するファイル
 */

import React from "react";
import { createStackNavigator, StackCardInterpolationProps } from "@react-navigation/stack";
import { INITIAL, LOADING, HOME, CHOOSE_LOGIN } from "src/constants/path";
import { Initial, Loading, Home, ChooseLogin } from "src/components/pages";
import * as UiContext from "../../contexts/ui";

// Stack用の変数を生成
const Stack = createStackNavigator();
// アニメーション用の変数
const forFade = ({ current }: StackCardInterpolationProps) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

/**
 * ログイン状態かどうかを確認する関数
 */
function switchingAuthStatus(status: UiContext.Status) {
  switch (status) {
    case UiContext.Status.UN_AUTHORIZED:
      return <Stack.Screen name={CHOOSE_LOGIN} component={ChooseLogin} />;
    case UiContext.Status.AUTHORIZED:
      return <Stack.Screen name={HOME} component={Home} />;
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
