<template>
  <div class="project">
    <TitleBar title="Layout" v-on:going-back="$emit('going-back')" />
    <section>
      <div class="grid third">
        <div class="col">
          <InputNumber minilabel="w" />
        </div>
        <div class="col">
          <InputNumber minilabel="h" />
        </div>
        <div class="col">
          <InputButton label="CSS" />
        </div>
      </div>
      <br />
      <div class="grid third">
        <div class="col">
          <label>Zone 1</label>
        </div>
        <div class="col">
          <InputNumber minilabel="x" />
        </div>
        <div class="col">
          <InputNumber minilabel="y" />
        </div>
        <div class="col"></div>
        <div class="col">
          <InputNumber minilabel="w" />
        </div>
        <div class="col">
          <InputNumber minilabel="h" />
        </div>
      </div>
      <br />
      <div class="grid third">
        <div class="col">
          <label>Zone 2</label>
        </div>
        <div class="col">
          <InputNumber minilabel="x" />
        </div>
        <div class="col">
          <InputNumber minilabel="y" />
        </div>
        <div class="col"></div>
        <div class="col">
          <InputNumber minilabel="w" />
        </div>
        <div class="col">
          <InputNumber minilabel="h" />
        </div>
      </div>
      <br />
      <div class="grid half">
        <div class="col">
          <InputButton label="+ Add Zone" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Layout'
}
</script>

<style>
</style>