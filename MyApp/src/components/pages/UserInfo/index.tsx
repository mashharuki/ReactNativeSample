/**
 * UserInfo画面用コンポーネントファイル
 */

import React from "react";
import { View, Text } from 'react-native';
import styles from '../../../StyleSheet';
import { Context, Status } from "src/contexts/ui";
import { Avatar, Button } from "../../../components/atoms";
import LabalValueContainer from "../../../components/atoms/LabelValueContainer";
import formatDate from "../../../lib/hooks/format-date";

// テスト用のデータ
const userState = {
  name: 'test',
  createAt: '2020/01/01',
  mailAddress: 'test@test.com',
};

/**
 * UserInfoコンポーネント
 */
function UserInfo() {
  // コンテキスト用の変数を生成する。
  const { setApplicationState } = React.useContext(Context);
  // 画像データを取得する。
  const source = React.useMemo(() => require('../../../../assets/Person.png'), []);

  /**
   * サインアウト処理
   */
  const signOut = React.useCallback(async () => {
    setApplicationState(Status.UN_AUTHORIZED);
  }, [setApplicationState]);

  return (
    <View style={styles.userInfoContainer}>
      <View style={styles.imageIconContainer}>
        <Avatar source={source} />
        <Text style={styles.nameText}>{userState.name}</Text>
      </View>
      <LabalValueContainer label="e-mail" value={userState.mailAddress} />
      <LabalValueContainer label="registeredAt" value={userState.createAt && formatDate(new Date(userState.createAt))} />
      <Button style={styles.userInfoButton} onPress={signOut} label="Sign Out" />
    </View>
  );
}

export default UserInfo;
