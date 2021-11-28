# ReactNativeSample
ReactNativeを学ぶためのリポジトリです。

### テンプレート作成用のコマンド
   `npx react-native init MyApp --template react-native-template-typescript@6.3.16`

### 各環境での実行方法
   1. Run instructions for Android:
      • Have an Android emulator running (quickest way to get started), or a device connected.  
      • cd "MyAppまでのフォルダパス" && npx react-native run-android  
  
   2. Run instructions for iOS:
    • cd "MyAppまでのフォルダパス" && npx react-native run-ios  
    - or -  
    • Open MyApp/ios/MyApp.xcworkspace in Xcode or run "xed -b ios"  
    • Hit the Run button  
    
   3. Run instructions for macOS:
    • See https://aka.ms/ReactNativeGuideMacOS for the latest up-to-date instructions.  
    
### 環境診断コマンド
   `npx react-native doctor`

### React-Nativeの標準的なコンポーネント
   1. Viewコンポーネント
   2. Textコンポーネント
   3. Imageコンポーネント
   4. Scrollコンポーネント
   5. FlatListコンポーネント
   6. SectionListコンポーネント　

### コンポーネント化するメリット
   1. 開発効率が上がる
   2. 保守性が向上する
   3. 関心の分離を実現できる。
   4. テストしやすくなる。

### Jestを活用したユニットテストの方法
    __test__フォルダ配下にある拡張子が、.js .ts .tsxのファイルもしくは、  
    .test.js test.ts test.tsxのファイル。


### Reduxとは
　　 ReactJSが扱うUIのstate(状態)を管理をするためのフレームワークのこと。  
    以下、簡単に機能の役割を記載します。  
    
   1. Actions
      actionは、アプリケーションからのデータをstoreに送るためのもの
   2. Reducers
      reducerは、actionを受けてstateを変更するためのメソッド
   3. Stores
      stateを保持するためのもの

### 参考用のリポジトリ
   <a href="https://github.com/mashharuki/praiser">こちら</a>

### Reduxの公式ドキュメント
   <a href="https://github.com/reduxjs/redux">こちら</a>