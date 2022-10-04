import { defineStore } from 'pinia';

export interface Auth {
  username: string;
  email: string;
  role: string;
}

export const useCounterStore = defineStore('auth', {
  state: (): Auth => ({ username: 'duy.do', email: 'duy.do@digiex.asia', role: 'admin' }),
  getters: {
    doubleCount: state => state
  },
  actions: {
    setInfo(data: Auth) {
      this.username = data.username;
      this.email = data.email;
      this.role = data.role;
    }
  }
});
