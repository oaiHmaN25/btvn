
import Navigo from "navigo";
// import { Default } from "../Layouts/Default";
import { Error } from "../Error";

export const  router = (routes, defaultComponent) => {
  const router = new Navigo('/', { hash: true });

  routes.forEach((route) => {
    router.on(route.path, ({ data }) => {
      const component = route.component || defaultComponent;
      document.getElementById('root').innerHTML = component(data);
    });
  });
  router.notFound(() => {
    
    document.getElementById('root').innerHTML = Error();
  });
  router.resolve();
  window.navigate = (path) => {
    router.navigate(path);
  }
  return router;
}

export function startRouting() {
  router.navigate(window.location.hash);
}

export const navigate = (path) => {
  router.navigate(path);
}