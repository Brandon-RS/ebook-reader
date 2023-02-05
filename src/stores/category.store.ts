import { defineStore } from 'pinia'
import type { categoryType } from '../types'

interface useCategoryType {
  categories: categoryType[]
}

export const useCategoryStore = defineStore('category', {
  state: (): useCategoryType => ({
    categories: [
      {
        id: '1',
        name: 'Programming',
        description: 'Esse laboris quis pariatur est id do minim elit nulla. Nulla officia quis ut occaecat minim sunt voluptate irure sunt Lorem. Enim eu magna commodo officia aliquip. Anim nostrud officia excepteur et esse amet ea sint ex cupidatat aliqua aliqua irure irure. Adipisicing velit excepteur nostrud consectetur sunt elit. Occaecat pariatur quis nisi commodo aliquip consequat commodo et exercitation adipisicing officia reprehenderit. Id aute aliquip commodo elit deserunt elit voluptate',
        status: false
      },
      {
        id: '2',
        name: 'Web Development',
        description: 'Esse deserunt nisi veniam aliqua ex fugiat velit incididunt do duis voluptate velit proident reprehenderit',
        status: false
      },
      {
        id: '3',
        name: 'Linux',
        description: 'Dolore ad duis ipsum incididunt id velit ea aute dolor',
        status: false
      },
      {
        id: '4',
        name: 'Cyber Security',
        description: 'Quis voluptate commodo ut excepteur do fugiat officia ad consectetur et',
        status: false
      }
    ]
  }),
  getters: {
    getAllCategories: (state) => {
      return state.categories
    }
  }
})
