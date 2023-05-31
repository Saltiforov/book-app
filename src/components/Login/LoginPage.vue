<template>
    <div class="VLogin">
        <div class="VLogin-wrapper">
            <div class="VLogin__container">
                <div class="VLogin__container-header">
                    <div class="login-img__wrapper">
                        <img
                                src="../Login/img/login.png"
                                alt=""
                                class="login-img"
                        >
                    </div>

                </div>
                <div class="login-title">Вхід до акаунту</div>
                <form class="VLogin__container-form">

                    <span class="p-float-label input-item">
                      <InputText id="username" type="text" v-model="formData.userName"/>
                       <label for="username">Номер телефону або електронна пошта *</label>
                    </span>


                    <span class="p-float-label input-item">
                      <Password id="password" v-model="formData.password" :feedback="false" toggleMask></Password>
                       <label for="password">Пароль *</label>
                    </span>

                </form>
                <div class="login-btn">
                    <VButton
                            label="Увійти"
                            class="p-button-raised login__btn"
                            @click="handleLogin"
                    />
                </div>
                <div class="no-account">
                    <span>Немає акаунту? <router-link to="/signup">Зареєструватись</router-link> </span>

                </div>

            </div>
        </div>
    </div>
</template>

<script>

import Password from 'primevue/password';
import InputText from 'primevue/inputtext';
import axios from "axios";
// import { useUserStore } from '@/stores/User'
// import {useRouter} from "vue-router";


export default {
    name: "LoginPage",
    components: {Password, InputText},
    props: {
        loginImage: {
            type: String,
            required: false
        }
    },
    data() {
        return {
            formData: {
                userName: '',
                password: '',
            },

        }

    },
    methods: {
      handleLogin() {
        axios.post('/api/login', {
          user_name: this.formData.userName,
          password: this.formData.password,
        })
      }
    },
}
</script>

<style scoped>

.VLogin {
    background-image: url('./../Login/img/bg.png');
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    z-index: 20;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover; /* Resize the background image to cover the entire container */

}

.VLogin-wrapper {
    position: relative;
    width: 632px;
    height: 416px;
    background: rgba(217, 217, 217, 0.81);
    border-radius: 32px;
    box-shadow: 0px 14px 13px rgba(0, 0, 0, 0.11);
    padding: 10px;
}

.VLogin__container {

    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
}

.VLogin__container-header {

}

.VLogin__container-form {
    padding: 10px;
    margin: 0 auto;
}



:deep(.no-account a:hover) {
    background: transparent;
}
.input-item{
    margin-bottom: 42px;
}
.input-item:last-child{
    margin-bottom: 20px;
}

:deep(.p-inputtext) {
    width: 469px;
    margin: 0;
    padding: 0.7rem 0.5rem;
}

:deep(.p-float-label label) {
    top: 50%;
    color: black;
}

:deep(.p-input-icon-right > svg) {
    top: 50%;
}

.login-btn {
    width: 120px;
    margin: 0 auto;
}

.login-img__wrapper {
    position: absolute;
    width: 95px;
    height: 95px;
    background: #CE4CE4;
    border-radius: 59px;
    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.1);
    border-radius: 208px;
    margin: 0 auto 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    top: -50px;
    right: 270px;
}

.login-img {
    width: 77px;
    height: 77px;
    border-radius: 59px;
}

.login-title {
    font-family: 'Open Sans';

    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 33px;
    color: #000000;
    padding: 40px 20px 20px 20px;
}

.login__btn{
    padding: 10px 50px;
    background: #CE4CE4;
    border-radius: 10px;
    border: 1px solid white;
}

.no-account {
    margin-top: 20px;
}

.no-account span {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 17px;
    color: #000000;
    margin-right: 10px;
}

.no-account a {
    color: blue;
    text-decoration: none;
}


</style>