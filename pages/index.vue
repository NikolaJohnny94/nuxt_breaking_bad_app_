<template>
  <div id="data_list">
    <b-row id="loading-spinner-row" align-h="center" align-v="center" v-if="data == ''">
      <p>Loading...</p>
      <b-spinner type="grow"></b-spinner>
    </b-row>
    <b-form-input
      id="inputBB"
      class="mx-auto mt-5 border-secondary"
      type="text"
      :placeholder="inputPlaceholder"
      v-model="search"
    ></b-form-input>
    <b-row align-h="center">
      <b-col
        v-if="item.name !== 'Holly White'"
        cols="3"
        v-for="item in itemsPerPage"
        :key="item.char_id"
      >
        <div class="flip-card" :title="item.name">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img :src="item.img" :alt="'Picture of ' + item.name" />
            </div>
            <div class="flip-card-back">
              <h2>{{ item.name }}</h2>
              <p>Nickname: {{ item.nickname }}</p>
              <p>Birthday: {{ item.birthday }}</p>
              <p>Occupation:</p>
              <ul>
                <li v-for="ocupation in item.occupation" :key="ocupation">{{ ocupation }}</li>
              </ul>
              <p>Status: {{ item.status }}</p>
              <p>Portrayed by: {{ item.portrayed }}</p>
              <p>
                Season Appearance:
                <span
                  v-for="(appearance, index) in item.appearance"
                  :key="appearance"
                >
                  {{
                    appearance
                  }}
                  <span
                    v-if="index + 1 < item.appearance.length"
                  >,</span>
                </span>
              </p>
            </div>
          </div>
        </div>
      </b-col>
    </b-row>
    <b-row id="pagination-row" align-h="center">
      <b-pagination
        class="bg-dark"
        v-model="currentPage"
        :total-rows="items"
        :per-page="perPage"
        aria-controls="data_list"
      ></b-pagination>
    </b-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [],
      perPage: 12,
      currentPage: 1,
      search: '',
      inputPlaceholder: "Search through characters",
    }
  },
  computed: {
    items() {
      return this.data.filter((searchedName) =>
        searchedName.name.toLowerCase().match(this.search.toLowerCase())
      ).length
    },
    itemsPerPage() {
      return this.data
        .filter((searchedName) =>
          searchedName.name.toLowerCase().match(this.search.toLowerCase())
        )
        .slice(
          (this.currentPage - 1) * this.perPage,
          this.currentPage * this.perPage
        )
    },
  },
  async fetch() {
    const res = await this.$http.$get('/characters?category=Breaking+Bad').then(res => {
      this.data = res
    })
  },
}
</script>

<style scoped>
h2 {
  margin-top: 6%;
  margin-bottom: 8%;
}

#inputBB {
  width: 35%;
}

input {
  color: rgb(54, 148, 87);
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.8);
  text-align: center;
  border-radius: unset;
  border-top: none;
  border-right: none;
  border-left: none;
  font-weight: bold;
  font-size: 24px;
}

input:focus {
  color: rgb(54, 148, 87);
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.8);
  font-style: italic;
  border-color: #369457 !important;
  box-shadow: inset 0 -1px rgba(13, 62, 16, 0.5),
    inset 0 -2px rgba(31, 96, 50, 0.5);
}

input:focus::placeholder {
  color: transparent;
  text-shadow: none;
}

input::placeholder {
  text-align: center;
  text-shadow: none;
}

img {
  width: 100%;
  height: 100%;
}

ul li {
  text-align: left;
}

#loading-spinner-row {
  margin-top: 10%;
}

#loading-spinner-row .spinner-grow {
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.6);
  background-color: #369457;
}

#loading-spinner-row p {
  font-size: 26px;
  color: #369457;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
  font-weight: bold;
  padding-top: 7px;
  padding-right: 4px;
}

#pagination-row {
  margin-top: 3%;
  margin-bottom: 5%;
}

.col-3 {
  padding-left: 30px !important;
  padding-right: 30px !important;
}

.flip-card {
  margin-top: 60px;
  margin-bottom: 20px;
  background-color: transparent;
  height: 540px;
  perspective: 1000px;
  cursor: pointer;
}

.flip-card p,
h2 {
  padding-left: 6%;
  padding-right: 3%;
  text-align: left;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-back {
  background-image: linear-gradient(
    #093009,
    #0d3e10,
    #1f6032,
    #29773e,
    #369457,
    #032202
  );
  color: white;
  transform: rotateY(180deg);
}

@media (max-width: 992px) {
  #pagination-row {
    margin-bottom: 10%;
  }
  .col-3 {
    margin-left: 30px !important;
    margin-right: 30px !important;
    padding-left: 0px !important;
    padding-right: 0px !important;
  }
  .col-3,
  .flip-card {
    min-width: 35% !important;
  }
  #inputBB {
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.8);
  }
}

@media (min-width: 993px) and (max-width: 1200px) {
  .col-3,
  .flip-card {
    min-width: 30% !important;
  }
  #inputBB {
    width: 45% !important;
  }
}

@media (max-width: 644px) {
  #pagination-row {
    margin-bottom: 15%;
  }
  .col-3,
  .flip-card {
    min-width: 75% !important;
  }
}

@media (max-width: 576px) {
  #inputBB {
    width: 75% !important;
  }
  #inputBB::placeholder {
    font-size: 18px;
  }
}

@media (min-width: 577px) and (max-width: 993px) {
  #inputBB {
    width: 70% !important;
  }
}
@media (max-width: 420px) {
  #inputBB::placeholder {
    font-size: 14px !important;
  }
}
@media (max-width: 320px) {
  #inputBB::placeholder {
    font-size: 10px !important;
  }
}
</style>
