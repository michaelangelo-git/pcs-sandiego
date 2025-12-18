
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6804, hash: 'c56fb360dda2155e038b2d1f835e20bdd5caaa033fc16e687cd3b0fe5d8350c2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 6996, hash: '01410d7bc7bcac6084293b31dd662548788f427a16499d32bf43e9d1604dee0d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 15396, hash: 'b373155e81a74676e1067b869c617334e791813b3d57872043d99c23d80f469b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-UDREXFSY.css': {size: 196, hash: 'fr51TdA0jJc', text: () => import('./assets-chunks/styles-UDREXFSY_css.mjs').then(m => m.default)}
  },
};
