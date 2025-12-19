
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
    'index.csr.html': {size: 6817, hash: 'ba05131bdd27bd4c4e58afa1180bde9c3b7377f4a1e2d949f1fbf3a68d7404db', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 7009, hash: '827450921128ecf6f6e4f45e734f29886c025915dcef2f4e3ad6beeffd62947c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 26800, hash: '2e8c69da2b068713bf47752de635f9368d12e3936cdfdb522a35dc9cfc2e778b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-KID7PUON.css': {size: 8817, hash: 'IMTLOqfXUOc', text: () => import('./assets-chunks/styles-KID7PUON_css.mjs').then(m => m.default)}
  },
};
