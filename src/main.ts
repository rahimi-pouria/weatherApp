import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Antd from "ant-design-vue"

import i18n  from '@/locales/i18n'

// add css file
import "ant-design-vue/dist/antd.css";
import "./assets/main.css"
import "./assets/base.css"
import "./assets/Fonts.css"
import "./assets/Size.css"
import "./assets/Reusble.css"





const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(Antd).mount("#app");
