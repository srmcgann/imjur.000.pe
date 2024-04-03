<template>
  <div class="toolbar">
    <User :state="state" />
    <button @click="state.loadFiles()" class="toolbarButtons">
      upload files
    </button>
    <div v-if="state.loggedIn" style="display: inline-block">
      <button @click="state.deleteSelected()" class="deleteButton toolbarButtons">
        delete selected
      </button>
      ...logged-in tools
    </div>
    <div v-else style="display: inline-block">
      ...loged-out tools
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
    height: 52px;
    background: #001d;
    color: #4fa;
    font-size: 20px;
  }
  .toolbarButtons{
    margin: 10px;
  }
  .deleteButton{
    color: #f88;
    background-color: #400d;
    border-color: #8008;
  }
</style>
