/**
 * Statistics画面用のコンポーネントファイル
 */

import React from "react";
import { View, Text } from 'react-native';
import styles from '../../../StyleSheet';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { DETAIL } from 'src/constants/path';
import { useNavigation } from '@react-navigation/core';
import HeaderText from '../../atoms/HeaderText';
import ProgressPanel, { Statistic } from '../../molecules/ProgressPanel';
import Todos, { Todo, State as TodoState } from '../../organisms/Todos';

/**
 * テスト用のデータ
 */
const props = {
  statistics: {
    numofCompleted: 10,
    numofAll: 25,
    humofUnCompleted: 15,
    completedRatio: 0.4,
    uncompletedRatio: 0.6,
  },
  histories:[
    {
      id: '1',
      title: 'Todo1',
      detail: 'Done',
      isDone: true,
    },
    {
      id: '2',
      title: 'Todo2',
      detail: 'Done',
      isDone: true,
    },
  ]
};

/**
 * 引数用のインターフェース
 */
 interface Props {
  statistics: Statistic;
  histories: TodoState;
};

/**
 *  ヘッダーコンポーネント
 */
function Header(props: Props) {
  return (
    <View>
      <ProgressPanel {...props.statistics} />
      <View style={styles.statisticsTextContainer}>
        <HeaderText text="History"/>
      </View>
    </View>
  );
};

/**
 * Statisticsコンポーネントファイル
 */
function Statistics() {
  // ナビゲーション用の変数を用意する。
  const { navigate } = useNavigation();

  /**
   * 詳細画面に遷移する処理
   */
  const gotoDetail = React.useCallback((state: Todo.State, isEditable: boolean) => {
    navigate(DETAIL, {...state, isEditable});
  }, [navigate]);

  // 処理を定義する。
  const actions = React.useMemo(() => ({ gotoDetail }), [gotoDetail]);

  return <Todos isEditable={false} todos={props.histories} actions={actions} header={<Header {...props} />} />
}

export default Statistics;


