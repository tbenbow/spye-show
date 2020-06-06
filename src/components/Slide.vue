<template>
  <div class="slide">
    <TitleBar title="Slide 1" v-on:going-back="$emit('going-back')" />
    <section>
      <div class="grid is-40-60">
        <div class="col">
          <label style="margin-top: .5rem;">Duration</label>
        </div>
        <div class="col">
          <InputNumber minilabel="seconds" />
        </div>
      </div>
      <div class="grid is-40-60">
        <div class="col">
          <label style="margin-top: .5rem;">Background</label>
        </div>
        <div class="col">
          <InputSelect :options="backgroundOptions" selected="color" />
        </div>
      </div>
      <InputColor />

      <hr />
      <!-- <InputFile label="Background Video" />
      <InputFile label="Background Image" /> -->
      <ol class="zones">
        <li>
          <router-link to="/block/1">
            <div class="title-group">
              <span class="title">Block 1</span>
              <span class="type">HTML</span>
            </div>
          </router-link>
        </li>
        <li>
          <router-link to="/block/1">
            <div class="title-group">
              <span class="type">Blank</span>
            </div>
          </router-link>
        </li>
        <li>
          <router-link to="/block/1">
            <div class="title-group">
              <span class="type">Blank</span>
            </div>
          </router-link>
        </li>
        <li>
          <router-link to="/block/1">
            <div class="title-group">
              <span class="title">Block 2</span>
              <span class="type">HTML</span>
            </div>
          </router-link>
        </li>
      </ol>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Slide',
  data: function () {
    return {
      backgroundOptions: [
        {
          name: 'None',
          value: 'none'
        },
        {
          name: 'Color',
          value: 'color'
        },
        {
          name: 'Image',
          value: 'image'
        },
        {
          name: 'Video',
          value: 'video'
        },
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/scss/_variables.scss';

.zones {
  list-style: none;
  margin: 1.5rem 0 0 0;
  padding: 0;
  counter-reset: ol-counter;

  li {
    position: relative;
    counter-increment: ol-counter;
    margin: 0 0 1.4rem 0;
  }
  li::after {
    content: '';
    background-color: $gray-light;
    display: block;
    position: absolute;
    top: 0;
    left: 5.2rem;
    width: 1px;
    height: 100%;
  }
  li::before { /* number */
    position: absolute;
    top: 50%;
    left: 1.4rem;
    transform: translateY(-50%) ;
    color: white;
    content: counter(ol-counter);
    display: block;
    border: 1px dashed $gray-lighter;
    width: 2.2rem;
    height: 2.2rem;
    line-height: 2rem;
    font-size: 1.2rem;
    text-align: center;
    font-weight: bold;
  }
  a {
    background: $gray;
    display: block;
    height: 5rem;
    line-height: 5rem;
    padding: 0 0 0 6.6rem;
    border: 1px solid $gray-light;
    border-radius: 4px;
    font-size: 1.4rem;

    &:hover {
      border: 1px solid $blue;
    }
  }
  .title-group {
    position: absolute;
    top: 47%;
    transform: translateY(-50%);
  }
  .type {
    color: $gray-lighter;
    display: block;
    margin: 0;
    line-height: 1rem;
    height: 1rem;
    font-size: 1.2rem;
  }
  .title {
    display: block;
    margin: 0;
    line-height: 2rem;
    height: 2rem;
  }
}
</style>