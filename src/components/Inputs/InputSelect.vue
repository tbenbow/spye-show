<template>
  <select v-model="selected">
    <option v-for="option in options" :key="option.name" v-bind:value="option.value" :my-selected="option.value === selected">
      {{ option.name }}
    </option>
  </select>
</template>


<script>
export default {
  name: 'InputSelect',
  props: {
    options: {
      type: Array,
    },
    selected: {
      type: String,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/scss/_variables.scss';
  select {
    display: block;
    color: white;
    background: $gray;
    margin: 0 0 2rem 0;
    padding: 0 .5rem;
    border: 1px solid $gray-light;
    border-radius: 4px;
    height: 2.4rem;
    width: 100%;
    font-size: 1.2rem;
    cursor: pointer;
  }
  select:focus {
    outline: 0;
  }
</style>
