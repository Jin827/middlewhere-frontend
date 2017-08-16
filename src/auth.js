import api from './api';

module.exports = {
  login(email, pass) {
    if (localStorage.token) {
      throw new Error('Already logged in')
    }
    else {
      return api.requestLogin(email, pass)
      .then(res => localStorage.token = res.body.token)
    }
  },

  getToken() {
    return localStorage.token
  },

  getAdminId(id) {
    if (localStorage.adminUserId) {
      
    } else {
      api.getProjects(id)
      .then(res => localStorage.adminUserId = res.body.adminUserId)
    }
  },

  logout() {
    return api.requestLogout(localStorage.token)
    .then(res => delete localStorage.token)
  },

  isLoggedIn() {
    return !!localStorage.token
  },
  
  isAdminUser() {
    return !!localStorage.adminUserId
  }
}
