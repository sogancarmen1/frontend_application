import { ref } from "vue";
import { isNotSelected } from "@/views/tasks";
export const stores = ref([
  {
    id: 1,
    nameIcon: "fa-house",
    textWithIcon: "Accueil",
    title: "Accueil",
    nameRoute: "/",
    isSelectedAccueil: true,
  },
  {
    id: 2,
    nameIcon: "fa-circle-check",
    textWithIcon: "Mes tâches",
    title: "Mes tâches",
    nameRoute: `/tasks${isNotSelected ? "/list" : "/file"}`,
    isSelectedTacks: false,
  },
]);

export const projectsAndEquipe = ref([
  {
    id: 1,
    firstNameIcon: "fa-caret-down",
    secondeFormFirstNameIcon: "fa-caret-right",
    secondNameIcon: "fa-chevron-down",
    title: "Projets",
    thirdNameIcon: "fa-plus",
    fourNameIcon: "fa-list-check",
    isSelect: false,
    showValue: true,
    listOfProject: [
      {
        id: 0,
        name: "",
        disable: false,
      },
      {
        id: 1,
        name: "mon deuxieme projet",
        disable: true,
      },
      {
        id: 2,
        name: "mon troisieme projet",
        disable: true,
      },
      {
        id: 3,
        name: "mon quatirième projet",
        disable: true,
      },
      {
        id: 4,
        name: "mon cinquieme projet",
        disable: true,
      },
      {
        id: 4,
        name: "mon sixieme projet",
        disable: true,
      },
      {
        id: 5,
        name: "mon setpième projet",
        disable: true,
      },
      {
        id: 6,
        name: "mon huitieme projet",
        disable: true,
      },
      {
        id: 7,
        name: "mon quatirième projet",
        disable: true,
      },
      {
        id: 8,
        name: "mon neuvieme projet",
        disable: true,
      },
    ],
  },
  {
    id: 2,
    firstNameIcon: "fa-caret-down",
    secondeFormFirstNameIcon: "fa-caret-right",
    secondNameIcon: "fa-chevron-down",
    title: "Equipe",
    myEspace: "Mon espace de travail",
    thirdNameIcons: "fa-chevron-right",
    fourNameIcon: "fa-user-group",
    showValue: true,
    isSelect: false,
  },
]);

export const footerContent = ref([
  {
    firstNameIcon: "fa-envelope",
    title: "Inviter des collègues",
  },
  {
    firstNameIcon: "fa-circle-info",
    title: "Information",
  },
]);
