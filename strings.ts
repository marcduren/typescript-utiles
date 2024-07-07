export function padEnd(str: string, length: number, char = '0'): string {
  return str + char.repeat(Math.max(0, length - str.length))
}

/**
 * Makes the first character of a string uppercase
 */
export function upperFirst(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

/*nombre entier avec séparateur de milliers */
export function nombreEntier(n: number): string {
  if (n) {
    return Number(n)
      .toFixed(0)
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')
  } else {
    return ''
  }
}

export function arrondir(nombre: number, decimales: number): number {
  return parseFloat(nombre.toFixed(decimales))
}