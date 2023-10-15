<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {}
  },
}
</script>

<style>
h1, h4, p {
  color: #0e0b2c;
}

.form-control {
  color: #0e0b2c;
  border: 1px solid #dfd8ff;
}

.form-control:focus {
  border-color: #c5bbf2;
  box-shadow: 0 0 0 0.25rem #dfd8ff;
}
</style>
