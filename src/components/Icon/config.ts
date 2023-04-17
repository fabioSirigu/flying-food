import { faCheck, faPlus, faChevronRight } from '@fortawesome/free-solid-svg-icons'

export const icons = {
  plus: faPlus,
  check: faCheck,
  right: faChevronRight
}
export type NameIcon = keyof typeof icons
