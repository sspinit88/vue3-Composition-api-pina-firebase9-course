export const PAGE_ROUTER_DATA = {
	home: {
		main: {
			path: '/',
			name: 'home',
		}
	},
	post: {
		main: {
			path: '/posts',
			name: 'posts',
		},
		children: {
			detail: {
				path: '/posts/:id',
				name: 'postDetail',
			}
		}
	},
	modals: {
		main: {
			path: '/modals',
			name: 'modals',
		}
	}
};
