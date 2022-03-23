<script setup>
  import MessagesApp from '../components/MessagesApp.vue'
</script>

<template>
 <div id='home'>
  <div id='leftcontainer'>
    <div>
      Welcome to Lightchan.
    </div>
    <div>
      email: peterweyand0@gmail.com
    </div>
  </div>
  <div id='rightcontainer'>
    <MessagesApp/>
  </div>
 </div>
 <!--<img src="https://localhost/media/pics/lightbulb.jpeg"/>-->
</template>

<style scoped>
#home{
  margin: 20px;
}
#leftcontainer{
  display: inline-block;
  float: left;
}
#rightcontainer{
  display: inline-block;
  float: right;
}
</style>

<script scoped>
    import app from '../App.vue'
    export default{
        components:{
            app
        }, 
        data(){
          return{}
        }
    }
</script>
