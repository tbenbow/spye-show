<template>
  <router-link v-if="routerlink" :to="routerlink" class="button" :class="size">{{ label }}</router-link>
  <a v-else class="button">{{ label }}</a>
</template>

<script>
export default {
  name: 'InputButton',
  props: {
    routerlink: {
      type: String,
    },
    label: {
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

.button {
  cursor: pointer;
  display: block;
  background-color: $gray;
  border: 1px solid $gray-light;
  border-radius: 4px;
  height: 2.4rem;
  line-height: 2.2rem;
  text-align: center;
  font-size: 1.3rem;
  transition: background-color .2s;

  &:hover {
    background-color: $blue;
    border: 1px solid $blue;
  }
  &.third {
    width: 33.333%
  }
}
</style>
