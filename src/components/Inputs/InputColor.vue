<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <div class="fieldwrap">
      <input type="color" />
      <p>#000000</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputColor',
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
  position: relative;
  top: -3px;
  color: white;
  background: transparent;
  display: block;
  margin: 0 0 1.5rem 0;
  padding: 0;
  border: none;
  border-radius: 4px;
  height: 3.2rem;
  width: 7rem;
  font-size: 1.3rem;
}
label {
  position: relative;
  top: -1px;
  color: white;
  display: block;
  margin: 0 0 .5rem;
}
.fieldwrap {
  display: flex;
}
p {
  position: relative;
  top: 3px;
  padding-left: .5rem;
  color: $gray-lighter;
  margin: 0;
}
</style>
