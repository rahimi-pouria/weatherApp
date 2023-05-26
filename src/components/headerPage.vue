<template>
    <div class="w-100">
        <div class="w-100 headerApp" dir="auto">
            <span class="f18-400">
                {{ $t('message.userName') }}: 
                {{ getUserName }}
            </span>
            <a-button @click="showMenu" class="show-menu">{{ $t('message.menu') }}</a-button>
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

</style>