
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'pcs-sandiego',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/pcs-sandiego"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6815, hash: 'c3b4f722238321106938f52571a98ad5c899aa8406a340450feab05f02c670c9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 7007, hash: '773833b98a79239565b9b6c7368c4ffe398d8809963a8f9fe25214161b15a33f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-UDREXFSY.css': {size: 196, hash: 'fr51TdA0jJc', text: () => import('./assets-chunks/styles-UDREXFSY_css.mjs').then(m => m.default)}
  },
};
