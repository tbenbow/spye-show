<template>
  <div>
    <label>{{ label }}</label>
    <input type="text" />
  </div>
</template>

<script>
export default {
  name: 'InputText',
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
  margin: 0 0 2rem 0;
  padding: 0 0 0 .6rem;
  border: 1px solid $gray-light;
  border-radius: 4px;
  height: 2.4rem;
  line-height: 2.0rem;
  width: 100%;
  font-size: 1.3rem;
  outline: none;

  &:focus {
    border: 1px solid $blue;
  }
}
label {
  position: relative;
  top: -1px;
  color: white;
  display: block;
  margin: 0 0 .5rem;
}
</style>
