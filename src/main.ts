import { createApp } from 'vue'
import "./styles/main.css"
import App from './App.vue'

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(fas, fab);

const app = createApp(App);
app
    .component('fa-icon', FontAwesomeIcon)
    .mount('#app')
