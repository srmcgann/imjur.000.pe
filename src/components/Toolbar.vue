<template>
  <div class="toolbar">
    <User :state="state" />
    <button @click="state.loadFiles()">
      upload files
    </button>
    <div v-if="state.loggedIn">
      <button @click="state.deleteSelected()" class="deleteButton">
        delete selected
      </button>
      ...logged-in tools
    </div>
    <div v-else>
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
    background: linear-gradient(90deg, #444a, #000a, #004a);
    color: #4fa;
    font-size: 20px;
  }
  .deleteButton{
    color: #f88;
    background-color: #400d;
    border-color: #8008;
  }
</style>
