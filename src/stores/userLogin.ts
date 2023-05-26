import { ref,reactive } from 'vue'
import { defineStore } from 'pinia'
import router from '@/router';

// create interface for data user
export interface checkUser { 
  name: string,
  password: string,
  retryPass: string
}

//  interface form
interface FormState {
  username: string;
  password: string;
  checkPass: string
}


export const useCheckUser = defineStore('CheckUser', () => {

  const users = ref<checkUser[]>([
    {
      name: 'pouria',
      password: 'pouria rahimy'
    }
  ] as checkUser[])
  const formState = reactive<FormState>({
    username: '',
    password: '',
    checkPass: '',
  });

  // sign up function 
  const  signUp = () => {
    let userName = formState.username
    let Password = formState.password
    console.log(userName)
    console.log(Password)
    for (let i = 0; i < users.value.length; i++) { 
      if (users.value[i].name !== userName) {
        userName = formState.username
        Password = formState.password
       users.value.push({
         name: userName,
         password: Password,
         retryPass: Password
       })
        alert('register is success')
        router.push('/Login')
        console.log(users.value)
      } else if (users.value[i].name === userName){ 
        // alert('name is already exist')  
      }

    }
  }

  const login = () => { 
    console.log(users.value)
    let userNameLogin = formState.username
    let PasswordLogin = formState.password
    for (let i = 0; i < users.value.length; i++) { 
      if (users.value[i].name === userNameLogin && users.value[i].password === PasswordLogin) {
        router.push('/Dashboard')
        localStorage.setItem("name", userNameLogin);
        localStorage.setItem("password", PasswordLogin)
      } else { 
        alert('please sign in')
      }
     }
  }


  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return {
    signUp,
    formState,
    onFinishFailed,
    login
  }
})
