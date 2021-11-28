/**
 * ユーザー画像を表示させるコンポーネント
 */

import React from "react";
import { Avatar as PaperAvatar } from "react-native-paper";
import { ImageSourcePropType, ViewStyle } from "react-native";

/**
 * 引数用のインターフェース
 */
interface Props {
  size?: number;
  source: ImageSourcePropType;
  style?: ViewStyle | ViewStyle[];
};

/**
 * Avatarコンポーネント
 */
function Avatar(props: Props) {
  // 引数から値を取得する。
  const { size, source, style } = props;

  return <PaperAvatar.Image size={size} source={source} style={style} />;
}

export default Avatar;
