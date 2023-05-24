import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["bolus.jpg","camino.jpg","favicon.png","fenit.jpg","greenway.png","hiking.jpg","images/bolus.jpg","images/fenit.jpg","images/layers-2x.png","images/layers.png","images/map.jpg","images/marker-icon-2x.png","images/marker-icon.png","images/marker-shadow.png","kerry.jpg","leaflet.css","walking.jpg"]),
	mimeTypes: {".jpg":"image/jpeg",".png":"image/png",".css":"text/css"},
	_: {
		client: {"start":"_app/immutable/entry/start.9957c408.js","app":"_app/immutable/entry/app.351d3f98.js","imports":["_app/immutable/entry/start.9957c408.js","_app/immutable/chunks/index.ffa5e757.js","_app/immutable/chunks/singletons.fe56e726.js","_app/immutable/chunks/index.c29af96a.js","_app/immutable/entry/app.351d3f98.js","_app/immutable/chunks/index.ffa5e757.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js'),
			() => import('../server/nodes/2.js'),
			() => import('../server/nodes/3.js'),
			() => import('../server/nodes/4.js'),
			() => import('../server/nodes/5.js'),
			() => import('../server/nodes/6.js'),
			() => import('../server/nodes/7.js'),
			() => import('../server/nodes/8.js'),
			() => import('../server/nodes/9.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/charts",
				pattern: /^\/charts\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/dashboard",
				pattern: /^\/dashboard\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/logout",
				pattern: /^\/logout\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/map",
				pattern: /^\/map\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/signup",
				pattern: /^\/signup\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/update",
				pattern: /^\/update\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
