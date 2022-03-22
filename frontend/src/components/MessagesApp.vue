<script setup>
</script>

<template>
 <div id='messages'>
   Messages App
 </div>
</template>

<style scoped>
#home{
  margin: 20px;
}
</style>

<script scoped>
    import app from '../App.vue'
    import {Socket} from 'phoenix'
    export default{
        components:{
            app
        }, 
        data(){
          return{}
        }, 
	created(){
	  console.log("inside created")
	  let socket = new Socket("wss://www.lightchan.org/socket", {params: {userToken: Date.now()}})
	  socket.connect()

	  this.channel = socket.channel("room:lobby", {})
          console.log('value of this.channel ', this.channel)
          this.channel.join()
                .receive("ok", resp => { console.log("Joined successfully in Vue", resp) })
                .receive("error", resp => { console.log("Unable to join", resp) })
	}
    }
</script>

