<template>
  <h1>this is the fruit box component</h1>
  <h2 v-for="fruit in fruits" :key="fruit.id">
    <router-link :to="{ name: 'fruitDetails', params: { id: fruit.details } }">
      {{ fruit.title }}
    </router-link>
  </h2>
</template>

<script>
export default {
  name: "FruitBox",
  data() {
    return {
      fruits: [
        { title: "mango", id: 1, details: "this is yellow fruit" },
        { title: "apple", id: 2, details: "this is red fruit" },
        { title: "banana", id: 3, details: "this is yellow fruit" },
        { title: "orange", id: 4, details: "this is orange fruit" },
        { title: "grape", id: 5, details: "this is purple fruit" },
      ],
    };
  },
};
</script>

<style scoped></style>
