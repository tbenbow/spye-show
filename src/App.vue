<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>


<style lang="scss">
@import '@/scss/_variables.scss';

* {
  box-sizing: border-box;
}
html {
  height: 100%;
  font-size: 10px;
}
body {
  color: $gray-light;
  background: black;
  padding: 0;
  margin: 0;
  height: 100%;
  font-size: 16px;
  font-family: 'Raleway', sans-serif;
}

// Type
h1 {
  color: white;
  position: relative;
  line-height: 2rem;
  margin: 0;
  font-size: 1.5rem;
  font-weight: 300;
}
label {
  display: block;
  color: white;
  margin: 0 0 .5rem 0;
  padding: 0;
  font-size: 1.3rem;
}
a {
    color: white;
    text-decoration: none;
}
hr {
  background: $gray-light;
  height: 1px;
  margin: 0 0 2rem 0;
  border: none;
}

// Layout
#app {
  display: grid;
  height: 100%;
  grid-template-columns: 250px auto;
}

section {
  padding: 1.5rem;
}

.grid {
  display: flex;
  margin: 0 -.5rem;
  .col {
    flex: 1;
    padding: 0 .5rem;
  }
}
.grid.half {
  flex-wrap: wrap;
  .col {
    flex: 0 50%;
  }
}
.grid.third {
  flex-wrap: wrap;
  .col {
    flex: 0 33.333%;
  }
}
.grid.quarter {
  flex-wrap: wrap;
  .col {
    flex: 0 25%;
  }
}
.grid.is-33-66 {
  .col:first-child {
    flex: 0 33.333%;
  }
  .col:last-child {
    flex: 0 66.666%;
  }
}
.grid.is-40-60 {
  .col:first-child {
    flex: 0 40%;
  }
  .col:last-child {
    flex: 0 60%;
  }
}


@media only screen and (max-width: 600px) {
  #app {
    grid-template-columns: 100% 0;
  }
}

</style>