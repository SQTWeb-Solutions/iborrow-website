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
    path: '/why',
    component: require('@/views/Why/Template').default,
    children: [
      {
        path: '',
        name: 'why-iborrow',
        component: require('@/views/Why/WhyView').default,
        meta: {
          white: true
        }
      },
      {
        path: 'borrow',
        name: 'why-borrow',
        component: require('@/views/Why/WhyBorrowView').default,
        meta: {
          white: true
        }
      },
      {
        path: 'invest',
        name: 'why-invest',
        component: require('@/views/Why/WhyInvestView').default,
        meta: {
          white: true
        }
      }
    ]
  },
  {
    path: '/blog',
    component: require('@/views/Blog/Template').default,
    children: [
      {
        path: '',
        name: 'blog',
        component: require('@/views/Blog/BlogPage').default,
        meta: {
          white: true
        }
      },
      {
        path: ':slug',
        name: 'blog-details',
        component: require('@/views/Blog/BlogDetails').default,
        meta: {
          white: true
        }
      }
    ]
  },
  {
    path: '/how-it-works',
    component: require('@/views/How/HowView').default,
    name: 'how-it-works',
    meta: {
      white: true
    }
  },
  {
    path: '/policies',
    component: require('@/views/Policies/PoliciesView').default,
    name: 'policies',
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
  {
    path: '*',
    component: require('@/views/Error/NotFoundView').default,
    meta: {
      white: true
    }
  }
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
