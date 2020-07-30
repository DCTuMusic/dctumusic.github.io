<template>
  <section class="main style1 dark fullscreen">
    <div class="content">
      <div id="features-wrapper">
        <div class="container">
          <div class="row">
            <div
              v-for="collection in collections"
              :key="collection.projectname"
              class="col-3 col-4-large col-6-medium col-12-small"
            >
              <!-- Box -->
              <section class="box feature">
                <div class="image ">
                  <router-link
                    :to="{
                      name: 'CollectionDetails',
                      params: { projectname: collection.projectname }
                    }"
                    class="featured"
                  >
                    <img
                      :src="
                        require(`@/assets/images/collection/${collection.image}`)
                      "
                      alt=""
                  /></router-link>
                </div>
                <div class="inner">
                  <header>
                    <h1>
                      <router-link
                        :to="{
                          name: 'CollectionDetails',
                          params: { projectname: collection.projectname }
                        }"
                        >{{ collection.information[0].name }}</router-link
                      >
                    </h1>
                    <p>{{ collection.information[0].job }}</p>
                  </header>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
#header h1 {
  color: #ffffff;
}
</style>

<script>
// document.title = "Collection";
import store from "@/store.js";
export default {
  components: {},
  data() {
    return {
      // projectid:this.$route.params.id,
      collections: store.collections
    };
  }
  // props:{
  // 	projectName: {
  // 		type: String,
  // 		require: true
  // 	}
  // },
  // computed:{
  // 	collection(){
  // 		return store.collections.find(
  // 				collection => collection.projectname === this.projectName
  // 			)
  // 	}
  // },
};
</script>
