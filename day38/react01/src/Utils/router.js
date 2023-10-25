
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

  return router;
}

export function startRouting() {
  router.navigate(window.location.hash);
}

export function navigateTo(path) {
  router.navigate(path);
}