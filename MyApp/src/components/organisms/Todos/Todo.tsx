/**
 * Todoを構築するためのコンポーネントファイル
 */

import React from 'react';
import { View } from 'react-native';
import { SwipeRow } from 'react-native-swipe-list-view';
import styles from '../../../StyleSheet';
import { COLOR } from '../../../constants/theme';
import * as DoneButton from './DoneButton';
import * as DeleteButton from './DeleteButton';
import TodoDisplay from '../../molecules/Todo';
import { identifier } from '@babel/types';

// 完了ボタン、削除ボタン
export { DoneButton, DeleteButton };

// 詳細画面に遷移するインターフェース
export interface GotoDetail {
  (state : State, isEditable: boolean): void;
};

/**
 * 状態を表すインターフェース
 */
export interface State {
  id: string;
  title: string;
  detail?: string;
  isDone?: boolean;
};

/**
 * 編集処理機能をまとめたインターフェース
 */
export interface EditableActions {
  toggleTodo: DoneButton.ToggleTodo;
  removeTodo: DeleteButton.RemoveTodo;
  gotoDetail: GotoDetail;
}

/**
 * 編集状態についてまとめたインターフェース
 */
interface EditableProps {
  isEditable: true;
  state: State;
  actions: EditableActions;
}

/**
 * 読み取り情報時の機能をまとめたインターフェース
 */
export interface ReadonlyActions {
  gotoDetail: GotoDetail;
}

/**
 * 読み取り状態についてまとめたインターフェース
 */
interface ReadonlyProps {
  isEditable: false;
  state: State;
  actions: ReadonlyActions;
}

/**
 * 編集可能なTodoを表示するコンポーネント
 */
function EditableRow(props: EditableProps) {
  // 引数から値を取得する。
  const {
    isEditable,
    state,
    actions: { gotoDetail, removeTodo, toggleTodo },
  } = props;

  const rowRef = React.useRef<SwipeRow<View>>(null);

  /**
   * 閉じる時の処理
   */
  const closeRow = React.useCallback(() => {
    rowRef?.current?.closeRow();
  }, [rowRef]);

  /**
   * トグルで表示する時の処理
   */
  const toggleActions = React.useMemo(() => {
    return {
      closeRow,
      toggleTodo,
    };
  }, [closeRow, toggleTodo]);

  /**
   * 削除する時の処理
   */
  const deleteActions = React.useMemo(() => {
    return {
      closeRow,
      removeTodo,
    };
  }, [closeRow, removeTodo]);

  /**
   * 押した時の処理
   */
  const onPress = React.useCallback(() => {
    gotoDetail(state, isEditable);
  }, [state, isEditable, gotoDetail]);

  return (
    <SwipeRow
      disableLeftSwipe={!isEditable}
      disableRightSwipe={!isEditable}
      rightOpenValue={-80}
      leftOpenValue={80}
      ref={rowRef}
    >
      <View style={styles.todoModuleContainer}>
        <DoneButton.Component state={state} actions={toggleActions} />
        <DeleteButton.Component state={state} actions={deleteActions} />
      </View>
      <TodoDisplay onPress={onPress} title={state.title} detail={state.detail} isDone={state.isDone} />
    </SwipeRow>
  );
}

/**
 * 読み取りのみ可能なTodoを表示するコンポーネント
 */
function ReadonlyRow(props: ReadonlyProps) {
  // 引数から値を取得する。
  const { isEditable, state, actions: { gotoDetail } } = props;

  /**
   * ボタンを押した時の処理
   */
  const onPress = React.useCallback(() => {
                    gotoDetail(state, isEditable);
                  }, [isEditable, state, gotoDetail]
  );

  return <TodoDisplay onPress={onPress} title={state.title} detail={state.detail} isDone={state.isDone} />;
}

// 引数を定義する。
type Props = EditableProps | ReadonlyProps;

/**
 * Componentコンポーネント(メインコンポーネント)
 */
export function Component(props: Props) {
  // 編集可能かどうかチェックする。
  if(props.isEditable) {
    return <EditableRow {...props} />;
  }
  return <ReadonlyRow {...props} />;
}
