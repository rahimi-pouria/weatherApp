<template>
    <div class="flex sidbarmenu">
        <a-layout-sider id="sidbarmenu">
            <div class="logo" />
            <div v-for="(item, i) in Menu.userMenu" 
                    :key="i" class="flex showMenu">
                    <router-link :to="item.link">
                        {{ item.name }}
                    </router-link>
            </div>
        </a-layout-sider>
    </div>
</template>

<script setup lang="ts">

import { useMenuUser } from '@/stores/menu';

const Menu = useMenuUser()
</script>

<style scoped>
    .sidbarmenu{
        height: 100vh !important;
    }
    .showMenu {
        padding-left: 28px;
    }
    .showMenu:hover {
        background-color: #120d3c !important;
    }
</style>