
export const formatNumber = (value: number) => {
    if (value === 0) return '00'
    if (value > 9) return value
    return '0' + value
}

export const stringIncludesArray = (value: string, stringArray: string[]): boolean => {
    for (const s of stringArray) {
        if (value.includes(s)) return true
    }
    return false
}

export function removeDuplicates<T>(array: T[]): T[] {
    return [...new Set(array)]
}

export const upperCaseFirstLetter = (str: string[]): string[] => {
    return str.map(s => s.charAt(0).toUpperCase() + s.slice(1))
}