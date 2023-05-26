<template>
<a-layout class="setting" id="changeTheme" style="min-height: 100vh">
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
                <div class="flex w-50 g8 chooseData">
                    <span class="f18-400 nameSetting">change name</span>
                    <a-input v-model:value="changeName"
                    placeholder="add name" 
                    class="selectOptions w-50"
                    />
                </div>
                <div class="flex w-50 g8 chooseData">
                    <span class="f18-400 nameSetting">change Theme</span>
                    <a-select
                        ref="select"
                        style="width: 100%"
                        @focus=""
                        @change=""
                        v-model:value="theme"
                        class="selectOptions"
                        >
                        <a-select-option v-for="(item, i) in thems"
                        :key="i" 
                        :value="item.name">
                        {{ item.name }}
                        </a-select-option>
                    </a-select>
                </div>
                <div class="flex w-50 g8 chooseData">
                    <span class="f18-400 nameSetting">change languagh</span>
                    <a-select
                        ref="select"
                        style="width: 100%"
                        @focus=""
                        @change=""
                        class="selectOptions"
                        v-model:value="lang"
                        >
                        <a-select-option v-for="(item, i) in languaghs" :key="i" 
                        :value="item.name">
                            {{ item.name }}
                        </a-select-option>
                    </a-select>

                    <form>
                        <select v-model="$i18n.locale">
                            <option value="">en</option>
                            <option value="">fa</option>
                        </select>
                    </form>
                </div>
                <div class="flex w-50 g8">
                    <a-button @click="changes" 
                    type="primary">
                    apply changes</a-button>
                </div>
            </div>
        </div>
    </a-layout>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import sidbar from '@/components/sidbar.vue'
    import HeaderPage from '@/components/headerPage.vue'
    import createi18n from 'vue-i18n';


    let changeName = ref('')
    let theme = ref('')
let lang = ref('')
    //@ts-ignore
    const $i18n = createi18n()
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
const languaghs = ref([
    {
        value: 0,
        name: 'en'
    },
    {
        value: 1,
        name: 'fa'
    }
])


const changes = () => { 
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
.selectOptions{
    border: 1px solid #251963;
    padding: 6px;
    border-radius: 8px;
    background: #2a1f65;
}
.nameSetting{
    color: #fff;
}
.chooseData{
    display: flex;
    flex-direction: column;
    gap: 15px;
}
.themeBlue{
    background-color: #1c203d !important;
}
.sidbar{
    background-color: #272c4a !important;
}
.feature{
    background-color: #2a2b4a !important;
}
</style>