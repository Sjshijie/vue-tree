<template>
  <div id="app">
    <!-- <loading></loading> -->
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link :to="{ path: '/router1', query: { id: 123 }}" >router1</router-link>
      <router-link to='/treenode'>treenode</router-link>
    </div>
    <button @click='h'>点击</button>
    <router-view/>
  </div>
</template>

<script>
import axios from "axios";
import Loading from './components/loading'
export default {
  methods:{
    h(){
      this.$router.push({path: '/router1',query:{id:1,h:2}})
    }
  },
  components:{
    Loading
  }
};
</script>


<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
