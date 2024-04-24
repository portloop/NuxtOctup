// lottie-player.client.js
// IMPORTANT notice the .client bit
import * as LottiePlayer from "@dotlottie/player-component";
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(LottiePlayer);
});