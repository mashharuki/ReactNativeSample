/**
 * ボタンコンポーネント用のファイル
 */

import React from "react";
import { COLOR } from "../../constants/theme";
import { Text, View, TextStyle, ViewStyle } from "react-native";
import { Button as PaperButton } from "react-native-paper";
import styles from "../../../src/StyleSheet";

/**
 * 引数用のインターフェース
 */
interface Props {
  onPress: () =>  void;
  style?: ViewStyle | ViewStyle[];
  textStyle?: TextStyle | TextStyle[];
  label?: string;
  color?: string;
  disabled?: boolean;
  disabledColor?: string;
  icon?: string;
};

/**
 * Buttonコンポーネント
 */
function Button(props: Props) {
  // 引数を読み取る
  const { onPress, style, textStyle, label, color, disabled, disabledColor, icon } = props;

  return (
    <PaperButton
      mode="contained"
      onPress={onPress}
      style={style}
      disabled={disabled}
      contentStyle={{
        backgroundColor: disabled ? disabledColor : color
      }}
      icon={icon}
    >
      {  label && <Text style={[styles.buttonText, textStyle]} >{label}</Text>}
    </PaperButton>
  );
}

export default Button;
