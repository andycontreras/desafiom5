import { initHome } from "./pages/home";
import { initInstructions } from "./pages/instructions";
import { initGame } from "./pages/game";
import { initResult } from "./pages/results";

const routes = [
	{
		path: /\/desafiom5\/home/,
		component: initHome,
	},
	{
		path: /\/desafiom5\/instructions/,
		component: initInstructions,
	},
	{
		path: /\/desafiom5\/game/,
		component: initGame,
	},
	{
		path: /\/desafiom5\/result/,
		component: initResult,
	},
];

const BASE_PATH = "/desafiom5/";

function isGitHubPages() {
	return location.host.includes("gitgub.io");
}

export function initRouter(container: Element) {
	function goTo(path) {
		const completePath = isGitHubPages() ? BASE_PATH + path : path;
		history.pushState({}, "", completePath);
		handleRoute(completePath);
	}

	function handleRoute(route) {
		const newRoute = isGitHubPages() ? route.replace(BASE_PATH, "") : route;

		for (const r of routes) {
			if (r.path.test(newRoute)) {
				const el: any = r.component({ goTo: goTo });
				if (container.firstChild) {
					container.firstChild.remove();
				}
				container.appendChild(el);
			}
		}
	}

	if (location.pathname == "/") {
		goTo("/desafiom5/home");
	} else {
		handleRoute(location.pathname);
	}

	window.onpopstate = function () {
		handleRoute(location.pathname);
	};

	if (location.host.includes("andycontreras.github.io")) {
		goTo("/desafiom5/home");
	} else {
		handleRoute(location.pathname);
	}
}
