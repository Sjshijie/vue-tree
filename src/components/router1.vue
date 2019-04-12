<template>
  <div>{{this.$route.query}}</div>
</template> 

<script>
export default {
  created() {},
  beforeRouteEnter(to, from, next) {
    next()
  }
};
</script>



