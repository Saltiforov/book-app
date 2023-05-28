<template>
    <div class="VOrderModal" v-show="isVisible">
        <div class="VOrderModal-window">
            <div class="VOrderModal-window__title">ADD SYSTEM TASK {{ this.title }}</div>
            <span class="closeBtn">
              <img
                      src=""
                      alt=""
                      @click="this.$emit('clickCloseBtn',)"
              >

      </span>

            <div class="VOrderModal-window__inputs">
                <div class="date-row">
                    <div class="date-input">
                        <div class="flex flex-column gap-2">
                            <label for="username" style="color: grey">Start Date</label>
                            <InputText
                                    class="date-input__field"
                                    name="date"
                                    placeholder="Name"
                                    type="date"
                                    v-model="taskData.start_date"
                            />
                        </div>
                    </div>


                    <div class="date-input">
                        <div class="flex flex-column gap-2">
                            <label for="username" style="color: grey">End Date</label>
                            <InputText
                                    class="date-input__field"
                                    name="date"
                                    placeholder="Name"
                                    type="date"
                                    v-model="taskData.end_date"
                            />
                        </div>
                    </div>
                </div>




                <div class="client-info ">
                    <div class="client-info__name">
                        <span class="p-float-label ">
                            <InputText
                                     class="input-field"
                                     name="name"
                                     type="text"
                                     v-model="taskData.task_name"
                             />
                           <label  for="name">Task Name</label>
                      </span>
                    </div>
                  <div class=" client-info__phone">
                       <span class="p-float-label ">
                       <MultiSelect
                               class="category"
                               optionLabel="name"
                               :selectionLimit="1"
                               :options="optionStatus"
                               v-model="status"
                       />
                        <label for="name">Task Status</label>
                    </span>
                  </div>
                </div>



                <span class="p-float-label  select-worker">
                   <MultiSelect
                           class="worker"
                           optionLabel="name"
                           :selectionLimit="1"
                           :options="workers"
                           v-model="worker"
                   />
                    <label for="name">Select worker</label>
                </span>


                <span class="p-float-label  select-worker">
                    <MultiSelect
                            class="worker"
                            optionLabel="name"
                            :selectionLimit="1"
                            :options="partList"
                            v-model="part"
                    />
                    <label for="name">Select parts</label>
                </span>

                <span class="p-float-label  select-worker">
                     <MultiSelect
                             class="category"
                             optionLabel="name"
                             :selectionLimit="1"
                             :options="userRequests"
                             v-model="user_request"
                     />
                    <label for="name">User request</label>
                </span>

                
                <div class="text-area">
                    <VTextarea autoResize rows="4" cols="40" v-model="taskData.textAreaValue"></VTextarea>
                </div>


            </div>
            <div class="VOrderModal-window__btn">
                <VButton
                        label="Create new order"
                        class="p-button-raised"
                        @click="addNewBook"
                />
                <VButton
                        label="Cancel"
                        style="background-color: grey"
                        class="p-button-raised cancel-btn"
                        @click=" this.$emit('clickCancelBtn',)"
                />
            </div>
        </div>

    </div>
</template>

<script>

import axios from "axios";

export default {
    name: "AddNewBookPopup",
    components: {},
    props: ['isVisible', 'workers', 'partList', 'userRequests'],
    data() {
        return {
            taskData: {
                task_id: '',
                worker_id: '',
                request_id: '',
                task_name: '',
                start_date: '',
                end_date: '',
                summary: '',
                textAreaValue: '',
            },
            worker: '',
            status: '',
            user_request: '',
            part: '',
            optionStatus: [
                {name: 'New', code: 1},
                {name: 'Complete', code: 2},
                {name: 'In progress', code: 3},
            ],

        };
    },
    methods: {
      addNewBook() {
        const book = {
          title: 'asdasd',
          price: 'asdasd',
          publicationDate: 'asdasd',
          formatType: 'asdasd',
          languageType: 'asdasd',
          publisherId: '374598shdfkj-asda8asd-asdasdasd',
          supplierId: '374598shdfkj-asda8asd-asdasdasd3'
        }
        axios.post('/api/new-book', book)
        axios.post('/api/login', book)
      }
    },
    mounted() {},
};
</script>

<style lang="scss" scoped>


:deep(.p-float-label label){
  color: grey;
}

.text-area {
  resize: none;
}

.closeBtn {
  position: absolute;
  left: 650px;
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
    margin: 200px auto;
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
      margin-bottom: 25px;
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
    width: 500px;
    justify-content: space-between;
    display: flex;
    padding: 25px 0px 25px 0px;

  &__name {
    width: 200px;
  }

  &__phone {
    width: 200px;
  }
}

.date-row {
  width: 500px;
  justify-content: space-between;
  display: flex;

}

.date-row > div {
  width: 230px;
}

.select {
  &-category {
    width: 500px;
    margin-bottom: 25px;
  }

  &-worker {
    width: 500px;
    margin-bottom: 25px;
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

  &__field {
    width: 100%;
  }
}


</style>