import { createStore } from "vuex";
import axios from 'axios'

export default createStore({
  state: {
    status: '',
    user: {}
  },
  mutations: {
    auth_request(state) {
      state.status = 'loading'
    },
    auth_success(state, user) {
      state.status = 'success'
      state.user = user
    },
    auth_error(state) {
      state.status = 'error'
    },
    logout(state) {
      state.status = ''
    },
  },
  actions: {
    getUserInfo({ commit }) {
      commit('auth_request')
      return new Promise((resolve, reject) => {
        axios({
          url: `${process.env.VUE_APP_API_URL}/${process.env.VUE_APP_AUTH_API_PATH}/userInfo/get`,
          method: 'GET',
          withCredentials: true,
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('AUTH_ID')
          }
        })
        .then(resp => {
          console.log('response in store',resp);
          const user = resp.data[0];
          console.log('user',user);
          commit('auth_success', user)
          resolve(resp)
        })
        .catch(err => {
            commit('auth_error');
            reject(err);
            console.error('ERROR WHILE SETTING AUTH IN STORE')
            localStorage.removeItem('AUTH_ID');
            window.location.href = window.location.origin+'/monitor/onboarding'
        })
      })
    },
    logout({ commit }) {
      return new Promise<void>((resolve) => {
        commit('logout');
        resolve();
      })
    }
  },
  getters: {
    authStatus: state => state.status,
    userInfo: state => state.user,
  }
});
