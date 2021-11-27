/**
 * ロゴ用のコンポーネントファイル
 */

import React from "react";
import { Image, ImageSourcePropType, ImageStyle } from "react-native";
import { width } from "../../lib/window";
import reactImage from '../../../assets/icon.png';
import styles from "../../StyleSheet";

/**
 * 引数用のインターフェース
 */
interface Props {
  image?: ImageSourcePropType;
  style?: ImageStyle | ImageStyle[];
}

/**
 * Logoコンポーネント
 */
function Logo(props: Props) {
  // 引数の値を取得する。
  const { image =reactImage, style } = props;

  return <Image source={image} resizeMode="contain" style={[styles.image, style]} />;
}

export default Logo;
