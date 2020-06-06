<template>
  <div>
    <label>{{ label }}</label>
    <input type="file" />
  </div>
</template>

<script>
export default {
  name: 'InputFile',
  props: {
    label: {
      type: String,
      default: ''
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/scss/_variables.scss';
input {
  color: white;
  background: $gray;
  display: block;
  position: relative;
  margin: 0;
  padding: 0;
  border: 1px solid $gray-light;
  border-radius: 4px;
  height: 2.4rem;
  width: 100%;
  font-size: 1.3rem;
}
label {
  position: relative;
  top: -1px;
  color: white;
  display: block;
  margin: 0 0 .5rem;
}
</style>
