import { ref, reactive } from "vue";
import { defineStore } from "pinia";

export interface menuDashboard { 
    name: string,
    link: string,
    icon: string
}
 
export const useMenuUser = defineStore('menuUser', () => {
    const userMenu = ref<menuDashboard[]>([
        {
            name: 'Dashboard',
            link: '/Dashboard'

        },
        {
            name: 'WorkList',
            link: '/WorkList' 
        },
        {
            name: 'Weather',
            link: '/Weather'  
        },
        {
            name: 'setting',
            link: '/setting'  
        }
    ] as menuDashboard[])


    return {
        userMenu
    }
 })