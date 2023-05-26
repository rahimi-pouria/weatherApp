<template>
    <div class="flex sidbarmenu">
        <a-layout-sider id="sidbarmenu">
            <div class="logo" />
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
        padding-right: 10px;
    }
    .showMenu {
        padding-left: 28px;
        flex-direction: column;
    }
    .showMenu:hover {
        background-color: #120d3c !important;
    }
</style>