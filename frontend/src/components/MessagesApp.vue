<script setup>
</script>

<template>
 <div id='messages'>
   <span style='font-weight: bold;'> Messages</span>
   <br/>
   <div v-for="(message, key) in messages" :key="key">
     {{message}}
   </div>
   <div style="display: inline-block;">
     <input v-model="chatMessage"/>
     <button @click="sendMessage()">Submit</button>
   </div>
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
          return{
            chatMessage: "",
            messages: []
          }
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
	  this.channel.on('shout', payload => this.messages.push(payload.message))
        }, 
        methods: {
          sendMessage(){
            if(this.chatMessage){
              this.channel.push('shout', {message: this.chatMessage})
            }
          }
        },
        watch: {
          messages:{
            handler(newMessages, oldMessages){
              console.log('inside watch messages')
              if(newMessages.length>10){
                var tempMessages = newMessages;
                var firstelemet = tempMessages.shift()
                this.messages = tempMessages
            /*  var count = 1;
                var tempMessages = [];
                for(var i=0;i<newMessages.length;i++){
                  console.log('value of count: ', count)
	          console.log('value of tempMessages: ', tempMessages)
                  if(count<=10){
                    tempMessages.push(newMessages[i])
                    count++
                  }else{
                    i=20
                  }
                }
                console.log('value of newMessages: ', newMessages)
                this.messages=tempMessages
              */
              }
            },
            deep: true
          }
        }
      }
</script>

