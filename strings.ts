export function padEnd(str: string, length: number, char = '0'): string {
  return str + char.repeat(Math.max(0, length - str.length))
}

/**
 * Makes the first character of a string uppercase
 */
export function upperFirst(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
