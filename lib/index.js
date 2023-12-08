import bsdPdf from './bsd-pdf'

bsdPdf.install = function (Vue) {
  Vue.component(bsdPdf.name, bsdPdf)
}

if (typeof window !== 'undefined' && window.Vue) {
  window.bsdPdf = bsdPdf;
  window.Vue.use(bsdPdf);
}

export default bsdPdf