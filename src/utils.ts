
export const formatNumber = (value: number) => {
    if (value === 0) return '00'
    if (value > 9) return value
    return '0' + value
}