<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Welcome {{uname}}</h1>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data(){
    return {
      uname:"dingding"
    }
  }
}
</script>
