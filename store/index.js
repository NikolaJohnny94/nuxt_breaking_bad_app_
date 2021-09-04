const queryBB = '?category=Breaking+Bad'
const queryBCS = '?category=Better+Call+Saul'

export const state = () => ({
    payload: [],
    bcs_payload: [],
    titles: [
        'Follow Me On Github',
        'Follow Me On Codepen',
        'Let\'s connect on Linkedin',
        'Follow me on Twitter'
    ],
    icons: [
        'github',
        'codepen',
        'linkedin-in',
        'twitter'
    ],
    urls: [
        'https://github.com/NikolaJohnny94',
        'https://codepen.io/NikolaJohnny/pens/public/',
        'https://www.linkedin.com/in/nikola-ivanovi%C4%87-2b6a13179/',
        'https://twitter.com/nikola8794pwd'
    ],
    imgURL: 'https://cdn.pixabay.com/photo/2015/04/28/13/35/america-743574_960_720.jpg'
  })

   export const mutations =  {
        SAVE_DATA(state,payload) {
            state.payload = payload
        },
        SAVE_DATA_BCS(state,bcs_payload) {
          state.bcs_payload = bcs_payload
      },
}
      
    export const  actions =   {
        async fetchData ({ commit }) {
            const payload = await this.$axios.$get(`/characters${queryBB}`)
            commit('SAVE_DATA', payload)
        },

        async fetchDataBCS ({ commit }) { 
          const bcs_payload = await this.$axios.$get(`/characters${queryBCS}`)
          commit('SAVE_DATA_BCS', bcs_payload)
      }
      }

      export const getters = {
        getData: state => state.payload,
        getDataBCS: state => state.bcs_payload,
        getURLS: state => state.urls,
        getIcons: state => state.icons,
        getTitles: state => state.titles,
        getImg: state => state.imgURL
    }




  
  


   