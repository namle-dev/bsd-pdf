import bsdPdf from './src/index.vue'

bsdPdf.install = function (Vue) {
  Vue.component(bsdPdf.name, bsdPdf)
}

export default bsdPdf
