<template>
    <div v-for="(item , index) in todo.listTodo" :key="index" 
    class="d-flex flex-column">
        <div class="d-flex show-todo p-4 r-12 shadow">
            <p 
            class="f14-400">
                    {{ item.name }}
            </p>
            <span class="f24-400 delete-item"
                @click="todo.removeTodo(index)">&times;</span>
        </div>
    </div>
</template>
<script setup lang="ts">
    // import stores
    import { useTodoList } from '@/stores/Todo';

    // create variable
    const todo = useTodoList()
</script>


<style scoped>
.show-todo {
  justify-content: space-between;
  background-color: #261a64;
  justify-content: space-between;
  display: flex;
  align-items: center !important;
  padding: 14px 10px;
  gap: 16px;
}
    .delete-item{
        cursor: pointer;
    }
    .delete-item:hover{
        color: red;
    }
a.d-flex.show-todo.p-4.r-12.shadow {
  color: #ffffff !important;
}
 .btn-Edit{
    background-color: #42396e;
    color: #ffffff;
    border: 1px solid #42396e;
 }
 .showName{
    display: none !important;
 }
</style>