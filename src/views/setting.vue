<template>
    <a-layout class="setting" id="changeTheme" style="min-height: 100vh">
            <!-- sidbar -->
        <div class="showDataPage">
            <sidbar />
        </div>
        <div class="setting w-100">
            <!-- header -->
            <div class="flex w-100 headerPage" id="headerPage">
                <HeaderPage />
            </div>
            <!-- show data page body -->
            <div class="flex w-100 g8 bodySetting" id="bodyPage">
                <!-- change lang -->
                <a-form @submit.prevent="changes" class="w-50">
                    <a-form-item>
                        <div class="w-100" dir="auto">
                            <span class="f18-400 nameSetting">{{ $t('message.changeName') }}</span>
                        </div>
                        <a-input v-model:value="changeName" placeholder="add name" class="selectOptions w-50" />
                    </a-form-item>
                    <a-form-item>   
                        <div class="w-100" dir="auto">
                            <span class="f18-400 nameSetting">{{ $t('message.changeTheme') }}</span>
                        </div>
                        <a-select ref="select" style="width: 100%" v-model:value="theme" class="selectOptions">
                            <a-select-option v-for="(item, i) in thems" :key="i" :value="item.name">
                                {{ item.name }}
                            </a-select-option>
                        </a-select>
                    </a-form-item>
                    <a-form-item>
                        <div class="w-100" dir="auto">
                            <p class="f18-400 nameSetting w-100" dir="auto
                            ">{{ $t('message.changeLanguagh') }}</p>
                        </div>
                        <select id="lang-select" class="selectOptions w-100" v-model="$i18n.locale">selectlanguage
                            <option value="en">en</option>
                            <option value="fa">fa</option>
                        </select>
                    </a-form-item>
                    <a-form-item>
                        <a-button type="primary" html-type="submit">
                        {{ $t('message.applyChange') }}</a-button>
                    </a-form-item>
                </a-form>
            </div>
        </div>
    </a-layout>
</template>

<script setup lang="ts">

import { ref } from 'vue';
import sidbar from '@/components/sidbar.vue';
import HeaderPage from '@/components/headerPage.vue';


let changeName = ref('')
let theme = ref('')
const thems = ref([
    {
        value: 0,
        name: "darkBlue"
    },
    {
        value: 1,
        name: "lightBlue"
    }
])

const changes = () => {
    if (theme.value === '' && changeName.value === '') {
        alert('پر کردن فیلد زیر الزامی است')
    } else { 
        let sidbarmenu = document.getElementById('sidbarmenu')
    let changeTheme = document.querySelector('#changeTheme')
    let headerPage = document.getElementById('headerPage')
    let bodyPage = document.getElementById('bodyPage')
    localStorage.setItem('name', changeName.value)
    if (theme.value === 'lightBlue') {
        sidbarmenu?.classList.add('ant-layout-sider')
        changeTheme?.classList.add('ant-layout')
        sidbarmenu?.classList.remove('sidbarmenu-dark')
        changeTheme?.classList.remove('ant-layout-dark')
        headerPage?.classList.add('headerPage')
        headerPage?.classList.remove('headerPage-dark')
        bodyPage?.classList.add('bodySetting')
        bodyPage?.classList.remove('bodySetting-dark')
        console.log('lightBlue')
    } if (theme.value === 'darkBlue') {
        sidbarmenu?.classList.remove('ant-layout-sider')
        changeTheme?.classList.remove('ant-layout')
        sidbarmenu?.classList.add('sidbarmenu-dark')
        changeTheme?.classList.add('ant-layout-dark')
        headerPage?.classList.remove('headerPage')
        headerPage?.classList.add('headerPage-dark')
        bodyPage?.classList.remove('bodySetting')
        bodyPage?.classList.add('bodySetting-dark')
    }
    }
}
</script>

<style scoped>
.setting.w-100 {
    display: flex;
    flex-direction: column;
    gap: 17px;
    padding: 15px;
}

.bodySetting {
    background: #1b1350;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.selectOptions {
    border: 1px solid #251963;
    padding: 6px;
    border-radius: 8px;
    background: #2a1f65;
    padding: 10px;
}

.nameSetting {
    color: #fff;
}

.chooseData {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.themeBlue {
    background-color: #1c203d !important;
}

.sidbar {
    background-color: #272c4a !important;
}

.feature {
    background-color: #2a2b4a !important;
}
</style>