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

  createProjects = (title, description, deadline, token) => (
    superagent
    .post(`${API_HOST}/projects`)
    .set('Authorization', `token ${token}`)
    .send({title, description, deadline})
  )

  EditProjects = (title, description, deadline, token) => (
    superagent
    .post(`${API_HOST}/projects`)
    .set('Authorization', `token ${token}`)
    .send({title, description, deadline})
  )

  getTasks = (id) => (
    superagent
    .get(`${API_HOST}/projects/${id}/tasks`)

  )

  createTasks = (id, title, description, deadline, token) => (
    superagent
    .post(`${API_HOST}/projects/${id}/tasks`)
    .set('Authorization', `token ${token}`)
    .send({title, description, deadline})
  )

  EditTasks = (id, title, description, deadline, token) => (
    superagent
    .post(`${API_HOST}/projects/${id}/tasks`)
    .set('Authorization', `token ${token}`)
    .send({title, description, deadline})
  )

  // getMe = (token) => (
  //   superagent
  //   .get(`${API_HOST}/auth/me`)
  // )


}

export default new Api();
