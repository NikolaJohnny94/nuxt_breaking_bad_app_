<template>
  <div id="data_list">
    <b-row
      id="loading-spinner-row"
      align-h="center"
      align-v="center"
      v-if="data == ''"
    >
      <p>Loading...</p>
      <b-spinner type="grow"></b-spinner>
    </b-row>
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
                <li
                  v-for="ocupation in item.occupation"
                  :key="ocupation"
                  style=""
                >
                  {{ ocupation }}
                </li>
              </ul>
              <p>Status: {{ item.status }}</p>
              <p>Portrayed by: {{ item.portrayed }}</p>
              <p v-if="item.appearance.length !== 0">
                Season Appearance:
                <span
                  v-for="(appearance, index) in item.appearance"
                  :key="appearance"
                  >{{ appearance
                  }}<span v-if="index + 1 < item.appearance.length"
                    >,
                  </span></span
                >
              </p>
            </div>
          </div>
        </div>
      </b-col>
    </b-row>
    <b-row id="pagination-row-bcs" align-h="center">
      <b-pagination
        v-model="currentPage"
        :total-rows="items"
        :per-page="perPage"
        aria-controls="data_list"
      ></b-pagination>
    </b-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      perPage: 12,
      currentPage: 1,
    };
  },
  head: {
    title: "Better Call Saul",
    titleTemplate: "%s ⚖️ 👔 💼",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Better Call Saul web app made with Nuxt.js and Bootstrap-Vue that consumes the data from the Breaking Bad Api ⚙️🌐🔒🔗",
      },
      {
        hid: "og:image",
        property: "og:image",
        content:
          "https://cdn.pixabay.com/photo/2017/06/09/22/56/lady-justice-2388500_960_720.jpg",
      },
      { name: "format-detection", content: "telephone=no" },
    ],
  },
  computed: {
    ...mapGetters({
      data: 'getDataBCS',
    }),
    items() {
      return this.data.length;
    },
    itemsPerPage() {
      return this.data.slice(
        (this.currentPage - 1) * this.perPage,
        this.currentPage * this.perPage
      );
    },
  },
  mounted() {
    this.$store.dispatch('fetchDataBCS')
  },
}
</script>

<style scoped>
h2 {
  margin-top: 6%;
  margin-bottom: 8%;
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
  background-color: #f7e702;
}

#loading-spinner-row p {
  font-size: 26px;
  color: #f7e702;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.6);
  font-weight: bold;
  padding-top: 7px;
  padding-right: 4px;
}

#pagination-row-bcs {
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
  background-image: linear-gradient(#505e66, #ffe882, #ff473d, #867d7d);
  color: #fff;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.8);
  font-weight: bold;
  transform: rotateY(180deg);
}

@media (max-width: 992px) {
  #pagination-row-bcs {
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
}

@media (min-width: 993px) and (max-width: 1200px) {
  .col-3,
  .flip-card {
    min-width: 30% !important;
  }
}

@media (max-width: 644px) {
  #pagination-row-bcs {
    margin-bottom: 15%;
  }
  .col-3,
  .flip-card {
    min-width: 75% !important;
  }
}
</style>