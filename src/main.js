import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./styles/index.scss";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faRetweet,
  faRandom,
  faRedoAlt,
  faBars,
  faVolumeUp,
  faShareAlt,
  faHeart,
  faReply,
  faPlay,
  faPause,
  faStepForward,
  faStepBackward,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faRetweet,
  faRandom,
  faRedoAlt,
  faBars,
  faVolumeUp,
  faShareAlt,
  faHeart,
  faReply,
  faPlay,
  faPause,
  faStepForward,
  faStepBackward
);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
