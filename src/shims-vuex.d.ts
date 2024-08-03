import { Store } from 'vuex';
import { State } from './store'; // مسیر صحیح فایل store خود را وارد کنید

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
