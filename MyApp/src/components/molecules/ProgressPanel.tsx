/**
 * Todoの進捗を表示するモジュール用コンポーネントファイル
 */

import React from "react";
import { View, Text } from "react-native";
import styles from "../../StyleSheet";
import Progress from "../atoms/Progress";
import HeaderText from "../atoms/HeaderText";

/**
 * Statistic用のインターフェース
 */
export interface Statistic{
  numofCompleted: number;
  numofAll: number;
  humofUnCompleted: number;
  completedRatio: number;
  uncompletedRatio: number;
};

/**
 * ProgressPanelコンポーネント
 */
function ProgressPanel(props: Statistic) {
  // 引数から値を取得する。
  const { uncompletedRatio, completedRatio } = props;

  return (
    <View style={styles.ratioArea}>
      <View style={styles.headerTextContainer}>
        <HeaderText text="Progress" />
      </View>
      <View style={styles.graphContainer}>
        <Progress value={completedRatio} />
        <View style={styles.progressPanelTextContainer}>
          <View>
            <Text style={styles.progressPanelText}>Done</Text>
            <Text style={styles.progressPanelText}>UnDone</Text>
          </View>
          <View>
            <Text style={[styles.progressPanelText, styles.numberText]}>{completedRatio}</Text>
            <Text style={[styles.progressPanelText, styles.numberText]}>{uncompletedRatio}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProgressPanel;

