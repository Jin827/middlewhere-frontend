import superagent from 'superagent'
import { API_HOST } from './config'

class Api {
  requestSignup = (email, password) => (
    superagent
    .post(`${API_HOST}/auth/users`)
    .send({email, password})
  )

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

  createProjects = (title, deadline, description, token) => (
    superagent
    .post(`${API_HOST}/projects`)
    .set('Authorization', `token ${token}`)
    .send({title, deadline, description})
  )

  editProjects = (id, title, description, token) => (
    superagent
    .patch(`${API_HOST}/projects/${id}`)
    .set('Authorization', `token ${token}`)
    .send({title,description})
  )

  getTasks = (boardId) => (
    superagent
    .get(`${API_HOST}/boards/${boardId}/bookmarks`)

  )

  getMe = (token) => (
    superagent
    .get(`${API_HOST}/auth/me`)
    .set('Authorization', `token ${token}`)
  )


}

export default new Api();
