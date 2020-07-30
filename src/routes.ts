import Home from './components/pages/Home.svelte'
import About from './components/pages/About.svelte'
import NewsList from './components/pages/news/List.svelte'
import NewsDetail from './components/pages/news/Detail.svelte'

export const routes = [
  {
    name: '/',
    component: Home,
  },
  {
    name: '/about',
    component: About,
  },
  {
    name: '/news',
    component: NewsList,
  },
  {
    name: '/news/:id',
    component: NewsDetail,
  },
]