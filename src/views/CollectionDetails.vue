<template>
  <section class="main style1 dark fullscreen">
    <div class="content">
      <div id="features-wrapper">
        <div class="container">
          <div class="row">
            <div class="col-7 col-12-medium">
              <!-- Box -->
              <section class="box feature photo">
                <div class="image featured">
                  <div>
                    <img
                      :src="
                        require(`@/assets/images/collection/${project.image}`)
                      "
                      :alt="project.projectname"
                    />
                  </div>
                </div>
              </section>
            </div>

            <div class="col-4 col-12-medium">
              <!-- Box -->
              <section class="box feature">
                <div class="describe">
                  <header>
                    <h2>{{ project.information[0].name }}</h2>
                    <p>{{ project.information[0].type }}</p>
                  </header>
                  <p>{{ project.information[0].job }}</p>
                  <p>{{ project.information[0].description }}</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <div
        v-for="picture in project.pictures"
        :key="picture.name"
        class="photo-container"
      >
        <img
          :src="require(`@/assets/images/collection/${picture.url}`)"
          :alt="picture.name"
        />
      </div>

      <div
        v-for="video in project.videos"
        :key="video.name"
        class="video-container"
      >
        <youtube
          :video-id="video.url"
          class="youtube"
          player-width="90%"
          player-height="90%"
        ></youtube>
      </div>
    </div>
  </section>
</template>
<style scoped src="../assets/css/custom/CollectionDetails.css">
/*@import '../assets/css/custom/CollectionDetails.css';*/
</style>
<script>
import Vue from "vue";
import VueYouTubeEmbed from "vue-youtube-embed";
Vue.use(VueYouTubeEmbed);

import store from "@/store.js";
export default {
  data() {
    return {
      // projectname: this.$route.params.projectname
      // collections : store.collections
    };
  },

  props: {
    projectname: {
      type: String,
      required: true
    }
  },

  computed: {
    project() {
      return store.collections.find(
        project => project.projectname === this.projectname
      );
    }
  }
};
</script>
