<template>
  <div class="block">
    <TitleBar title="Block 1" v-on:going-back="$emit('going-back')" />
    <section>
      <div class="grid is-40-60">
        <div class="col">
          <label style="margin-top: .5rem;">Block Type</label>
        </div>
        <div class="col">
          <InputSelect :options="blockOptions" selected="html" />
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
      <!-- <InputFile label="Background Image" /> -->
      <hr />
      <inputText label="Title" />
      <inputText label="Sub Title" />
      <inputText label="Second Sub Title" />
      <inputTextarea label="HTML Content" />
    </section>
  </div>
</template>

<script>
export default {
  name: 'Block',
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
      ],
      blockOptions: [
        {
          name: 'Blank',
          value: 'blank'
        },
        {
          name: 'HTML',
          value: 'html'
        },
        {
          name: 'List',
          value: 'list'
        },
      ]
    }
  }
}
</script>

<style>
</style>