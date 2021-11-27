/**
 * ヘッダー用のコンポーネント
 */

import React from "react";
import  Icon  from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/core";
import { DrawerActions } from "@react-navigation/routers";
import { COLOR } from '../../constants/theme';

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

  return <Icon.Button name="bars" color={COLOR.WHITE} backgroundColor={COLOR.MAIN} onPress={onPress} />;
}

export default HeaderList;
