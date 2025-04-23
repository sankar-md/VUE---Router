<template>
  <div>this is {{ id }}</div>
</template>

<script>
export default {
  name: "FruitDetails",
  data() {
    return {
      id: this.$route.params.id,
    };
  },
};
</script>

<style scoped></style>
