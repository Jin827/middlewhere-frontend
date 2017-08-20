import superagent from 'superagent'
import { API_HOST } from './config'
//need get all users api call


class Api {
  requestSignup = (firstName, lastName, email, password) => (
    superagent
    .post(`${API_HOST}/auth/users`)
    .send({firstName, lastName, email, password})
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
    .set('Authorization', `token ${localStorage.token}`)
  )

  createProjects = (title, deadline, description) => (
    superagent
    .post(`${API_HOST}/projects`)
    .set('Authorization', `token ${localStorage.token}`)
    .send({title, deadline, description})
  )

  editProjects = (id, title, description, deadline, token) => (
    superagent
    .patch(`${API_HOST}/projects/${id}`)
    .set('Authorization', `token ${token}`)
    .send({title,description,deadline, token})

  )

  getProjects = (id) => (
    superagent
    .get(`${API_HOST}/projects/${id}`)
    .set('Authorization', `token ${localStorage.token}`)
  )

  createTasks = (id, title, description, deadline, priority) => (
    superagent
    .post(`${API_HOST}/projects/${id}/tasks`)
    .set('Authorization', `token ${localStorage.token}`)
    .send({id,title, description, deadline, priority})

  )

  editTasks = (projectId, id, title, description, deadline, priority, token) => (
    superagent
    .patch(`${API_HOST}/tasks/${id}`)
    .set('Authorization', `token ${token}`)
    .send({projectId, title, description, deadline, priority, token})
  )

  getTasks = (id) => (
    superagent
    .get(`${API_HOST}/projects/${id}/tasks`)
    .set('Authorization', `token ${localStorage.token}`)

  )

  completedTasks = (id, completed, token) => (
    superagent
    .patch(`${API_HOST}/tasks/${id}/completed`)
    .set('Authorization', `token ${token}`)
    .send({id, completed})
  )

  assignTask = (id, assigneeId) => (
    superagent
    .post(`${API_HOST}/tasks/${id}/assigned`)
    .set('Authorization', `token ${localStorage.token}`)
    .send(assigneeId)
  )

   getMe = (token) => (
    superagent
    .get(`${API_HOST}/auth/me`)
    .set('Authorization', `token ${token}`)
  )

  getAll = (token) => (
   superagent
   .get(`${API_HOST}/auth/all`)
   .set('Authorization', `token ${localStorage.token}`)
 )

}

export default new Api();
