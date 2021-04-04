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
export function stringFromDatetime(dte: Date): string {
  if (dte === null) return ''
  if (dte === undefined) return ''
  const y = dte.getFullYear()
  const mo = dte.getMonth() + 1
  const d = dte.getDate()
  const mmo = (mo < 10 ? '0' : '') + mo
  const dd = (d < 10 ? '0' : '') + d

  const h = dte.getHours()
  const mn = dte.getMinutes()
  const hh = (h < 10 ? '0' : '') + h
  const mmn = (mn < 10 ? '0' : '') + mn

  return `${y}-${mmo}-${dd} ${hh}:${mmn}`
}

export function dateFromString(stdate: string /**yyyy-mm-dd */): Date {
  if (stdate == null) return new Date()
  const [year, month, day] = stdate.split('-')
  const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day), 12)
  return date
}
const jours = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi']
const mois = [
  'janvier',
  'février',
  'mars',
  'avril',
  'mai',
  'juin',
  'juillet',
  'août',
  'septembre',
  'octobre',
  'novembre',
  'décembre',
]
export function dateFrancaise(dte: Date): string {
  const i = dte.getDay()
  const s = jours[i] + ' ' + dte.getDate() + ' ' + mois[dte.getMonth() - 1]
  return s
}
