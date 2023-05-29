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
        <div dir="auto" class="w-100 hambur-menu" 
        :class="{'responsiveMenu' : show}">
        <router-link to="/Dashboard">
                        {{ $t('message.Dashboard') }}
                </router-link>
                <router-link to="/WorkList">
                       {{ $t('message.WorkList') }}
                </router-link>
                <router-link to="/Weather">
                        {{ $t('message.Weather') }}
                </router-link>
                <router-link to="/setting">
                        {{ $t('message.setting') }}
                </router-link>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const getUserName = localStorage.getItem('name')

let show = ref(true)

const showMenu = () => {
    show.value = !show.value
 }

</script>

<style scoped>

</style>