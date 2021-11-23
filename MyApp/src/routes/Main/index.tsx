/**
 * 画面遷移のルーティングを制御するファイル
 */

import React from "react";
import { createStackNavigator, StackCardInterpolationProps } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { INITIAL, LOADING, HOME, CHOOSE_LOGIN, STATISTICS, USER_INFO } from "../../constants/path";
import { Initial, Loading, ChooseLogin} from "../../components/pages";
import * as UiContext from "../../contexts/ui";
import Statistics from "./Statistics";
import Home from "./Home";
import UserInfo from "./UserInfo";

// Stack用の変数を生成する。
const Stack = createStackNavigator();
// Tab用の変数を生成する。
const Tab = createBottomTabNavigator();
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

/**
 * HomeWithDrawerコンポーネント
 */
function HomeWithDrawer() {
  return (
    <HomeDrawer.Navigator initialRouteName={HOME}>
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
    <HomeDrawer.Navigator>
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
