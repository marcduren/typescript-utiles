export function stringFromDate(dte: Date, iso = true, heure = false): string {
  /// iso =yyyy-mm-dd , sinon jj/mm/aaaa
  if (dte === null) return ''
  if (dte === undefined) return ''
  const y = dte.getFullYear()
  const mo = dte.getMonth() + 1
  const d = dte.getDate()
  const mmo = (mo < 10 ? '0' : '') + mo
  const dd = (d < 10 ? '0' : '') + d
  let s = iso ? `${y}-${mmo}-${dd}` : `${dd}/${mmo}/${y}`
  if (heure) {
    const h = dte.getHours()
    const mn = dte.getMinutes()
    const hh = (h < 10 ? '0' : '') + h
    const mmn = (mn < 10 ? '0' : '') + mn
    s += ` ${hh}:${mmn}`
  }
  return s
}
export function stringFromDatetime(dte: Date, iso = true): string {
  return stringFromDate(dte, iso, true)
}
export function dateFromString(stdate: string /**yyyy-mm-dd */): Date {
  if (stdate == null) return new Date()
  const [year, month, day] = stdate.split('-')
  const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day), 12)
  return date
}
const jours = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi']
const mois = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre']
export function dateFrancaise(dte: Date): string {
  const i = dte.getDay()
  const s = jours[i] + ' ' + dte.getDate() + ' ' + mois[dte.getMonth() - 1]
  return s
}
