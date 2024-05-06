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
<<<<<<< HEAD
app.mixin(mixins); 
app.mount('#app')
var appVisitCount = 0;
app.config.globalProperties.$MainVisitCount = appVisitCount
=======
app.mixin(mixins);
app.mount('#app')
>>>>>>> 2112133d1533d5d43073333b53b7d4cfb8c358c0
