import superagent from 'superagent'
import { API_HOST } from './config'

class Api {

  requestLogin = (email, password) => (
    superagent
    .post(`${API_HOST}/auth/sessions`)
    .send({ email, password })
  )

  requestLogout = (token) => (
    superagent
    .delete(`${API_HOST}/auth/sessions`)
    .set('Authorization', `token ${token}`)
  )

  getProjectsList = (page, count) => (
    superagent
    .get(`${API_HOST}/projects`)
  )

  getProjects = (id) => (
    superagent
    .get(`${API_HOST}/projects/${id}`)
  )

  createProjects = (title, description,token) => (
    superagent
    .post(`${API_HOST}/projects`)
    .set('Authorization', `token ${token}`)
    .send({title,description})
  )

  getBookmarks = (boardId) => (
    superagent
    .get(`${API_HOST}/boards/${boardId}/bookmarks`)
  )

  // getMe = (token) => (
  //   superagent
  //   .get(`${API_HOST}/auth/me`)
  // )


}

export default new Api();
