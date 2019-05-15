const user = {
  state: {
    token:false,
  },
  mutations: {
    setToken(state,token){
      state.token=token;
    },
  },
  actions: {
    setToken({ commit }, token) {
      commit('setToken', token)
    },
  }

}

export default user
