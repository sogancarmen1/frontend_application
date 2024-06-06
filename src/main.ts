import "./assets/style.css";

import { createApp } from "vue";

import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import router from "./router/index";

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
  faSort,
  faCalendar,
  faXmark,
  faPenNib,
  faPaperclip,
  faEllipsis,
  faCheck,
  faLock,
  faDiagramProject,
  faListUl,
} from "@fortawesome/free-solid-svg-icons";

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
  faSort,
  faCalendar,
  faXmark,
  faPenNib,
  faPaperclip,
  faEllipsis,
  faCheck,
  faLock,
  faDiagramProject,
  faListUl
);

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon).use(router).mount("#app");
