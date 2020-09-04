import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//bootstrapVue
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

//customScss
import "./assets/scss/reset/reset.scss";

//fontAwesome
import { library } from "@fortawesome/fontawesome-svg-core";
// import { faInstagram, faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import {
  FontAwesomeIcon,
  FontAwesomeLayers,
  FontAwesomeLayersText
} from "@fortawesome/vue-fontawesome";
// import { faAppleAlt } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebookSquare
} from "@fortawesome/free-brands-svg-icons";

import {
  faPhoneAlt,
  faEnvelope,
  faHome
} from "@fortawesome/free-solid-svg-icons";

Vue.config.productionTip = false;
library.add(faInstagram, faFacebookSquare, faPhoneAlt, faEnvelope, faHome);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("font-awesome-layers", FontAwesomeLayers);
Vue.component("font-awesome-layers-text", FontAwesomeLayersText);
Vue.use(BootstrapVue);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
