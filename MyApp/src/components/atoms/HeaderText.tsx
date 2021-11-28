/**
 * ヘッダーテキスト用のコンポーネントファイル
 */

import React from "react";
import { Text } from "react-native";
import styles from "../../StyleSheet";

/**
 * 引数用のインターフェース
 */
interface Props {
  text: string;
};

/**
 * HeaderTextコンポーネント
 */
function HeaderText(props: Props) {
  // 引数から値を取得する。
  const { text } = props;

  return <Text style={styles.headerText}>{text}</Text>;
};

export default HeaderText;
