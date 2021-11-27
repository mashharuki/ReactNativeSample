/**
 * Todo表示用のコンポーネントファイル
 */

import React from "react";
import { Text, View, TouchableHighlight } from 'react-native';
import styles from "../../StyleSheet";
import Icon from "react-native-vector-icons/FontAwesome";
import { COLOR } from '../../constants/theme';

/**
 * 引数用のインターフェース
 */
interface Props {
  onPress: () => void;
  title: string;
  detail: string | undefined;
  isDone: boolean | undefined;
};

/**
 * TodoDisplayコンポーネント
 */
function TodoDisplay(props: Props) {
  // 引数から値を取得する。
  const { onPress, title, detail, isDone } = props;
  // ラベル用のスタイル
  const labelSyle = React.useMemo(() => (isDone ? [styles.todoTitle, styles.todoDoneText] : styles.todoTitle), [isDone]);

  return (
    <TouchableHighlight style={styles.todoContentContainer} onPress={onPress}>
      <View style={styles.todoContentContainer}>
        <View>
          <Text style={styles.todoTitle}>{title}</Text>
          {!!detail && <Text style={styles.todoDetail}>{detail}</Text>}
        </View>
        <Icon name="angle-right" size={32} color={COLOR.WHITE} />
      </View>
    </TouchableHighlight>
  );
}

export default TodoDisplay;
