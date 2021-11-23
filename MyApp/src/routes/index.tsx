/**
 * ルーティング用のコンポーネントファイル
 */
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainRoutes from "./Main";

/**
 * LoggingRoutesコンポーネント
 */
function LoggingRoutes() {
  return (
    <NavigationContainer>
      <MainRoutes />
    </NavigationContainer>
  );
}

export default LoggingRoutes;
