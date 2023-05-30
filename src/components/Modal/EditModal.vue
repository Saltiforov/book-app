<template>
    <div className="VOrderModal" v-show="isVisible">
        <div className="VOrderModal-window">
            <div className="VOrderModal-window__title">Edit book data</div>
            <span className="closeBtn">
              <img
                      src=""
                      alt=""
                      @click="this.$emit('close')"
              >
      </span>

            <div className="VOrderModal-window__inputs">

                <div className="form__element">
                    <div class="flex flex-column gap-2">
                           <span class="p-float-label">
                              <InputText class="form__element-item" id="username" v-model="taskData.title"/>
                              <label for="username">Назва</label>
                          </span>
                    </div>
                    <div class="flex flex-column gap-2">
                           <span class="p-float-label">
                              <InputText class="form__element-item" id="username" v-model="taskData.price"/>
                              <label for="username">Цена</label>
                          </span>
                    </div>
                </div>


                <div className="form__element client-info__phone">
                     <span class="p-float-label">
                          <Calendar class="modal-calendar" v-model="taskData.publication_date" inputId="birth_date" />
                          <label for="birth_date">Publication Date</label>
                      </span>
                </div>
                <div className="form__element date-row">
                    <div className="date-input">
                        <div className="flex flex-column gap-2">
                            <VDropdown
                                    v-model="taskData.language_type"
                                    :options="languages"
                                    optionLabel="name"
                                    placeholder="Select a language"
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
                                    placeholder="Select a type"
                                    class="w-full md:w-14rem language-type book-id__item"
                            />
                        </div>
                    </div>
                </div>
                <span className="form__element p-float-label">
                    <VDropdown
                            v-model="taskData.language_type"
                            :options="languages"
                            optionLabel="name"
                            placeholder="Change book id"
                            class="w-full md:w-14rem book-id__item"
                    />
                </span>
                <span className="form__element p-float-label">
                    <VDropdown
                            v-model="taskData.user_id"
                            :options="languageOptions"
                            optionLabel="name"
                            placeholder="Change user id"
                            class="w-full md:w-14rem book-id__item"
                    />
                </span>
                <span className="form__element p-float-label">
                      <VDropdown
                              v-model="taskData.sup_id"
                              :options="languageOptions"
                              optionLabel="name"
                              placeholder="Change sup id"
                              class="w-full md:w-14rem book-id__item"
                      />
                </span>
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

export default {
    name: "EditSystemTaskPopup",
    components: { Calendar, Button },
    props: ['editTaskData', 'isVisible', 'languages', 'bookType', 'userRequests'],
    data() {
        return {
            taskData: {
                title: '',
                price: null,
                publication_date: '',
                language: '',
                format_type: '',
                book_id: '',
                user_id: '',
                sup_id: '',
            },

            optionStatus: ['New', 'Complete', 'In progress'],

        };
    },
    computed: {

    },
    methods: {

        save() {
            const formattedStartDate = moment(this.taskData.start_date).format('YYYY-MM-DD HH:mm:ss');
            const formattedEndDate = moment(this.taskData.end_date).format('YYYY-MM-DD HH:mm:ss');

            axios.put(`/api/system-tasks/${this.taskData.task_id}`, {
                task_id: this.taskData.task_id,
                worker_id: this.taskData.worker.id,
                request_id: this.taskData.request_id,
                task_name: this.taskData.task_name,
                start_date: formattedStartDate,
                end_date: formattedEndDate,
                summary: this.taskData.summary,
                status: this.taskData.status,
                part_id: this.taskData.part_id
            })
            this.$emit('close')
            this.$emit('update-data')
        },
    },
    watch: {
        editTaskData: {
            handler(newVal) {
                this.taskData = {
                    ...newVal,
                    part: [newVal.part]
                };
            },
        },
    }

};
</script>

<style lang="scss" scoped>



.book-id__item{
  width: 100% !important;
}
.modal-calendar{
  width: 100%;
}
:deep(.p-float-label label) {
  color: #758DDD;
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