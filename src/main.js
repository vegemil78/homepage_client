import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import mixins from './mixins'

loadFonts()

const app = createApp(App)
app.use(router)
app.use(vuetify)
app.mixin(mixins);
app.mount('#app')
