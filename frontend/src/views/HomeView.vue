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
  <!--
  <div>
    I want to be a programmer. It's all I care about. It's all that matters to me anymore.
  </div>
  <div>
    I have little to no money left. I'm unemployed and staying in AirBnBs. All I want to do anymore is program.
  </div>
  <div>
    Email me at peterweyand0@gmail.com if you'll pay me to program and let me live somewhere.
  </div>-->
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
