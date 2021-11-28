/**
 * プログレスバー用のコンポーネントファイル
 */

import React from "react";
import { Text } from "react-native";
import styles from "../../StyleSheet";
import { COLOR } from "../../constants/theme";
import { ProgressCircle } from "react-native-svg-charts";

/**
 * 引数用のインターフェース
 */
interface Props {
  value: number;
}

/**
 * Progressコンポーネント
 */
function Progress(props: Props) {
  // 引数より値を取得する。
  const { value } = props;

  return <ProgressCircle style={styles.progress} progressColor={COLOR.PRIMARY} progress={value} />
};

export default Progress;
