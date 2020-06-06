<template>
  <div class="top-bar">
    <span class="project">SPYE Show</span>
    <span class="user">User Name</span>
  </div>
</template>

<script>
export default {
  name: 'TopBar',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">
@import '@/scss/_variables.scss';

.top-bar {
  color: white;
  background: $gray-dark;
  padding: 1rem;
  span {
    display: block;

    &.user {
      color: $gray-lighter;
      font-size: 1.3rem
    }
    &.project {
      font-size: 1.6rem;
      font-weight: bold;
      letter-spacing: 1px;;
    }
  }
}
</style>
