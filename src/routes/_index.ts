import express, { Router } from 'express'
import { indexRouter } from './index.route'
import { postsRouter } from './posts.route'
// import docsRoute from './swagger.route';

const router = express.Router()

interface IRoute {
  path: string
  route: Router
}

const defaultIRoute: IRoute[] = [
  {
    path: '/',
    route: indexRouter,
  },
  {
    path: '/posts',
    route: postsRouter,
  },
]

// const devIRoute: IRoute[] = [
//   // IRoute available only in development mode
//   {
//     path: '/docs',
//     route: docsRoute,
//   },
// ];

defaultIRoute.forEach((route) => {
  router.use(route.path, route.route)
})

/* istanbul ignore next */
// if (process.env.ENVIRONMENT === 'development') {
//   devIRoute.forEach((route) => {
//     router.use(route.path, route.route);
//   });
// }

export default router
