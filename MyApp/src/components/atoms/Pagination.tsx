/**
 * インジケーターで使用するコンポーネントファイル
 */

 import React from "react";
 import styles from "../../StyleSheet";
 import { Pagination as SCPagination } from 'react-native-snap-carousel';

 /**
  * 引数用のインターフェース
  */
interface Props {
  length: number;
  index: number;
}

/**
 * Paginationコンポーネント
 */
function Pagination(props: Props) {
  // 引数を取得する。
  const { length, index } = props;

  return (
    <SCPagination
      dotsLength={length}
      activeDotIndex={index}
      containerStyle={styles.pagination}
      dotStyle={styles.dot}
      inactiveDotOpacity={0.4}
      inactiveDotScale={0.6}
    />
  );
}

export default Pagination;

