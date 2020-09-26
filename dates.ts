export function stringFromDate(dte: Date): string {
  if (dte === null) return ''
  if (dte === undefined) return ''
  const y = dte.getFullYear()
  const mo = dte.getMonth() + 1
  const d = dte.getDate()
  const mmo = (mo < 10 ? '0' : '') + mo
  const dd = (d < 10 ? '0' : '') + d
  return `${y}-${mmo}-${dd}`
}
export function dateFromString(stdate: string /**yyyy-mm-dd */): Date {
  if (stdate == null) return new Date()
  const [year, month, day] = stdate.split('-')
  const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day), 12)
  return date
}