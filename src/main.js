import App from './App.vue'
import { createApp } from 'vue'
import router from './router'
import Vuex from './store'
import PrimeVue from 'primevue/config';
import './assets/styles/reset.css';


import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

import InputText from 'primevue/inputtext';
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




const app = createApp(App)
app.use(PrimeVue);
app.use(router)
app.use(Vuex)


app.component('DataTable', DataTable);
app.component('Menu', Menu);
app.component('Slider', Slider);
app.component('VSidebar', Sidebar);
app.component('VCheckbox', Checkbox);
app.component('VDropdown', Dropdown);
app.component('VColumn', Column);
app.component('MultiSelect', MultiSelect);
app.component('InputText', InputText)
app.component('VButton', Button)
app.component('VPassword', Password)
app.mount('#app')