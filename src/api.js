import superagent from 'superagent'
import { API_HOST } from './config'

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

  resetStatus = () => (
    superagent
    .patch(`${API_HOST}/auth/resetStatus`)
    .set('Authorization', `token ${localStorage.token}`)
  )

  requestLogout = () => (
    superagent
    .delete(`${API_HOST}/auth/sessions`)
    .set('Authorization', `token ${localStorage.token}`)
  )


  // GET ALL THE PROJECTS FOR THE USER WITH ProgressPct FOR CURRENT USER
  getProjectsList = (page, count) => (
    superagent
    .get(`${API_HOST}/projects`)
    .set('Authorization', `token ${localStorage.token}`)
  )

  // RETRIEVE THE DATA OF A SINNGLE PROJECT
  getProjects = (projectId) => (
    superagent
    .get(`${API_HOST}/projects/${projectId}`)
    .set('Authorization', `token ${localStorage.token}`)
  )

  createProjects = (title, deadline, description) => (
    superagent
    .post(`${API_HOST}/projects`)
    .set('Authorization', `token ${localStorage.token}`)
    .send({title, deadline, description})
  )

  editProjects = (projectId, title, description, deadline) => (
    superagent
    .patch(`${API_HOST}/projects/${projectId}`)
    .set('Authorization', `token ${localStorage.token}`)
    .send({title,description,deadline})

  )

  // Retrieve all the tasks for a single project
  getTasks = (projectId) => (
    superagent
    .get(`${API_HOST}/projects/${projectId}/tasks`)
    .set('Authorization', `token ${localStorage.token}`)
  )

  createTasks = (projectId, title, description, deadline, priority) => (
    superagent
    .post(`${API_HOST}/projects/${projectId}/tasks`)
    .set('Authorization', `token ${localStorage.token}`)
    .send({projectId,title, description, deadline, priority})

  )

  editTasks = (projectId, id, title, description, deadline, priority, token) => (
    superagent
    .patch(`${API_HOST}/tasks/${id}`)
    .set('Authorization', `token ${localStorage.token}`)
    .send({projectId, id, title, description, deadline, priority, token})
  )

  completedTasks = (id, completed, token) => (
    superagent
    .patch(`${API_HOST}/tasks/${id}/completed`)
    .set('Authorization', `token ${localStorage.token}`)
    .send({id, completed})
  )

  updateCompletion = (id, token) => (
    superagent
    .get(`${API_HOST}/tasks/${id}/completed`)
    .set('Authorization', `token ${localStorage.token}`)
  )

  assignTask = (id, assigneeId) => (
    superagent
    .post(`${API_HOST}/tasks/${id}/assigned`)
    .set('Authorization', `token ${localStorage.token}`)
    .send({assigneeId})
  )

  getAssignedUsers = (id) => (
    superagent
    .get(`${API_HOST}/tasks/${id}/assigned`)
    .set('Authorization', `token ${localStorage.token}`)

  )
   getMe = () => (
    superagent
    .get(`${API_HOST}/auth/me`)
    .set('Authorization', `token ${localStorage.token}`)
  )

  getAll = () => (
   superagent
   .get(`${API_HOST}/auth/all`)
   .set('Authorization', `token ${localStorage.token}`)
 )

 getAutoComplete = (queryTerm) => (
   superagent
   .get(`${API_HOST}/auth/autocomplete/?queryTerm=${queryTerm}`)
   .set('Authorization', `token ${localStorage.token}`)
 )

 getUserAvatar = (userId) => (
  superagent
   .get(`${API_HOST}/auth/avatar/${userId}`)
   .set('Authorization', `token ${localStorage.token}`)
 )

}

export default new Api();
