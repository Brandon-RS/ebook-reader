import { defineStore } from 'pinia'
import type { bookType } from '../types'

interface useBookType {
  books: bookType[]
}

export const useBookStore = defineStore('book', {
  state: (): useBookType => ({
    books: [
      {
        id: '1',
        name: 'Clean Code',
        description: 'Excepteur sint deserunt elit proident laboris esse elit. Ipsum dolor irure ipsum incididunt veniam irure. Quis aute dolor nulla fugiat cupidatat cillum tempor cillum aliqua nisi velit anim. Deserunt proident aliqua labore nulla aliqua ex excepteur non veniam proident. Consectetur magna occaecat sit ullamco sit aliqua consectetur ad enim quis consectetur nisi ex eu',
        author: 'Robert C. Martin',
        categories: ['Programming', 'Web', 'HTML'],
        image: 'some url',
        date: 'some date',
        status: false
      },
      {
        id: '2',
        name: 'C++',
        description: 'Esse deserunt nisi veniam aliqua ex fugiat velit incididunt do duis voluptate velit proident reprehenderit',
        author: 'Robert C. Martin',
        categories: ['Programming', 'Web', 'HTML'],
        image: 'some url',
        date: 'some date',
        status: false
      },
      {
        id: '3',
        name: 'SQL Server 2019',
        description: 'Dolore ad duis ipsum incididunt id velit ea aute dolor',
        author: 'Robert C. Martin',
        categories: ['Programming', 'Linux', 'HTML'],
        image: 'some url',
        date: 'some date',
        status: false
      },
      {
        id: '4',
        name: 'Dart from scratch',
        description: 'Quis voluptate commodo ut excepteur do fugiat officia ad consectetur et',
        author: 'Robert C. Martin',
        categories: ['Programming', 'Web', 'HTML'],
        image: 'some url',
        date: 'some date',
        status: false
      },
      {
        id: '5',
        name: 'Linux handbook',
        description: 'In pariatur mollit qui dolore',
        author: 'Robert C. Martin',
        categories: ['Programming', 'Web', 'HTML'],
        image: 'some url',
        date: 'some date',
        status: false
      },
    ]
  }),
  getters: {
    getAllBooks: (state) => {
      return state.books
    },
    getBookByName: (state) => {
      return (name: string) => {
        console.log(`Find by name: ${name}`)
      }
    }
  }
})
