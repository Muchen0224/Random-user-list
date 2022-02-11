import axios from "axios";

export function getRandomUserByPage(page) {
  return axios.get(`https://randomuser.me/api/?page=${page}&results=30&seed=randomuser`)
}