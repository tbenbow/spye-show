<template>
  <div>
    <label>{{ label }}</label>
    <textarea />
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
textarea {
  color: white;
  background: $gray;
  display: block;
  position: relative;
  margin: 0;
  padding: .5rem 1rem;
  border: 1px solid $gray-light;
  border-radius: 4px;
  height: 9.6rem;
  width: 100%;
  font-family: 'Raleway', sans-serif;
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
