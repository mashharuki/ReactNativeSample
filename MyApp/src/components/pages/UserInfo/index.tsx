/**
 * UserInfo画面用コンポーネントファイル
 */

import React from "react";
import { View, Text } from 'react-native';
import styles from '../../../StyleSheet';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Context, Status } from "src/contexts/ui";

/**
 * UserInfoコンポーネント
 */
function UserInfo() {
  // コンテキスト用の変数を生成する。
  const { setApplicationState } = React.useContext(Context);

  return (
    <View style={styles.container}>
      <Text>UserInfo</Text>
      <TouchableOpacity onPress={() => setApplicationState(Status.UN_AUTHORIZED)}>
        <Text>Sign out</Text>
      </TouchableOpacity>
    </View>
  );
}

export default UserInfo;
