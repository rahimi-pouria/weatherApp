<template>
<div class="form">
            <h3 class="f36-400">Login</h3>
            <a-form
                    :model="login.formState"
                    name="nest-messages"
                    @submit.prevent="login.login"
                    @finishFailed="login.onFinishFailed"
    >              
                <a-form-item
                label="Username"
                name="username"
                :rules="[{ required: true, message: $t('message.Pleaseinputyourusername') }]"
                >
                <a-input class="userName" v-model:value="login.formState.username">
                    <template #prefix>
                    <UserOutlined class="site-form-item-icon" />
                    </template>
                </a-input>
                </a-form-item>
                <a-form-item
                label="Password"
                name="password"
                :rules="[{ required: true, message: $t('message.Pleaseinputyourpassword') }]"
                >
                    <a-input-password class="Passwoed" v-model:value="login.formState.password">
                        <template #prefix>
                        <LockOutlined class="site-form-item-icon" />
                        </template>
                    </a-input-password>
                </a-form-item>
                <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
                   <a-button type="primary" html-type="submit">{{ $t('message.Submit') }}</a-button>
                </a-form-item>
            </a-form>
        </div>
</template>

<script setup lang="ts">
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
import { useCheckUser } from '../stores/userLogin'

const login = useCheckUser()    

</script>

<style scoped>
    .userName, .Passwoed{
        color: #000 !important;
    }
</style>