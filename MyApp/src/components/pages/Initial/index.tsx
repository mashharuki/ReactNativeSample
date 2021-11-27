/**
 * 初期画面用のコンポーネントファイル
 */

import React, { useCallback, useContext, useRef, useState } from 'react';
import { CarouselStatic } from 'react-native-snap-carousel';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Carousel } from '../../../components/organisms';
import { Pagination } from '../../../components/atoms';
import { Context, Status } from '../../../contexts/ui';
import styles from '../../../StyleSheet';

/**
 * Data用のインターフェース
 */
interface Data {
  text: string;
};

// レンダリンするためのデータ
const renderData =  [
  {
    text: 'Hello React Native world. ¥n welcome to the JS world. ¥n¥n This application is made from React Native.',
  },
  {
    text: 'If you use this application, ¥n you could manage your task. ¥n¥n So, please register and manage your task.',
  },
  {
    text: 'In the first, you have to register your account. ¥n¥n Please, tell me your email.',
  },
];

/**
 * Initialコンポーネント
 */
function Initial() {
  // ステート変数
  const [ activeSlide, changeSlide ] = useState(0);

  const { setApplicationState } = useContext(Context);
  const carouselRef = useRef(null);

  /**
   * カルーセル終了時の関数
   */
  const onEnd = useCallback(() => {
    setApplicationState(Status.UN_AUTHORIZED);
  }, [setApplicationState]);

  /**
   * nextボタンを押した時の処理
   */
  const onNext = useCallback(() => {
    // 一番最後のカルーセルか確認する。
    const nextIndex = activeSlide === renderData.length -1 ? activeSlide : 1 + activeSlide;

    /**
     * 250ミリ秒経ってから処理する内容
     */
    setTimeout(() => {
      if(!carouselRef || !carouselRef.current) {
        return;
      }
      // カルーセルをセットする。
      const carousel = (carouselRef.current as any) as CarouselStatic<Data>;
      // 追加する。
      carousel.snapToItem(nextIndex);
    }, 250);
    // スライドを変更する。
    changeSlide(nextIndex);
  }, [activeSlide]);

  return (
    <SafeAreaView style={styles.initialContainer}>
      <Carousel data={renderData} onEnd={onEnd} onNext={onNext} carouselRef={carouselRef} onSnapToItem={changeSlide} />
      <Pagination length={renderData.length} index={activeSlide} />
    </SafeAreaView>
  );
}

export default Initial;

