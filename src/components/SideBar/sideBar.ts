import { ref } from 'vue'
import { isNotSelected } from '@/views/tasks'
export const stores = ref([
  {
    nameIcon: 'fa-house',
    textWithIcon: 'Accueil',
    title: 'Accueil',
    nameRoute: '/'
  },
  {
    nameIcon: 'fa-circle-check',
    textWithIcon: 'Mes tâches',
    title: 'Mes tâches',
    nameRoute: `/tasks${isNotSelected ? '/list' : '/file'}`
  }
])

export const projectsAndEquipe = ref([
  {
    id: 1,
    firstNameIcon: 'fa-caret-down',
    secondeFormFirstNameIcon: 'fa-caret-right',
    secondNameIcon: 'fa-chevron-down',
    title: 'Projets',
    thirdNameIcon: 'fa-plus',
    fourNameIcon: 'fa-list-check',
    isSelect: false,
    showValue: true,
    listOfProject: [
      {
        id: 1,
        name: 'mon premier projet'
      },
      {
        id: 2,
        name: 'monprojetdfezfzzz'
      }
    ]
  },
  {
    id: 2,
    firstNameIcon: 'fa-caret-down',
    secondeFormFirstNameIcon: 'fa-caret-right',
    secondNameIcon: 'fa-chevron-down',
    title: 'Equipe',
    myEspace: 'Mon espace de travail',
    thirdNameIcons: 'fa-chevron-right',
    fourNameIcon: 'fa-user-group',
    showValue: true,
    isSelect: false
  }
])

export const footerContent = ref([
  {
    firstNameIcon: 'fa-envelope',
    title: 'Inviter des collègues'
  },
  {
    firstNameIcon: 'fa-circle-info',
    title: 'Information'
  }
])
