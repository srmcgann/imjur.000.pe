<template>
  <a :href="link.href" target="_blank" class="link">
    <div class="linkThumb" :style="`background-image: url(${link.href})`"></div>
    #{{link.ct}}<br>
    href: {{link.href}}<br>
    type: {{link.type}}<br>
    size: {{link.size.toLocaleString('en-us')}}<br>
  </a>
</template>

<script>

export default {
  name: 'Link',
  props: [ 'state', 'link' ],
  data(){
    return {
    }
  },
  methods: {
  },
  mounted(){
  }
}
</script>

<style scoped>
  .link{
    background-color: #408a;
    font-size: 20px;
    height: 50px;
    min-width: 400px;
    margin: 20px;
    box-sizing: border-box;
    text-align: left;
    margin: 10px;
  }
  .linkThumb{
    float: left;
    width: 40px;
    height: 40px;
    margin: 5px;
    background-size: contain;
    background-position: 20px 20px;
    background-repeat: no-repeat;
    background-color: #000;
  }
</style>

