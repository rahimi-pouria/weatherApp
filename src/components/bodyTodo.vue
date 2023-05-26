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
             add todo
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
    .search-todo{
        display: flex;
        flex-direction: column;
        gap: 16px;
    }
    .addItem{
        display: flex;
        flex-direction: column;
        gap: 16px;
    }
    .todoItem[data-v-8ced2bb8] {
        border: 1px solid #251963;
        padding: 6px;
        border-radius: 8px;
        background: #2a1f65;
    }
.todoItem:focus {
    border: 1px solid #e7e7e7;
    padding: 6px;
    border-radius: 8px;
}
.todoItem:focus-visible {
    border: 1px solid #e7e7e7;
    padding: 6px;
    border-radius: 8px;
}
.btn-add-todo.w-30 {
    background: #5698e9;
    border: 1px solid #5698e9;
    padding: 7px;
    border-radius: 5px;
}
.show-todo a {
    color: #fff;
}
.addTodoItem{
    display: flex;
    flex-direction: column;
    gap: 16px;
}
.items-todo{
    display: flex;
    flex-direction: column;
    gap: 16px;
}
</style>