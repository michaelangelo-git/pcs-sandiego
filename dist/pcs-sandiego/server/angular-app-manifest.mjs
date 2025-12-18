
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
    'index.csr.html': {size: 6817, hash: '4056dcf53513dc8a302192a6281b641472d11277ab27b20b2dcfa8b1e896a6a2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 7009, hash: 'fc2000126e6204e389b7d8176524c279bdc4040111d6e4145a4dd139439e2f32', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 15409, hash: 'fc1a3688511e9b9c829554df313baebe94c1b14ca974462f031c7db443fa7b3d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-UDREXFSY.css': {size: 196, hash: 'fr51TdA0jJc', text: () => import('./assets-chunks/styles-UDREXFSY_css.mjs').then(m => m.default)}
  },
};
