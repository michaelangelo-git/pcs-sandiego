
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
    'index.csr.html': {size: 6817, hash: '428e370531981a437851cc0735049094b69aa16f4c31e8e425fbb77952a2bb07', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 7009, hash: 'a69880824d77fea23a7dd44af470e601975d75640294d94a1f9398ac33e39d7a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 28761, hash: 'd51d1e25f269f2334581519d39cada1e666ee109f8827af542f914741b5aba15', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-KID7PUON.css': {size: 8817, hash: 'IMTLOqfXUOc', text: () => import('./assets-chunks/styles-KID7PUON_css.mjs').then(m => m.default)}
  },
};
