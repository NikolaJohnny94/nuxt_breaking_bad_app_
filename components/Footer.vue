<template>
  <footer>
    <p class="footerText">
      <a v-for="(url,idx) in urls.slice(0,2)" :href="url.url" :target="target" :title="titles[idx]" :key="url.id"
        ><fa :icon="['fab', icons[idx]]" class="fa-lg social-media-icon"
      /></a>
      <span>{{ footerText }}</span>
     <a v-for="(url,idx) in urls.slice(2,4)" :href="url.url" :target="target" :title="titles[idx+2]" :key="url.id"
        ><fa :icon="['fab', icons[idx+2]]" class="fa-lg social-media-icon"
      /></a>
    </p>
  </footer>
</template>

<script>
  import { mapGetters } from "vuex";
  export default {
    data() {
      return {
        footerText: "Developed by Nikola",
        target: "_blank",
      };
    },
    computed: {
      ...mapGetters({
        urls: "getURLS",
        icons: "getIcons",
        titles: "getTitles",
      }),
    },
  };
</script>

<style scoped>
footer {
  z-index: 4;
  height: 55px !important;
  background-color: #343a40 !important;
  margin: 0 !important;
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.footerText {
  margin: 0;
  font-weight: bold;
}

.footerText span {
  color: #369457;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.6);
  font-size: 22px;
}

.social-media-icon {
  margin: auto 5px;
}

.social-media-icon:active {
  transform: scale(0.93);
}

.fa-github {
  color: #000;
  margin-left: 5px;
}

.fa-codepen {
  color: #d8dce3;
}

.fa-linkedin-in {
  color: #0077b5;
}

.fa-twitter {
  color: #1da1f2;
}

@media (max-width: 768px) {
  footer {
    height: 50px !important;
  }
  .footerText span {
    font-size: 16px;
  }
}
</style>
