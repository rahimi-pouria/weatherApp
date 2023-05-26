<template>
    <div class="flex addTodoItem g16 r-12">
        <!-- if for show text no data  -->

        <div v-if="addTodo.addTodo.length > 0" class="d-flex">
            <p class="f16-400">
                // no todo
            </p>
        </div>

        <!-- component show todo -->
        <div v-else class="items-todo g6">
            <showTodo />
        </div>
        <!-- form validation add todo   -->
        <div class="d-flex w-100 search-todo g16">
            <form @submit.prevent="addItemTodo"
             class="w-100 addItem">
                <div class="form-group">
                    <input type="text" class="w-100 todoItem"
                    placeholder="add todo"
                    v-model="itemTodo"
                    >
                </div>
            <!-- btn form validation -->
            <button class="btn-add-todo w-30">
             {{ $t('message.addTodo') }}
            </button>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
// import ref and reactive 
    import { ref } from 'vue'
// import components
    import showTodo from './showTodo.vue';
    // import stores

    import { useTodoList } from '@/stores/Todo'



    const addTodo = useTodoList()
    let itemTodo = ref('')
    // function add item

    const addItemTodo = () => {
        if(itemTodo.value === '') {
            alert('پر کردن فیلدها الزامی می باشد')
        }else {
            addTodo.addTodo(itemTodo.value)
            itemTodo.value = ''
        }
    }

</script>

<style scoped>
</style>