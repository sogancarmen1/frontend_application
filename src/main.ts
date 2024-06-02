import './assets/style.css'

import { createApp } from 'vue'

import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import router from './router/index'

import {
  faUserSecret,
  faUser,
  faBars,
  faCirclePlus,
  faCircleChevronDown,
  faCaretDown,
  faMagnifyingGlass,
  faCircleCheck,
  faHouse,
  faUserGroup,
  faListCheck,
  faEnvelope,
  faCircleInfo,
  faChevronDown,
  faPlus,
  faChevronRight,
  faCaretRight,
  faCircleUser,
  faFilter,
  faSort
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faUserSecret,
  faUser,
  faBars,
  faCirclePlus,
  faCircleChevronDown,
  faCaretDown,
  faMagnifyingGlass,
  faCircleCheck,
  faHouse,
  faUserGroup,
  faListCheck,
  faEnvelope,
  faCircleInfo,
  faChevronDown,
  faPlus,
  faChevronRight,
  faCaretRight,
  faCircleUser,
  faFilter,
  faSort
)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')