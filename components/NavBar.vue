<template>
  <b-nav tabs justified class="bg-dark">
    <nuxt-link to="/">Breaking Bad</nuxt-link>
    <nuxt-link id="bcs" to="/better_call_saul">Better Call Saul</nuxt-link>
  </b-nav>
</template>

<style scoped>
.nav {
  height: 70px;
  justify-content: space-around;
  align-items: center !important;
}

a {
  margin: auto 17.5px;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.6);
  display: block;
  font-size: 32px;
  color: #fff !important;
  text-decoration: none;
}

a.exact-active-link {
  color: #369457 !important;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.6);
}

@media (max-width: 624px) {
  .nav {
    height: 150px;
  }
}
</style>
