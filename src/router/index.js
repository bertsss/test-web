import Vue from 'vue'
import Router from 'vue-router'
import List from '@/components/List'
import Edit from '@/components/Edit'
import Create from '@/components/Create'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'List',
      component: List
    },
    {
      path: '/edit/:id',
      name: 'Edit',
      component: Edit
    },
    {
      path: '/create',
      name: 'Create',
      component: Create
    }
  ]
})
