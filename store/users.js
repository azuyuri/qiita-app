export const state = () => ({
  list: []
})

export const mutations = {
  addUser(state, user) {
    state.list.push(user) // push()メソッド＝配列の末尾に 1つ以上の要素追加
  }
}

export const actions = {
  addUser({ commit }, { user }) {
    commit('addUser', user)
  }
}
