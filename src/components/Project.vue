<template>
  <div class="project">
    <TitleBar title="Project Name" v-on:going-back="$emit('going-back')" :settings="true" />
    <section>
      <ul class="slides">
        <li><router-link to="/slide/1">Slide 1</router-link></li>
        <li><router-link to="/slide/2">Slide 2</router-link></li>
        <li><router-link to="/slide/3">Slide 3</router-link></li>
      </ul>
      <div class="grid half">
        <div class="col">
          <InputButton label="+ Add Slide" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Project'
}
</script>

<style lang="scss" scoped>
@import '@/scss/_variables.scss';

.slides {
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    margin: 0 0 1.4rem 0;
  }
  a {
    background: $gray;
    display: block;
    height: 3.6rem;
    line-height: 3.6rem;
    padding: 0 0 0 1.2rem;
    border: 1px solid $gray-light;
    border-radius: 4px;
    font-size: 1.4rem;

    &:hover {
      border: 1px solid $blue;
    }
  }
}
</style>