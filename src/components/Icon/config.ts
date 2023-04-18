import {
  faCheck,
  faPlus,
  faChevronRight,
  faMagnifyingGlass
} from '@fortawesome/free-solid-svg-icons'

export const icons = {
  plus: faPlus,
  check: faCheck,
  right: faChevronRight,
  search: faMagnifyingGlass
}
export type NameIcon = keyof typeof icons
