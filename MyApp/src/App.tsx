/**
 * メインコンポーネントファイル
 * @format
 */

import React from 'react';
import { View, Text } from 'react-native';
import styles from './StyleSheet';
import * as UiContext from "./contexts/ui";
import Routes from "./routes";

/**
 * Appコンポーネント
 */
const App = () => {
  // ステート変数を定義する。
  const [ applicationState, setApplicationState ] = React.useState(UiContext.createApplicationInitialState());

  return (
    <UiContext.Context.Provider value={{ applicationState, setApplicationState }}>
      <Routes />
    </UiContext.Context.Provider>
  );
};

export default App;
