
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
    'index.csr.html': {size: 6817, hash: '4bbfa5d54bdbda87ab76a85898ee76843bc7bf4494b91fd16ace25c4f855c599', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 7009, hash: 'e297d7ce3c25783b2e35b6f888c3cfd64fb9b0f827c3b6e1f1802e7f1ee09378', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 20902, hash: '19fa7625f997740bc44e79fdec3755e35197b320dfe01c8ea038e1dee93f0fe4', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-UDREXFSY.css': {size: 196, hash: 'fr51TdA0jJc', text: () => import('./assets-chunks/styles-UDREXFSY_css.mjs').then(m => m.default)}
  },
};
