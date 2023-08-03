
export const formatNumber = (value: number): string => {
    if (value === 0) return '00'
    if (value > 9) return value + ''
    return '0' + value
}

export const formatString = (value: string): string => {
    return value.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, "")
}