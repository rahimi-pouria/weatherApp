<template>
        <a-layout class="worklist" 
        id="changeTheme" 
        style="min-height: 100vh">
        <div class="showDataPage">
            
            <sidbar />
        </div>
        <div class="workTodo w-100">
            <!-- header -->
            <div class="flex w-100 headerPage"
             id="headerPage">
                <HeaderPage />
            </div>
            <!-- show data page body -->
            <div class="flex w-100 g8 bodySetting"
             id="bodyPage">
                <bodyTodo/>
            </div>
        </div>
    </a-layout>
</template>

<script setup lang="ts">
    import sidbar from '@/components/sidbar.vue'
    import HeaderPage from '@/components/headerPage.vue'
    import bodyTodo from '@/components/bodyTodo.vue';
</script>

<style scoped>
    .wordklist{
        padding: 15px;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
    .workTodo {
        padding: 15px;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
    input.ant-input {
    border: 1px solid #251963;
    padding: 6px;
    border-radius: 8px;
    background: #2a1f65;
}
</style>