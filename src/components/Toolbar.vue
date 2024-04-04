<template>
  <div class="toolbar">
    <User :state="state" />
    <button @click="state.loadFiles()" class="toolbarButtons">
      upload files
    </button>
    <div v-if="state.loggedIn" class="toolbarSection">
      <button @click="state.deleteSelected()" class="deleteButton toolbarButtons">
        delete selected
      </button>
      <div class="username" v-html="'welcome, ' + state.username"></div>
    </div>
    <div v-else class="toolbarSection">
    </div>
  </div>
</template>

<script>
import User from './User'

export default {
  name: 'Toolbar',
  props: [ 'state' ],
  components: {
    User
  },
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
  .toolbar{
    height: 38px;
    background: linear-gradient(90deg, #3336, #3336, #3333);
    color: #4fa;
    font-size: 20px;
    position: absolute;
    top: 52px;
    z-index: 100;
    width: calc(100vw - 20px);
  }
  .toolbarSection{
    display: inline-block;
  }
  .toolbarButtons{
    margin: 5px;
    min-width: 180px;
    padding: 2px;
  }
  .username{
    display: inline-block;
    position: relative;
    margin-right: 5px;
    float: right;
  }
  .deleteButton{
    color: #f88;
    background-color: #400d;
    border-color: #8008;
  }
</style>
