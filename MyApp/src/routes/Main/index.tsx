/**
 * 画面遷移のルーティングを制御するファイル
 */

import React from "react";
import { createStackNavigator, StackCardInterpolationProps } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { INITIAL, LOADING, HOME, CHOOSE_LOGIN, STATISTICS, USER_INFO, INPUT, SIGN_IN, SIGN_UP } from "../../constants/path";
import { Initial, Loading, ChooseLogin, Input, SignUp, SignIn } from "../../components/pages";
import { headerTintColor } from "../Header";
import { COLOR } from "../../constants/theme";
import styles from "../../../src/StyleSheet";
import * as UiContext from "../../contexts/ui";
import Statistics from "./Statistics";
import Home from "./Home";
import UserInfo from "./UserInfo";

// Stack用の変数を生成する。
const Stack = createStackNavigator();
// Tab用の変数を生成する。
const Tab = createBottomTabNavigator();
// Modal用の変数を生成する。
const ModalStack = createStackNavigator();
// ログイン状態選択用の変数を生成する。
const ChooseLoginStack = createStackNavigator();
// HomeDrawer用の変数を生成する。
const HomeDrawer = createDrawerNavigator();
// StatisticsDrawer用の変数を生成する。
const StatisticsDrawer = createDrawerNavigator();
// アニメーション用の変数
const forFade = ({ current }: StackCardInterpolationProps) => ({
  cardStyle: {
    opacity: current.progress,
  },
});
// Drawer用のカラーテーマ用の変数
const drawerContentOptions = {
  activeTintColor: COLOR.PRIMARY,
  inactiveTintColor: COLOR.WHITE,
};
// TabNavigatoer用の変数
const tabBarOptions = {
  activeTintColor: COLOR.PRIMARY,
  inactiveTintColor: COLOR.WHITE,
  style: {
    backgroundColor: COLOR.MAIN,
  },
};

/**
 * HomeWithDrawerコンポーネント
 */
function HomeWithDrawer() {
  return (
    <HomeDrawer.Navigator
      initialRouteName={HOME}
      drawerStyle={styles.drawerStyle}
      drawerContentOptions={drawerContentOptions}>
      <HomeDrawer.Screen name={HOME} component={Home} />
      <HomeDrawer.Screen name={USER_INFO} component={UserInfo} />
    </HomeDrawer.Navigator>
  );
}

/**
 * StatisticsWithDrawerコンポーネント
 */
function StatisticsWithDrawer() {
  return (
    <HomeDrawer.Navigator
    initialRouteName={STATISTICS}
      drawerStyle={styles.drawerStyle}
      drawerContentOptions={drawerContentOptions}>
      <HomeDrawer.Screen name={STATISTICS} component={Statistics} />
      <HomeDrawer.Screen name={USER_INFO} component={UserInfo} />
    </HomeDrawer.Navigator>
  );
}

/**
 * Tab用のルーティングコンポーネント
 */
function TabRoutes() {
  return(
    <Tab.Navigator
      initialRouteName={HOME}
      tabBarOptions={tabBarOptions}
      screenOptions={(props: any) =>  {
        const routeName = getActiveRouteName(props.route.state);
        return { tabBarVisible: routeName !== USER_INFO, };
      }}
    >
      <Tab.Screen name={HOME} component={HomeWithDrawer} />
      <Tab.Screen name={STATISTICS} component={StatisticsWithDrawer} />
    </Tab.Navigator>
  );
}

/**
 * 現在の画面名を取得する関数
 */
const getActiveRouteName = (state: any):string => {
  if (!state || !state.routes) {
    return '';
  }
  const route = state.routes[state.index];

  if (route.state) {
    return getActiveRouteName(route.state);
  }
  return route.name;
};

/**
 * モーダル用のコンポーネント
 */
function TabWithModalRoutes() {
  return(
    <ModalStack.Navigator mode="modal" headerMode="none" screenOptions={{ cardStyle: styles.cardStyle }}>
      <Stack.Screen name={HOME} component={Home} />
      <Stack.Screen name={INPUT} component={Input} />
    </ModalStack.Navigator>
  );
}

/**
 * ログイン状態選択用のナビゲーションコンポーネント
 */
function ChooseLoginNavigation() {
  return (
    <ChooseLoginStack.Navigator
      initialRouteName={CHOOSE_LOGIN}
      screenOptions={{ headerStyle: styles.headerStyle, cardStyle: styles.cardStyle, headerTintColor }}>
      <ChooseLoginStack.Screen name={CHOOSE_LOGIN} component={ChooseLogin} options={{ title: 'Choose login' }} />
      <ChooseLoginStack.Screen name={SIGN_IN} component={SignIn} options={{ title: 'Sign in' }} />
      <ChooseLoginStack.Screen name={SIGN_UP} component={SignUp} options={{ title: 'Sign up' }} />
    </ChooseLoginStack.Navigator>
  );
}

/**
 * ログイン状態かどうかを確認する関数
 */
function switchingAuthStatus(status: UiContext.Status) {
  switch (status) {
    case UiContext.Status.UN_AUTHORIZED:
      return <Stack.Screen name={CHOOSE_LOGIN} component={ChooseLoginNavigation} />;
    case UiContext.Status.AUTHORIZED:
      return <Stack.Screen name={HOME} component={TabWithModalRoutes} />;
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
