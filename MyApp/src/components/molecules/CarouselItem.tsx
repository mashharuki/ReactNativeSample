/**
 * カルーセルに組み込むアイテムコンポーネント
 */

import React from "react";
import { View, Text } from 'react-native';
import { Logo, Button } from "../atoms";
import styles from "../../StyleSheet";

/**
 * CarouselItemコンポーネント
 */
function  CarouselItem({
    onPress,
    item,
  }: {
    item: {text: string}
    onPress: () => void
  }) {

    return (
      <View style={styles.carouselItemContainer}>
        <View style={styles.carouselItemTextContainer}>
          <View style={styles.carouselItemImageContainer}>
            <Logo />
          </View>
          <View style={styles.carouselItemContentContainer}>
            <View>
              <Text style={styles.carouselItemText}>{item.text}</Text>
            </View>
            <Button onPress={onPress} label='next' />
          </View>
        </View>
      </View>
    );
};

export default CarouselItem;
