/**
 * アイコンボタン用のコンポーネントファイル
 */

import React from "react";
import { IconButton as PaperIconButton } from "react-native-paper";
import { ViewStyle } from "react-native";
import styles from "../../StyleSheet";

/**
 * 引数用のインターフェース
 */
interface Props {
  icon: string;
  onPress: () => void;
  style: ViewStyle | ViewStyle[];
  iconColor?: string;
  size?: number;
};

/**
 * IconButtonコンポーネント
 */
function IconButton(props: Props) {
  // 引数から値を取得する。
  const { icon, onPress, style, iconColor, size } = props;

  return <PaperIconButton icon={icon} onPress={onPress} color={iconColor} size={size} style={[styles.iconButton, style]} />;
}

export default IconButton;
