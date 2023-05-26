import { ref } from 'vue'
import { defineStore } from 'pinia'

// interface type todo list 
export interface todoList {
  name: string,
  icon: string,
}

export const useTodoList = defineStore('Todo', () => {

  // create array of object
  const listTodo = ref<todoList[]>([] as todoList[])


  // functions

  // add description todo function

  function addTodo(item: string) {
    listTodo.value.push(
        { name: item, icon: './assets/svg/trash.png' }
    )
  }

  // edit todo function
  function editTodoName(item: string) {
    listTodo.value.push(
      {name: item, icon: './assets/svg/trash.png'}
    )
  }

  // remove todo function

  function removeTodo(index: number) {
    listTodo.value.splice(index, 1)
  }


// update
const updateTodo = (newData: todoList, itemIndex: number) => {
  const findedIndex = listTodo.value.findIndex((index:any) => { return index == itemIndex })
  listTodo.value[findedIndex] = newData
}

// return function and array .....
  return {
           listTodo,
            addTodo,
            removeTodo,
            editTodoName,
            updateTodo
          }
})