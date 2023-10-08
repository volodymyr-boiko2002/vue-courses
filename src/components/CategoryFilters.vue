<template>
  <div class="col-md-8">
    <div v-for="(category, index) in categories" :key="category.id" @click="$emit('filter', category.name)"
         :class="{'btn-active': category.isActive, 'ms-md-2': index !== 0  }" class="btn ms-0 mx-1" >
      {{ category.name }}
    </div>
  </div>
</template>

<script>
export default {
  props: ['categories'],
}
</script>

<style scoped>

.btn-active {
  background: #dfd8ff;

}

.btn {
  color: #483089;
  border-radius: 30px;
  font-weight: 700;
  font-size: 14px;
}

.btn:hover {
  background: #dfd8ff;
  transition: 0.4s;
}

</style>