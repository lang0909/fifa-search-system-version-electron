import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)



export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    async searchPlayerInfo({},{playerName}){
      const res = await axios.get(`http://ec2-54-180-32-236.ap-northeast-2.compute.amazonaws.com:3000/api/${playerName}`)
      return res.data
    },

    async searchTopRecord({},{spid}){
      const res = await axios.get(`http://ec2-54-180-32-236.ap-northeast-2.compute.amazonaws.com:3000/top_record/${spid}`)
      return res.data
    },

    async searchPositionTop3({},{spidPosition}){
      const res = await axios.get(`http://ec2-54-180-32-236.ap-northeast-2.compute.amazonaws.com:3000/compare/${spidPosition}`)
      return res.data
    },

    async fetchComment({},{spid}){
      const res = await axios.get(`http://ec2-54-180-32-236.ap-northeast-2.compute.amazonaws.com:3000/top_record/${spid}/comment`)
      return res.data
    },

    async findPlayerName({},{spid}){
      const res = await axios.get(`http://ec2-54-180-32-236.ap-northeast-2.compute.amazonaws.com:3000/find/${spid}`)
      return res.data
    },

    async searchUserRecord({}, {userName, matchType}){
      const res = await axios.get(`http://ec2-54-180-32-236.ap-northeast-2.compute.amazonaws.com:3000/record/${userName}/${matchType}`)
      return res.data
    }

  },
  modules: {
  }
})
