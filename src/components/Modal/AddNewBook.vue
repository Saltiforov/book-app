<template>
  <div class="VOrderModal" v-show="isVisible">
    <div class="VOrderModal-window">
      <div class="VOrderModal-window__title">ДОДАТИ НОВУ КНИГУ</div>
      <span class="closeBtn">
              <img
                  src=""
                  alt=""
                  @click="this.$emit('clickCloseBtn',)"
              >
      </span>

      <div class="VOrderModal-window__inputs">

        <div class="inputs-info__block">
          <div class="date-input">
            <div class="flex flex-column gap-2">
                           <span class="p-float-label">
                              <InputText id="username" v-model="title"/>
                              <label for="username">Назва книги</label>
                          </span>
            </div>
          </div>
          <div class="date-input">
            <div class="flex flex-column gap-2">
                           <span class="p-float-label">
                              <InputNumber id="number-input" v-model="price"/>
                              <label for="number-input">Ціна</label>
                          </span>
            </div>
          </div>

        </div>

        <div class="client-info ">
          <div class="client-info__name">
                       <span class="p-float-label">
                          <Calendar class="modal-calendar" v-model="publication_date" inputId="birth_date"/>
                          <label for="birth_date">Дата публікації</label>
                      </span>
          </div>
        </div>

        <div class="modal-multiselects">
          <div class="modal-multiselects__item">
            <VDropdown
                v-model="format_type"
                :options="formatTypeOptions"
                optionLabel="name"
                placeholder="Виберіть формат книги"
                class="w-full md:w-14rem format-type"
            />
          </div>
          <div class="modal-multiselects__item">
            <VDropdown
                v-model="language_type"
                :options="languageOptions"
                optionLabel="name"
                placeholder="Виберіть мову книги"
                class="w-full md:w-14rem language-type"
            />
          </div>
          <div class="modal-author__item">
            <div class="flex flex-column gap-2">
                           <span class="p-float-label">
                              <InputText id="author" v-model="author"/>
                              <label for="username">Ім'я автора</label>
                          </span>
            </div>
          </div>
        </div>


        <div class="modal-dropdowns">
          <div class="modal-dropdowns__item">
            <VDropdown
                v-model="publisher_id"
                :options="publisherOptions"
                optionLabel="name"
                placeholder="Виберіть видавця"
                class="w-full md:w-14rem"
            />
          </div>
          <div class="modal-dropdowns__item">
            <VDropdown
                v-model="sup_id"
                :options="supOptions"
                optionLabel="name"
                placeholder="Виберіть постачальника"
                class="w-full md:w-14rem"
            />
          </div>
        </div>

        <div class="upload-image__block">
          <VUploadImage
              @change="changeUploadImage"
          />
        </div>


      </div>
      <div class="VOrderModal-window__btn">
        <VButton
            label="Скасувати"
            style="background-color: grey"
            class="p-button-raised cancel-newbook__btn"
            @click=" this.$emit('clickCancelBtn',)"
        />
        <VButton
            label="Створити нову книгу"
            class="p-button-raised create-newbook__btn"
            @click="addNewBook"
        />
      </div>
    </div>

  </div>
</template>

<script>

import axios from "axios";
import VUploadImage from "@/components/VUploadImage/VUploadImage.vue";
import Calendar from 'primevue/calendar';
import APIService from "@/services/api";

export default {
  name: "AddNewBookPopup",
  components: {Calendar, VUploadImage},
  props: ['isVisible', 'workers', 'partList', 'userRequests'],
  data() {
    return {
      title: '',
      price: null,
      publication_date: null,
      format_type: null,
      language_type: null,
      publisher_id: null,
      author: null,
      sup_id: null,
      formatTypeOptions: [
        {name: 'Паперова', code: 'papery'},
        {name: 'Електронна', code: 'electronic'},
      ],
      languageOptions: null,
      publisherOptions: null,
      supOptions: null,
      apiService: null,
      uploadImages: null,
    };
  },
  methods: {
    formatDate(date) {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    },
    changeUploadImage(data) {
      console.log('data', data)
      this.uploadImages = data;
    },
    addNewBook() {
      const formData = new FormData();
      formData.append('title', this.title);
      formData.append('price', this.price);
      formData.append('publication_date', this.formatDate(this.publication_date));
      formData.append('format_type', this.format_type.name);
      formData.append('language_type', JSON.stringify(this.language_type));
      formData.append('user_id', this.publisher_id.code);
      formData.append('sup_id', this.sup_id.code);
      formData.append('author', this.author);
      formData.append('image', this.uploadImages);

      axios.post('/api/new-book', formData)
          .then(() => {
            console.log('Book created successfully');
            this.$emit('addNewBook');
          })
          .catch((error) => {
            console.error('Error:', error);
            // Handle error
          });
    }



  },
  computed: {},
  async mounted() {
    this.apiService = new APIService()
    this.publisherOptions = await this.apiService.getAllUsers()
    this.supOptions = await this.apiService.getSuppliers()
    this.languageOptions = await this.apiService.getLanguages()
    this.supOptions = await this.supOptions.map(item => {
      return {
        name: item.supplier_name,
        code: item.sup_id
      }
    })
    this.publisherOptions = await this.publisherOptions.map(item => {
      return {
        name: item.user_name,
        code: item.user_id
      }
    })
  },
};
</script>

<style lang="scss" scoped>

.VOrderModal-window {
  width: 1000px !important;
}
.upload-image__block {
  margin-top: 20px;
  margin-bottom: 5px;
}

:deep(.p-float-label label) {
  color: grey;
}

.inputs-info__block {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.modal-author__item {
  width: 100%;
  padding: 15px 0px;
}

#author {
  width: 100%;
}

.modal-multiselects {
  width: 100%;
  margin-bottom: 20px;

  &__item {
    min-width: 100%;
    margin-bottom: 15px;
  }
}

.modal-dropdowns {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.language-type {
  width: 100% !important;
}

.format-type {
  width: 100% !important;
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
  height: 100vh;

  &-window {
    width: 700px;
    //height: 500px;
    background: white;
    box-shadow: 0 8px 46px rgba(0, 0, 0, 0.25);
    border-radius: 19px;
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 20px;

    &__btn {
      width: 425px;
      display: flex;
      justify-content: space-between;
      margin: 0 auto 5px;
    }

    &__title {

      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 33px;
      color: black;
      padding-bottom: 10px;
    }

    &__inputs {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 500px;
      margin: 0px auto 20px;
    }
  }
}

:deep(.p-inputtext) {
  border: 1px solid #CED4DA;
  border-radius: 3px;
  box-shadow: 0 8px 46px rgba(0, 0, 0, 0.1);
}


.cancel-newbook__btn:hover {
  border-radius: 5px !important;
  background-color: grey;
  border-radius: 3px !important;
}

.create-newbook__btn {
  background: #1E39CE;
  border: 1px solid #2196F3;
  border-radius: 5px;
}

.create-newbook__btn:hover {
  background: #1E39CE !important;
  border: 1px solid #2196F3 !important;
  border-radius: 5px !important;
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
  padding: 25px 0px 25px 0px;
  width: 100%;
}

.modal-calendar {
  width: 100%;
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


</style>