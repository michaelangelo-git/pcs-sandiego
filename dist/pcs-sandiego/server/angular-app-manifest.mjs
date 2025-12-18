
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
    'index.csr.html': {size: 6817, hash: '1780db63c32af0e0bc22f9e1a8cc531651b1bd9aa9906b4b68e2da46202ba41b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 7009, hash: '99b0cf87f78be4e551907ea646daa0f2b18e80c28ea9a4392edd76064379e1db', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 15409, hash: 'adb8b857f1e5d7b9dcef9a47236c6ecd699e99513c8f37d2a42aaa286d445a8b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-UDREXFSY.css': {size: 196, hash: 'fr51TdA0jJc', text: () => import('./assets-chunks/styles-UDREXFSY_css.mjs').then(m => m.default)}
  },
};
