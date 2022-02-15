import axios from "axios";

export function getRandomUserByPage(page,num) {
  return axios.get(`https://randomuser.me/api/?page=${page}&results=${num}&seed=randomuser-list`)
}