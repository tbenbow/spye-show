import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import TitleBar from '@/components/TitleBar.vue'

import InputButton from '@/components/Inputs/InputButton.vue'
import InputColor from '@/components/Inputs/InputColor.vue'
import InputFile from '@/components/Inputs/InputFile.vue'
import InputNumber from '@/components/Inputs/InputNumber.vue'
import InputSelect from '@/components/Inputs/InputSelect.vue'
import InputText from '@/components/Inputs/InputText.vue'
import InputTextarea from '@/components/Inputs/InputTextarea.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronLeft, faCog } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faChevronLeft)
library.add(faCog)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('TitleBar', TitleBar)
Vue.component('InputButton', InputButton)
Vue.component('InputColor', InputColor)
Vue.component('InputFile', InputFile)
Vue.component('InputNumber', InputNumber)
Vue.component('InputSelect', InputSelect)
Vue.component('InputText', InputText)
Vue.component('InputTextarea', InputTextarea)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
