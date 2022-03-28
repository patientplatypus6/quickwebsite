<script setup>
  //import MessagesApp from '../components/MessagesApp.vue'
</script>

<template>
 <div id='resources'>
  <div id='leftcontainer'>
    <div>
      Personal
    </div>
    <br/>
    <div>
      Because I believe in the power of people to make their own websites I've decided to make a curated list of the websites that I've found. Perhaps you will find them useful and visit them.
    </div>
    <br/>
    <ul>
      <li>
        <a href='https://www.mollywhite.net/'>Molly White</a>
      </li>
    </ul>
  </div>
 </div>
 <!--<img src="https://localhost/media/pics/lightbulb.jpeg"/>-->
</template>

<style scoped>

#resources{
  margin-left: 25vw;
  width: 50vw;
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
