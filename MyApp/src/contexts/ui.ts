/**
 * 画面の状態を定義するファイル
 */

import React from "react";

// 状態用の列挙型変数
export enum Status {
  LOADING = 'loading',
  FIRST_OPEN = 'firstOpen',
  UN_AUTHORIZED = 'unAuthorized',
  AUTHORIZED = 'authorized',
}

// 初期状態を生成する関数
export function createApplicationInitialState(): Status {
  return Status.LOADING;
}

// Context生成関数
export const Context = React.createContext({
  applicationState: createApplicationInitialState(),
  setApplicationState: (_: Status) => {},
});
