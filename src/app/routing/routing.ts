import { Home } from "../../pages/home/home";
import { NotFound } from "../../pages/not-found/not-foind";
import { createBrowserHistory, createMemoryHistory } from "history";
import { createHistoryRouter } from "atomic-router";

const isSsr = false;

const routes = [
  { path: "/", route: [Home.route] },
  { path: "/404", route: NotFound.route },
];

const router = createHistoryRouter({
  routes: routes,
  notFoundRoute: NotFound.route,
});

// 3. Create history
const history = isSsr ? createMemoryHistory() : createBrowserHistory();

// 4. Attach it to router
router.setHistory(history);

export { router };
