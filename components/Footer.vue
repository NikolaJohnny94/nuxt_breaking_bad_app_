<template>
  <footer>
    <p class="footerText">
      <span>{{ footerText }}</span>
      <a :href="urls[0]" :target="target" :title="titles[0]"
        ><fa :icon="['fab', icons[0]]" class="fa-lg social-media-icon"
      /></a>
      <a :href="urls[1]" :target="target" :title="titles[1]"
        ><fa :icon="['fab', icons[1]]" class="fa-lg social-media-icon"
      /></a>
      <a :href="urls[2]" :target="target" :title="titles[2]"
        ><fa :icon="['fab', icons[2]]" class="fa-lg social-media-icon"
      /></a>
      <a :href="urls[3]" :target="target" :title="titles[3]"
        ><fa :icon="['fab', icons[3]]" class="fa-lg social-media-icon"
      /></a>
    </p>
  </footer>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      footerText: 'Developed by Nikola',
      target: '_blank',
    };
  },
  computed: {
    ...mapGetters({
      urls: 'getURLS',
      icons: 'getIcons',
      titles: 'getTitles',
    }),
  },
}
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
  margin-right: 5px !important;
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
