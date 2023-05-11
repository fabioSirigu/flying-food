export const optionsMonths = [
  { value: 1, label: 'JAN' },
  { value: 2, label: 'FEB' },
  { value: 3, label: 'MAR' },
  { value: 4, label: 'APR' },
  { value: 5, label: 'MAY' },
  { value: 6, label: 'JUN' },
  { value: 7, label: 'JUL' },
  { value: 8, label: 'AUG' },
  { value: 9, label: 'SEPT' },
  { value: 10, label: 'OCT' },
  { value: 11, label: 'NOV' },
  { value: 12, label: 'DEC' }
]

const now = new Date().getFullYear()

export const optionsYears = Array(10)
  .fill('')
  .map((r, i) => ({ value: now + i, label: (now + i).toString() }))
