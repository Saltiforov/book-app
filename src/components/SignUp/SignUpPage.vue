<template>
  <div class="VSignUp">
    <div class="VSignUp-wrapper">
      <div class="VSignUp__container">

        <div class="title">Реєстрація</div>

        <form class="VSignUp__container-form">

               <span class="p-float-label form-item">
                          <InputText id="firstname" type="text" v-model="formData.user_name"/>
                           <label for="firstname">Ваш логін *</label>
                        </span>

          <span class="p-float-label form-item">
                          <InputText id="firstname" type="text" v-model="formData.first_name"/>
                           <label for="firstname">Ваше ім’я *</label>
                        </span>


          <span class="p-float-label form-item">
                          <InputText id="lastname" type="text" v-model="formData.last_name"/>
                           <label for="lastname">Ваше прізвище *</label>
                        </span>

          <span class="p-float-label form-item">
                        <InputMask id="basic" v-model="formData.phone" mask="999-99-9999-999"
                                   placeholder="999-99-9999-999"/>
                           <label for="phone">Номер телефону *</label>
                        </span>

          <span class="p-float-label form-item">
                          <InputText id="email" type="text" v-model="formData.email"/>
                           <label for="email">Електронна пошта *</label>
                        </span>

          <span class="p-float-label form-item">
                          <InputText id="email" type="text" v-model="formData.address"/>
                           <label for="email">Адреса *</label>
                        </span>

          <span class="p-float-label">
                          <Password id="password"
                                    v-model="formData.password" :feedback="false"
                                    toggleMask>
                          </Password>
                           <label for="password">Пароль *</label>
                        </span>
        </form>

        <div class="agree-with-terms">
          <div>
            <span><Checkbox inputId="binary" v-model="checked" style="margin-right: 5px" :binary="true"/></span><span>Погоджуюсь з умовами використання</span>
          </div>
          <p class="agree-text">Реєструючись, ви погоджуєтеся на зберігання і використання наданих вами особистих даних
            відповідно до чинного законодавства України про недоторканність особистої інформації.
          </p>
        </div>


        <div class="signup-btn">
          <VButton
              label="Зареєструватись"
              class="p-button-raised"
              @click="submitForm"
          />
        </div>


        <div class="no-account">
          <span>Вже маєте акаунт?  <router-link to="/login">Увійти</router-link> </span>

        </div>

      </div>
    </div>
  </div>
</template>


<script>

import Password from 'primevue/password';
import InputText from 'primevue/inputtext';
import Checkbox from 'primevue/checkbox';
import InputMask from 'primevue/inputmask';
import axios from "axios";


export default {
  name: "VSignUp",
  components: {Password, InputText, Checkbox, InputMask},
  props: {
    signUpImage: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      formData: {
        user_name: '',
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        password: '',
        address: '',
      },
      checked: false

    }
  },
  methods: {
    submitForm() {
      axios.post('/api/signup', this.formData)
          .then((res) => {
            if (res.status === 200) {
              this.$router.push('/')
            }
          })
    },

  },
}
</script>

<style scoped>

.VSignUp {
  background-image: url('./../SignUp/img/bg.png');
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 20;
  position: fixed;
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */

}

.VSignUp-wrapper {
  width: 632px;
  background: rgba(217, 217, 217, 0.91);
  box-shadow: 0px 14px 13px rgba(0, 0, 0, 0.11);
  border-radius: 32px;
  padding: 10px;
  margin: 30px auto;
}

.VSignUp__container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
    font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 33px;
  text-align: center;
    padding: 10px 0px;
}

.VSignUp__container-form {
  padding: 10px 10px 30px;
  margin: 0 auto;
}


:deep(.p-inputtext) {
  width: 469px;
  margin: 0;
  border-radius: 10px;
  padding: 0.7rem 0.5rem;
}

.form-item {
  margin-bottom: 30px;
}

.agree-text {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  margin-top: 15px;
  line-height: 14px;
  color: #757575;
    letter-spacing: 0.5px
}

:deep(.p-float-label label) {
  top: 50%;
}

.agree-with-terms {
  width: 470px;
  margin: 0 auto;
}

:deep(.p-float-label > label) {
    font-size: 14px;
}

:deep(.p-input-icon-right > svg) {
  top: 50%;
}

.signup-btn {
  padding: 20px;
}

:deep(.no-account a:hover) {
  background: transparent;
}

:deep(.p-button) {
  background: #CE4CE4;
  border-radius: 10px;
  border: 1px solid #ffffff;
  padding: 10px 40px;
}


.no-account {
  padding: 10px;
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