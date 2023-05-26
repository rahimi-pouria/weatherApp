<template>
    <div class="w-100">
        <div class="w-100 headerApp">
            <span class="f18-400">
                userName: 
                {{ getUserName }}
            </span>
            <a-button @click="showMenu" class="show-menu">menu</a-button>
        </div>
        <!-- show menu in mobile -->
        <div class="w-100 hambur-menu" 
        :class="{'responsiveMenu' : show}">
                <div v-for="(item, i) in reponMenu.userMenu" :key="i">
                    <router-link :to="item.link">{{ item.name }}</router-link>
                </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useMenuUser } from '@/stores/menu'
const getUserName = localStorage.getItem('name')

const reponMenu = useMenuUser()

let show = ref(true)

const showMenu = () => {
    show.value = !show.value
 }

</script>

<style scoped>

.hambur-menu{
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 10px 0;
}

.hambur-menu a{
    color: #fff !important;
}
button.ant-btn.show-menu {
    background: #302668 !important;
    color: #fff;
}
/* responsive */

@media screen and (max-width: 600px){
    .responsiveMenu{
        display: none;
    }
}
@media screen and (min-width: 1024px){
    .responsiveMenu{
        display: none;
    }
    button.ant-btn.show-menu {
        display: none;
    }
}
</style>