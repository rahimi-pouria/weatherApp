// @ts-ignore
import { createi18 } from 'vue-i18n'
// @ts-ignore
import en from '@/locales/en.json';
// @ts-ignore
import fa from '@/locales/fa.json';



// @ts-ignore
const i18n = createi18n => ({
    legacy: false,
    globalinjection: true,
    locale: en, 
    messages: {
        en, 
        fa
    }
    
})


export default i18n