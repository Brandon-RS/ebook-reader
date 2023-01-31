export default {
  name: 'books',
  component: () => import('@/modules/library/layouts/LibraryLayout.vue'),
  children: [
    {
      path: '',
      name: 'books-home',
      component: () => import('@/modules/library/views/BooksView.vue'),
    },
    {
      path: 'categories',
      name: 'books-categories',
      component: () => import('@/modules/library/views/CategoriesView.vue'),
    },
    {
      path: 'authors',
      name: 'books-authors',
      component: () => import('@/modules/library/views/AuthorsView.vue'),
    }
  ],
}
