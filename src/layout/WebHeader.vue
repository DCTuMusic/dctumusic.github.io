<template>
  <header id="header">
    <router-link to="/"><h1>DC Tu</h1></router-link>
    <nav>
      <ul>
        <!-- <li><a href="#intro">Intro</a></li> -->
        <!-- <li><a href="Photo2.html">Photo</a></li> -->
        <!-- <li><a href="Soundcloud.html">Music</a></li> -->
        <li><router-link to="/Collection">Collection</router-link></li>
        <li><router-link to="/Photography">Photography</router-link></li>
        <li><router-link to="/Bio">Bio</router-link></li>
      </ul>
    </nav>
  </header>
</template>
<script>
// import BaseNav from "@/components/BaseNav";
// import BaseDropdown from "@/components/BaseDropdown";
// import CloseButton from "@/components/CloseButton";

export default {
  components: {
    // BaseNav,
    // CloseButton,
    // BaseDropdown
  }
};
</script>
<style></style>
