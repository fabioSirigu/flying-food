import {
  faCheck,
  faPlus,
  faChevronRight,
  faMagnifyingGlass,
  faBell,
  faBagShopping,
  faRightFromBracket
} from '@fortawesome/free-solid-svg-icons'

export const icons = {
  plus: faPlus,
  check: faCheck,
  right: faChevronRight,
  search: faMagnifyingGlass,
  notice: faBell,
  bag: faBagShopping,
  logout: faRightFromBracket
}
export type NameIcon = keyof typeof icons
