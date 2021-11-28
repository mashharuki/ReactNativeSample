/**
 * ユーザー情報を表示されるためのコンポーネントファイル
 */

import React from "react";
import { View, Text } from "react-native";
import styles from "../../StyleSheet";

/**
 * 引数用のインターフェース
 */
interface Props {
  label: string;
  value: string | number | null;
};

/**
 * LabalValueContainerコンポーネント
 */
function LabalValueContainer(props: Props) {
  // 引数から値を取得する。
  const { label, value='' } = props;

  return (
    <View style={styles.labelContainerRow}>
      <View style={styles.labelContainer}>
        <Text style={styles.labelText}>
          {label}
        </Text>
      </View>
      <View style={styles.valueContainer}>
        <Text style={styles.valueText}>
          {value}
        </Text>
      </View>
    </View>
  );
}

export default LabalValueContainer;
