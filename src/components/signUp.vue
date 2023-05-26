<template>
<div class="form">
            <h3 class="f36-400">Sign up</h3>
            <a-form
                    :model="users.formState"
                    name="nest-messages"
                    @finish="users.signUp"
                    @finishFailed="users.onFinishFailed"
    >              
                <a-form-item
                label="Username"
                name="username"
                :rules="[{ required: true, message: 'Please input your username!' }]"
                >
                <a-input v-model:value="users.formState.username">
                    <template #prefix>
                    <UserOutlined class="site-form-item-icon" />
                    </template>
                </a-input>
                </a-form-item>
                <a-form-item
                label="Password"
                name="password"
                :rules="[{ required: true, message: 'Please input your password!' }]"
                >
                    <a-input-password v-model:value="users.formState.password">
                        <template #prefix>
                        <LockOutlined class="site-form-item-icon" />
                        </template>
                    </a-input-password>
                </a-form-item>
                <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
                   <a-button type="primary" html-type="submit">Submit</a-button>
                </a-form-item>
            </a-form>
        </div>
</template>

<script setup lang="ts">

import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
import { useCheckUser } from '../stores/userLogin'

const users = useCheckUser()    

</script>

<style scoped>
    .form {
        background: #ffff;
        width: 50%;
        height: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        border-radius: 16px;
    }
</style>