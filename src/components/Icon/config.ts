import {
  faCheck,
  faPlus,
  faChevronRight,
  faMagnifyingGlass,
  faBell,
  faBagShopping,
  faRightFromBracket,
  faHome,
  faLocation,
  faTruckFast,
  faSliders,
  faBars,
  faBorderAll
} from '@fortawesome/free-solid-svg-icons'

export const icons = {
  plus: faPlus,
  check: faCheck,
  right: faChevronRight,
  search: faMagnifyingGlass,
  notice: faBell,
  bag: faBagShopping,
  logout: faRightFromBracket,
  home: faHome,
  map: faLocation,
  truck: faTruckFast,
  settings: faSliders,
  bars: faBars,
  grid: faBorderAll
}
export type NameIcon = keyof typeof icons
