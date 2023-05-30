<template>
  <div className="VOrderModal" v-show="isVisible">
    <div className="VOrderModal-window">
      <div className="VOrderModal-window__title">Edit order item</div>
      <span className="closeBtn">
              <img
                  src=""
                  alt=""
                  @click="this.$emit('close')"
              >
      </span>

      <div className="VOrderModal-window__inputs">

        <div className="form__element">
          <div class="flex flex-column gap-2 mb-4">
                           <span class="p-float-label">
                              <InputText class="form__element-item" id="username" v-model="taskData.first_name"/>
                              <label for="username">Ім*я</label>
                          </span>
          </div>

          <div class="flex flex-column gap-2 mb-4">
                           <span class="p-float-label">
                              <InputText class="form__element-item" id="username" v-model="taskData.last_name"/>
                              <label for="username">Прізвище</label>
                          </span>
          </div>

          <div class="flex flex-column gap-2 mb-4">
                           <span class="p-float-label">
                              <InputText class="form__element-item" id="username" v-model="taskData.email"/>
                              <label for="username">Імейл</label>
                          </span>
          </div>

          <div class="flex flex-column gap-2">
                           <span class="p-float-label">
                              <InputText mask="999-99-9999-999" class="form__element-item" id="username"
                                         v-model="taskData.phone"/>
                              <label for="username">Телефон</label>
                          </span>
          </div>
        </div>

        <div className="form__element client-info__phone">
                     <span class="p-float-label">
                                       <Textarea class="form__element-item" v-model="taskData.comment" autoResize
                                                 rows="5" cols="116"/>
                      </span>
        </div>
        <div className="form__element client-info__phone">
                     <span class="p-float-label">
                        <Dropdown
                            v-model="taskData.user"
                            editable
                            :options="users"
                            optionLabel="user_name"
                            placeholder="Оберіть назву міста"
                            class="w-full md:w-14rem "
                        />
                      </span>
        </div>


        <div class="delivery-adress">
          <h3 class="delivery-title">Доставка</h3>
          <div class="delivery-wrapper">
            <div class="delivery-item">
              <Dropdown
                  v-model="taskData.delivery_city"
                  editable
                  :options="cities"
                  optionLabel="name"
                  placeholder="Оберіть назву міста"
                  class="w-full md:w-14rem "
              />
            </div>
            <div class="delivery-item">
              <Dropdown
                  v-model="taskData.delivery_res"
                  editable
                  :options="cities"
                  optionLabel="name"
                  placeholder="Оберіть номер відділення"
                  class="w-full md:w-14rem"
              />
            </div>
          </div>
        </div>

      </div>

      <div className="VOrderModal-window__btn">
        <Button
            label="Cancel"
            style="background-color: grey"
            class="p-button-raised cancel-btn"
            @click="this.$emit('close')"
        />
        <Button
            label="Save"
            class="p-button-raised"
            @click="save"
        />
      </div>
    </div>

  </div>
</template>

<script>


import axios from "axios";
import moment from 'moment';
import Calendar from 'primevue/calendar';
import Button from "primevue/button";
import Dropdown from "primevue/dropdown";
import Textarea from "primevue/textarea";

export default {
  name: "OrdersModal",
  components: {Calendar, Button, Dropdown, Textarea},
  props: ['editTaskData', 'isVisible', 'users'],
  data() {
    return {
      taskData: {
        user_id: '',
        comment: '',
        delivery_city: '',
        delivery_res: '',
        user: '',
      },
      cities: [
        {name: 'New York', code: 'NY'},
        {name: 'Rome', code: 'RM'},
        {name: 'London', code: 'LDN'},
        {name: 'Istanbul', code: 'IST'},
        {name: 'Paris', code: 'PRS'}
      ],
      optionStatus: ['New', 'Complete', 'In progress'],

    };
  },
  computed: {},
  methods: {

    save() {
      const formattedStartDate = moment(this.taskData.start_date).format('YYYY-MM-DD HH:mm:ss');
      const formattedEndDate = moment(this.taskData.end_date).format('YYYY-MM-DD HH:mm:ss');

      axios.put(`/api/order-item/${this.taskData.order_id}`, {
        order_id: this.taskData.order_id,
        first_name: this.taskData.first_name,
        last_name: this.taskData.last_name,
        email: this.taskData.email,
        phone: this.taskData.phone,
        delivery_city: this.taskData.delivery_city,
        delivery_res: this.taskData.delivery_res,
        comment: this.taskData.comment,
        user_id: this.taskData.user.user_id,
        books: [this.taskData.books]
      }).then((res) => {
        this.$emit('update-data', res.data)
        this.$emit('close')
      })
    },
  },


  watch: {
    editTaskData: {
      handler(newVal) {
        this.taskData = {
          ...newVal,
          user: this.users && this.users.find(item => item.user_id === newVal.user_id),
        };
      },
    },
  }

};
</script>

<style lang="scss" scoped>

.delivery-adress {
  width: 900px;
  margin: 0 auto;
  padding-bottom: 40px;
}

.delivery-wrapper {
  display: flex;
  justify-content: space-between;
}

.delivery-title {
  padding: 10px;
  font-family: 'Gruppo';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 23px;
  margin-bottom: 20px;
}

.delivery-item {
  width: 430px;
}

.delivery-item div {
  width: 100%;
  border-radius: 10px;
}

.form-item input {
  width: 100%;
  background: #F2F2F2;
}

.comment-order {
  padding: 30px 40px 30px 40px;
}

.comment-title {
  font-family: 'Gruppo';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 23px;
  margin-bottom: 20px;
}

.order-textarea {
  border-radius: 10px;
}

.book-id__item {
  width: 100% !important;
}

.modal-calendar {
  width: 100%;
}

:deep(.p-float-label label) {
  color: #758DDD;
}

.text-area {
  resize: none;
}

.form__element-item {
  width: 100%;
}

.closeBtn {
  position: absolute;
  right: 10px;
  top: 14px;
  cursor: pointer;
}

.VOrderModal {
  position: fixed;
  z-index: 2;
  left: 0;
  top: 0;
  width: 100%;
  overflow: auto;
  backdrop-filter: blur(5px);

  &-window {
    width: 700px;
    //height: 500px;
    background: white;
    box-shadow: 0 8px 46px rgba(0, 0, 0, 0.25);
    border-radius: 19px;
    margin: 55px auto;
    display: flex;
    flex-direction: column;
    text-align: center;

    &__btn {
      width: 400px;
      display: flex;
      justify-content: space-between;
      margin: 0 auto 45px;
    }

    &__title {

      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 33px;
      color: black;
      padding-top: 40px;
      padding-bottom: 30px;
    }

    &__inputs {
      display: flex;
      flex-direction: column;
      align-items: center;
      max-width: 500px;
      margin: 0 auto 25px;
    }

    &__inputs .form__element {
      width: 100%;
      margin-bottom: 30px;
    }
  }
}

:deep(.p-inputtext) {
  border: 1px solid #CED4DA;
  border-radius: 3px;
  box-shadow: 0 8px 46px rgba(0, 0, 0, 0.1);
}

:deep(.p-button) {
  background: #1E39CE;
  border: 1px solid #2196F3;
  border-radius: 5px;
  width: 163px;
}

.close-icon {
  box-sizing: border-box;
  position: fixed;
  display: block;
  transform: scale(var(--ggs, 1));
  top: 24%;
  right: 33%;
  width: 22px;
  height: 22px;
  border: 2px solid;
  border-radius: 40px;
  cursor: pointer;
}

.close-icon::after,
.close-icon::before {
  content: "";
  display: block;
  box-sizing: border-box;
  position: absolute;
  width: 12px;
  height: 2px;
  background: currentColor;
  transform: rotate(45deg);
  border-radius: 5px;
  top: 8px;
  left: 3px
}

.close-icon::after {
  transform: rotate(-45deg)
}

.close-modal {
  cursor: pointer;
  width: 40px;
  margin: 0 auto;
}


.input-field {
  position: relative;
}

.client-info {
  justify-content: space-between;
  display: flex;
  padding: 10px 0px 10px 0px;
  width: 100%;
}

.date-row {
  justify-content: space-between;
  display: flex;
}

.select {
  &-category {
    width: 100%;
  }

  &-worker {
    width: 100%;
  }
}

.category {
  width: 100%;
}

.worker {
  width: 100%;
}

:deep(.p-multiselect-trigger) {
  display: none;
}

:deep(.p-multiselect .p-multiselect-label.p-placeholder ) {
  float: left;
}

.input-code {
  width: 500px;

  &__field {
    width: 100%;
  }
}

.date-input {
  width: 500px;

  &:nth-child(1) {
    margin-right: 20px;
  }

  &__field {
    width: 100%;
  }
}


</style>