<template>
  <div class="title-bar">
    <h1>{{ title }}</h1>
    <a class="back" @click="goBack()">
      <font-awesome-icon class="icon" icon="chevron-left" />
    </a>
    <router-link v-if="settings" class="settings" to="/layout/1">
      <font-awesome-icon class="icon" icon="cog" />
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'TitleBar',
  props: {
    title: String,
    path: {
      type: String,
      default: '/'
    },
    settings: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    goBack() {
      this.$emit('going-back');
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/scss/_variables.scss';

.title-bar {
  display: flex;
  border-top: 1px solid $gray-light;
  border-bottom: 1px solid $gray-light;
}
h1 {
  flex: auto;
  order: 2;
  margin: 1rem 0 0 1.5rem;
  font-weight: bold;
}
.settings,
.back {
  background-color: $gray-dark;
  position: relative;
  width: 4rem;
  height: 4rem;
  cursor: pointer;
  transition: background-color .2s ease-in-out;

  .icon {
    color: $gray-lighter;
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 1.6rem;
    transform: translate(-50%,-50%);
  }

  &:hover {
    .icon {
      color: white;
    }
  }
}
.back {
  border-right: 1px solid $gray-light;
  order: 1;
}
.settings {
  order: 3;
}
</style>
