/**
 * ヘッダー用のコンポーネント
 */

import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { DrawerActions } from "@react-navigation/routers";

/**
 * HeaderListコンポーネント
 */
function HeaderList() {
  // ナビゲーション用の変数を用意する。
  const { dispatch } = useNavigation();
  // 押した時の処理内容
  const onPress = React.useCallback(() => {
    dispatch(DrawerActions.openDrawer());
  }, [dispatch]);

  return (
    <TouchableOpacity onPress={onPress}>
      <Text>open</Text>
    </TouchableOpacity>
  );
}

export default HeaderList;
