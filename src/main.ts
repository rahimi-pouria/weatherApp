import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Antd from "ant-design-vue"


// add css file
import "ant-design-vue/dist/antd.css";
import "./assets/main.css"
import "./assets/base.css"
import "./assets/Fonts.css"
import "./assets/Size.css"
import "./assets/Reusble.css"

import { createI18n } from 'vue-i18n'



const messages = {
    en: {
        message: {
            Dashboard: "Dashboard",
            WorkList: " WorkList",
            Weather: "Weather",
            setting: "setting",
            Login: "Login",
            GoodMorning: "Good Morning",
            temperature: "temperature",
            Day: "Day",
            getName: "get Name",
            addTodo: "add Todo",
            menu: "menu",
            Pleaseinputyourusername: "Please input your username",
            Pleaseinputyourpassword: "Please input your password",
            Submit: "Submit",
            Signup: "Sign up",
            changeName: 'change Name',
            changeTheme: 'change Theme',
            changeLanguagh: 'change Languagh',
            userName: 'user Name',
            applyChange: 'apply change'
        }

    },
    fa: {
        message: {
            Dashboard: "داشبورد",
            WorkList: "لیست کارها",
            Weather: "آب و هوا",
            setting: "تنظیمات",
            Login: "ورود",
            GoodMorning: "صبح بخیر",
            temperature: "دما",
            Day: "روز",
            addTodo: "اضافه کردن کار",
            menu: "منو",
            Pleaseinputyourusername: "لطفا نام کاربری خود را وارد کنید",
            Pleaseinputyourpassword: "لطفا رمز عبور خود را وارد کنید",
            Submit: "ارسال",
            Signup: "ثبت نام",
            changeName: 'تغییر اسم',
            changeTheme: 'تغییر تم',
            changeLanguagh: 'تغییر زبان',
            userName: 'نام کاربری',
            applyChange: 'اعمال تغییرات',
            getName: 'گرفتن نام کاربری'
        }

    },

}
const app = createApp(App)
const i18n = createI18n({
    legacy: false,
    globalInjection: true,


    locale: 'en',
    messages
})
app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(Antd).mount("#app");
