<template>
  <div class="sidebar">
    <TopBar />
    <div class="sidebar-panels" :class="{ backwards: goingBackwards }">
      <transition name="overlap">
        <Projects v-if="!mode" class="panel projects" />
      </transition>
      <transition name="overlap">
        <Project v-if="mode === 'project'" class="panel project" v-on:going-back="goingBack()" />
      </transition>
      <transition name="overlap">
        <Layout v-if="mode === 'layout'" class="panel layout" v-on:going-back="goingBack()" />
      </transition>
      <transition name="overlap">
        <Slide v-if="mode === 'slide'" class="panel slide" v-on:going-back="goingBack()" />
      </transition>
      <transition name="overlap">
        <Block v-if="mode === 'block'" class="panel block" v-on:going-back="goingBack()" />
      </transition>
    </div>
  </div>
</template>

<script>
import TopBar from '@/components/TopBar.vue';
import Layout from '@/components/Layout.vue';
import Projects from '@/components/Projects.vue';
import Project from '@/components/Project.vue';
import Slide from '@/components/Slide.vue';
import Block from '@/components/Block.vue';

export default {
  name: 'Sidebar',
  components: {
    'TopBar': TopBar,
    'Layout': Layout,
    'Projects': Projects,
    'Project': Project,
    'Slide': Slide,
    'Block': Block,
  },
  data: function () {
    return {
      goingBackwards: false
    }
  },
  computed: {
    mode () {
      return this.$route.params.mode;
    },
    id () {
      return this.$route.params.id;
    }
  },
  methods: {
    goingBack() {
      this.goingBackwards = true;
      setTimeout(() => {
        this.goingBackwards = false;
      }, 400)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/_variables.scss';

.sidebar {
  position: relative;
  background: $gray-darker;
  grid-column-start: 1;
  grid-column-end: 2;
  overflow: hidden;
}

.panel {
  background: $gray-dark;
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
}

// Tranitions Moving Forwards
.overlap-enter {
  transform: translateX(100%);
}
.overlap-enter-to {
  transform: translateX(0);
  transition: transform .3s ease-in-out, opacity .3s ease-in-out;
}
.overlap-leave-to {
  opacity: 0;
  transform: translateX(-35px);
  transition: transform .3s ease-in-out, opacity .3s ease-in-out;
}


// Tranitions Moving Backwards
.backwards {
  .overlap-enter {
    transform: translateX(-35px);
    opacity: 0;
  }
  .overlap-enter-to {
    transform: translateX(0);
    opacity: 1;
    transition: transform .3s ease-in-out, opacity .3s ease-in-out;
  }
  .overlap-leave {
    opacity: 1;
    transform: translateX(0);
  }
  .overlap-leave-to {
    opacity: 1;
    transform: translateX(100%);
    transition: transform .3s ease-in-out;
  }
}
</style>