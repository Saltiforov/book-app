<template>
    <div className="VOrderModal" v-show="isVisible">
        <div className="VOrderModal-window">
            <div className="VOrderModal-window__title">Редагувати дані книги</div>
            <span className="closeBtn">
              <img
                      src=""
                      alt=""
                      @click="this.$emit('close')"
              >
      </span>

            <div className="VOrderModal-window__inputs">

                <div className="form__element" >
                    <div class="flex flex-column gap-2 " style="padding-bottom: 30px">
                           <span class="p-float-label">
                              <InputText class="form__element-item" id="username" v-model="taskData.title"/>
                              <label for="username">Назва</label>
                          </span>
                    </div>
                    <div class="flex flex-column gap-2 form__element-item">
                           <span class="p-float-label">
                              <InputText class="form__element-item" id="username" v-model="taskData.price"/>
                              <label for="username">Ціна</label>
                          </span>
                    </div>
                </div>


                <div className="form__element client-info__phone">
                     <span class="p-float-label">
                          <Calendar class="modal-calendar" v-model="taskData.publication_date" inputId="birth_date" />
                          <label for="birth_date">Дата публікації</label>
                      </span>
                </div>
                <div className="form__element date-row">
                    <div className="date-input">
                        <div className="flex flex-column gap-2">
                            <VDropdown
                                    v-model="taskData.language_type"
                                    :options="languages"
                                    optionLabel="name"
                                    placeholder="Виберіть мову"
                                    class="w-full md:w-14rem language-type"
                            />
                        </div>
                    </div>


                    <div className="date-input">
                        <div className="flex flex-column gap-2">
                            <VDropdown
                                    v-model="taskData.format_type"
                                    :options="bookType"
                                    optionLabel="name"
                                    placeholder="Виберіть тип"
                                    class="w-full md:w-14rem language-type book-id__item"
                            />
                        </div>
                    </div>
                </div>

                <div class="flex flex-column gap-2 mb-4 form__element-item">
                           <span class="p-float-label">
                              <InputText class="form__element-item" id="username" v-model="taskData.available"/>
                              <label for="username">Наявність</label>
                          </span>
                </div>

                <span className="form__element p-float-label">
                    <VDropdown
                            v-model="taskData.user_id"
                            :options="usersList"
                            optionLabel="name"
                            placeholder="Змінити ідентифікатор користувача"
                            class="w-full md:w-14rem book-id__item"
                    />
                </span>
                <span className="form__element p-float-label">
                      <VDropdown
                              v-model="taskData.sup_id"
                              :options="supIdList"
                              optionLabel="name"
                              placeholder="Змінити ідентифікатор постачальника"
                              class="w-full md:w-14rem book-id__item"
                      />
                </span>
            </div>

            <div className="VOrderModal-window__btn">
                <Button
                        label="Скасувати"
                        style="background-color: grey"
                        class="p-button-raised cancel-changes__bnt"
                        @click="this.$emit('close')"
                />
                <Button
                        label="Зберегти"
                        class="p-button-raised save-changes__bnt"
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

export default {
    name: "EditSystemTaskPopup",
    components: { Calendar, Button },
    props: ['editTaskData', 'isVisible', 'languages', 'bookType', 'userRequests', 'usersList','supIdList'],
    data() {
        return {
            taskData: {
                title: '',
                price: null,
                publication_date: '',
                language_type: '',
                format_type: '',
                book_id: '',
                user_id: '',
                sup_id: '',
                available: ''
            },
            optionStatus: ['New', 'Complete', 'In progress'],
        };
    },
    computed: {

    },
    methods: {
        save() {
            const publicationDate = moment(this.taskData.publication_date).format('YYYY-MM-DD HH:mm:ss');

            axios.put(`/api/books/${this.taskData.book_id}`, {
                title: this.taskData.title,
                price: this.taskData.price,
                publication_date: publicationDate,
                language_type: this.taskData.language_type['code'],
                format_type: this.taskData.format_type['code'],
                user_id: this.taskData.user_id['code'],
                sup_id: this.taskData.sup_id['code'],
                book_id: this.taskData.book_id,
            })
            console.log()
            this.$emit('close')
            this.$emit('update-data')
        },
    },
    watch: {
        editTaskData: {
            handler(newVal) {
                this.taskData = {
                    ...newVal,
                    language_type: this.languages.find(lang => lang['code'] === newVal.language_type),
                    format_type: this.bookType.find(book => book['name'] === newVal.format_type),
                    user_id: this.usersList && this.usersList.find(item => item.code === newVal.user_id),
                    sup_id: this.supIdList.find(supp => supp['code'] === newVal.sup_id)
                };
            },
        },
    }

};
</script>

<style lang="scss" scoped>


.save-changes__bnt{
  background: #1E39CE;
  width: 163px;
}
.save-changes__bnt:hover{
  background: #1E39CE !important;
  border-radius: 4px !important;
}

.cancel-changes__bnt{
  width: 163px;
}
.cancel-changes__bnt:hover{
  border-radius: 4px !important;
}

.book-id__item{
  width: 100% !important;
}
.modal-calendar{
  width: 100%;
}
:deep(.p-float-label label) {
  font-size: 15px !important;
}

.text-area {
  resize: none;
}

.form__element-item{
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
      margin-bottom: 50px;
    }
  }
}

:deep(.p-inputtext) {
  border: 1px solid #CED4DA;
  border-radius: 3px;
  box-shadow: 0 8px 46px rgba(0, 0, 0, 0.1);
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