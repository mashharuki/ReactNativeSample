/**
 * プロパティの内容を全て含めてコピーする関数
 */

export default function deepCopy<T>(target:T): T {
  return JSON.parse(JSON.stringify(target));
}
