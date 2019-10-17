export function toThousandsFormatter (value) {
  let unitName = '' // 单位
  let val = value // 值
  if (value >= 10000) {
    unitName = '万'
    val = (value / 10000).toFixed(1)
  }
  return toThousands(val) + unitName
}
export function toThousands (num) {
  return (num || 0).toString().replace(/(\d)(?=(?:\d{3}(\.\d*)?)+$)/g, '$1,')
}
