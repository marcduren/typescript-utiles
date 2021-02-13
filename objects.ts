// code from vuetify/helpers https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/util/helpers.ts
export function deepEqual(a: any, b: any): boolean {
  if (a === b) return true

  if (a instanceof Date && b instanceof Date) {
    // If the values are Date, they were convert to timestamp with getTime and compare it
    if (a.getTime() !== b.getTime()) return false
  }

  if (a !== Object(a) || b !== Object(b)) {
    // If the values aren't objects, they were already checked for equality
    return false
  }

  const props = Object.keys(a)

  if (props.length !== Object.keys(b).length) {
    // Different number of props, don't bother to check
    return false
  }

  return props.every((p) => deepEqual(a[p], b[p]))
}

export function deepCopy<T>(obj: T): T {
  if (typeof obj !== 'object' || obj === null) return obj

  if (obj instanceof Array) return (obj.map(deepCopy) as unknown) as T

  const copy = {} as T
  ;(Object.getOwnPropertyNames(obj) as (keyof T)[]).forEach(prop => {
    copy[prop] = deepCopy(obj[prop])
  })

  Object.setPrototypeOf(copy, Object.getPrototypeOf(obj))

  return copy
}