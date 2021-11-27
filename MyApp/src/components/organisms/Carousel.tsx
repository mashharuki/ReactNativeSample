/**
 * カルーセル用のコンポーネントファイル
 */

import React from "react";
import { width } from "../../lib/window";
import SnapCarousel from 'react-native-snap-carousel';
import { CarouselItem } from "../molecules";
import { exp } from "react-native-reanimated";

/**
 * 引数用のインターフェース
 */
interface Props {
  onEnd: () => void;
  onNext: () => void;
  carouselRef: any;
  onSnapToItem: (slide: number) => void;
  data: { text: string; }[];
};

/**
 * Carouselコンポーネント
 */
function Carousel(props: Props) {
  // 引数から値を取得する。
  const { onEnd, onNext, carouselRef, onSnapToItem, data } = props;

  return (
    <SnapCarousel
      data={data}
      ref={carouselRef}
      renderItem={({ item, index }) => (
        <CarouselItem item={item} onPress={index === data.length - 1 ? onEnd : onNext} />
      )}
      sliderWidth={width}
      itemWidth={width}
      onSnapToItem={onSnapToItem}
      />
  );
}

export default Carousel;
