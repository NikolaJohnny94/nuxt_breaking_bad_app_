<template>
  <div>
    <b-row align-h="center">
      <h1 v-if="error.statusCode === 404">
        404 - Page not found <fa :icon="['fa', 'flask']" />
      </h1>
      <h1 v-else>An error occurred</h1>
    </b-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: ['error'],
  computed: {
    ...mapGetters({
      img: 'getImg',
    }),
  },
}
</script>

<style scoped>
h1 {
  text-align: center;
  color: #369457;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.7);
}

div {
  background-image: url("https://cdn.pixabay.com/photo/2015/04/28/13/35/america-743574_960_720.jpg");
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.row {
  padding-top: 12%;
}

.fa-flask {
  color: #3b77d1;
}

@media (max-width: 768px) {
  .row {
    padding-top: 40%;
  }
  h1 {
    width: 80%;
  }
}

@media (max-width: 480px) {
  .row {
    padding-top: 60%;
  }
  h1 {
    width: 80%;
  }
}
</style>
