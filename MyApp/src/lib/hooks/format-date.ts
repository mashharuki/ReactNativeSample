/**
 * 日付フォーマットを管理するためのファイル
 */

/**
 * formatDateコンポーネント
 */
function formatDate(date: Date) {
  return `${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`;
};

export default formatDate;
