import Navigo from 'navigo';
// import Home from './Pages/Home';
// import About from './Pages/About';
// import Products from './Pages/Products';
// import ProductDetail from './Pages/ProductDetail';
// import Default from './Layouts/Default';

export default function router(routes, defaultComponent) {
  const router = new Navigo('/', { hash: true });

  routes.forEach((route) => {
    router.on(route.path, () => {
      const component = route.component || defaultComponent;
      document.getElementById('#root').innerHTML = component();
    });
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