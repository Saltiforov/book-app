import App from './App.vue'
import { createApp } from 'vue'
import router from './router'
import Vuex from './store'
import PrimeVue from 'primevue/config';
import './assets/styles/reset.css';
import './assets/styles/fonts.css'
import '@fortawesome/fontawesome-free/css/all.css';


import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

import InputText from 'primevue/inputtext';
import InputNumber from "primevue/inputnumber";
import Password from 'primevue/password';
import Button from 'primevue/button';
import MultiSelect from 'primevue/multiselect';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Dropdown from 'primevue/dropdown';
import Checkbox from 'primevue/checkbox';
import Sidebar from 'primevue/sidebar';
import Slider from 'primevue/slider';
import Menu from 'primevue/menu';
import VueApexCharts from "vue3-apexcharts";
import FileUpload from 'primevue/fileupload';

const app = createApp(App)
app.use(PrimeVue);
app.use(router)
app.use(Vuex)
app.use(VueApexCharts)


app.component('DataTable', DataTable);
app.component('FileUpload', FileUpload);
app.component('Menu', Menu);
app.component('Slider', Slider);
app.component('VSidebar', Sidebar);
app.component('VCheckbox', Checkbox);
app.component('VDropdown', Dropdown);
app.component('VColumn', Column);
app.component('MultiSelect', MultiSelect);
app.component('InputText', InputText)
app.component('InputNumber', InputNumber)
app.component('VButton', Button)
app.component('VPassword', Password)
app.component('apexchart', VueApexCharts)
app.mount('#app')