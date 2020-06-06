<template>
  <div :class="size">
    <label v-if="label">{{ label }}</label>
    <div class="fieldwrap">
      <label class="minilabel">{{ minilabel }}</label>
      <input type="number" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputNumber',
  props: {
    label: {
      type: String,
      default: ''
    },
    minilabel: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: ''
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/scss/_variables.scss';

.fieldwrap {
  background: $gray;
  position: relative;
  margin: 0 0 1.5rem 0;
  padding: 0;
  border: 1px solid $gray-light;
  border-radius: 4px;
  height: 2.4rem;
  width: 100%;
}
input {
  color: white;
  background: none;
  display: block;
  margin: 0;
  padding: 0 0 0 .6rem;
  border: none;
  height: 100%;
  width: 100%;
  font-size: 1.3rem;
  outline: none;

  &:focus {
    border: 1px solid $blue;
  }
}
.minilabel {
  color: $gray-lighter;
  background: $gray;
  display: block;
  position: absolute;
  top: 1px;
  right: 0;
  z-index: 2;
  padding: 0 .6rem 0;
  line-height: 2.2rem;
  height: 1.9rem;
  border-radius: 4px;
  font-size: 1.3rem;
  text-align: right;
}
.half {
  width: 50%;
}
</style>
