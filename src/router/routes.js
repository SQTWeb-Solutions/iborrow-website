/*
* This is a file to save all routs used by app, each routes is group accoridng the routes group and types
 */
export default [
  {
    path: '/',
    name: 'landing-page',
    component: require('@/views/Homepage/HomepageView').default
  },
  {
    path: '/company/about',
    name: 'about-page',
    component: require('@/views/About/AboutView').default,
    meta: {
      white: true
    }
  },
  {
    path: '/contact-us',
    name: 'contact-page',
    component: require('@/views/Contact/ContactView').default,
    meta: {
      white: true
    }
  },
  // TODO: Fixe error page
  { path: '*', component: require('@/views/Home').default }
]

/**
 * @param  {String|Function} middleware
 * @param  {Array} routes
 * @return {Array}
 */
// eslint-disable-next-line
function middleware (middleware, routes) {
  routes.forEach(route =>
    (route.middleware || (route.middleware = [])).unshift(middleware)
  )

  return routes
}
