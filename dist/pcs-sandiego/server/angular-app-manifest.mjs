
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/pcs-sandiego/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/pcs-sandiego"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6817, hash: 'bca77bbdf9b98af7615af905eb242f09654215a9d5f9c88e83b81362d12c05c2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 7009, hash: 'e8c0e563d788df874152d2e934d852e272469772d956eae86845e3423fb0fdf0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 25858, hash: '259f9c7e718a0f46848268668c8784abc8dff3ee80bb138fe808c1a270fb7ef9', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-KID7PUON.css': {size: 8817, hash: 'IMTLOqfXUOc', text: () => import('./assets-chunks/styles-KID7PUON_css.mjs').then(m => m.default)}
  },
};
