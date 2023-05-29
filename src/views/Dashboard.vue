<template>
    <a-layout class="sidbarMenu" id="changeTheme" style="min-height: 100vh">
        <div class="showDataPage">
            <sidbar />
        </div>
        <div class="dashboard w-100">
            <!-- header -->
            <div class="flex w-100 headerPage" id="headerPage">
                <HeaderPage />
            </div>
            <!-- show data page body -->
            <div class="flex w-100 g8 bodySetting" id="bodyPage">
                <span class="f18-400">{{ getHour }}</span>
                <p class="f16-700">
                    {{ $t('message.GoodMorning') }}: {{ getUserName }}
                </p>
            </div>
        </div>
    </a-layout>
</template>



<script setup lang="ts">
import sidbar from '@/components/sidbar.vue'
import HeaderPage from '@/components/headerPage.vue'

const times = new Date();
const getHour = times.getHours() + ':' + times.getMinutes()

const getUserName = localStorage.getItem('name')


</script>






<style scoped>
    .dashboard {
    background: #261a65 !important;
    }
    .logo{
        padding: 30px;
    }
    .showMenu{
        display: flex;
        flex-direction: column;
        gap: 10px;
        justify-content: center;
    }
    .sidbarMenu{
        background-color: #f7f7f7 !important;
    }
    .showMenu {
    padding: 16px;
}
.showDataPage{
    display: flex; 
    flex-direction: column !important;
}
</style>