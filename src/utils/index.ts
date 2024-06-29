/**
 * フォーマットされた日時を返す
 *
 * @param dateTimeString  - 日時文字列
 * @returns  - フォーマットされた日時 (yyyy-MM-dd hh:mm)
 */
export function formatDateTime(dateTimeString: string) {
  const createdDate = new Date(dateTimeString)

  const hours = createdDate.getHours()
  const minutes = createdDate.getMinutes()

  // hh:mm にフォーマットする
  const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`

  const formattedDate = `${createdDate.getFullYear()}-${(createdDate.getMonth() + 1).toString().padStart(2, '0')}-${createdDate
    .getDate()
    .toString()
    .padStart(2, '0')} ${formattedTime}`

  return formattedDate
}
