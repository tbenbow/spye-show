<template>
  <div>
    <ul class="projects">
      <li>
        <router-link to="/project/1">Project 1</router-link>
      </li>
      <li>
        <router-link to="/project/2">Project 2</router-link>
      </li>
      <li>
        <router-link to="/project/3">Project 3</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'projects'
}
</script>

<style lang="scss" scoped>
@import '@/scss/_variables.scss';

.projects {
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    margin: 0 0 -1px 0;
  }
  a {
    position: relative;
    border-top: 1px solid $gray-light;
    border-bottom: 1px solid $gray-light;
    display: block;
    height: 4rem;
    line-height: 4rem;
    padding: 0 0 0 1.2rem;
    font-size: 1.4rem;

    &:hover {
      z-index: 2;
      background-color: $blue;
    }
  }
}
</style>