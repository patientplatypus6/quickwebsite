<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import MessagesApp from '../components/MessagesApp.vue'
</script>

<template>
 <div id='note' style=''>
  <div id='leftcontainer' style=''>
    <div v-bind:style="{ position: 'relative', paddingLeft: '25vw', width: '100vw', overflowY: 'scroll', overflowX: 'hidden', height: containerheight }"> 
      <iframe v-bind="{ src: blogurl }"
                 allowfullscreen
                 frameborder="0" border="0" cellspacing="0" scrolling='no'
                 :style="{ position:'absolute',top:'0px',width:'100%',height:containerheight }"></iframe>
    </div>
  </div>
 </div>
</template>

<style scoped>
html, body{
  width: calc(100% - 20px);
  overflow-x: hidden;
  position:relative;
}
#dblog{
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
          return{
            blogurl: 'https://lightchan.neocities.org', 
            containerheight: ''
          }
        }, 
        created(){
          this.handlePageload(this.$route.path)
          this.$watch(
            () => this.$route.path,
            (toPath, previousPath) => {
              console.log('blog updated')
              console.log('value of toPath', toPath)
              console.log('value of previousPath', previousPath)
                this.handlePageload(toPath)
            }
          )
        }, 
        //async beforeRouteUpdate(to, from) {
          // react to route changes...
        //  console.log('value of to/from in beforeRouteUpdate ', to)
          //this.userData = await fetchUser(to.params.id)
       // },
        methods:{
          handlePageload(path){
            this.blogurl = 'https://lightchan.neocities.org' + path + '.html'
            if(path=='/notes/first' || path=='/notes/ASML'){
              this.containerheight = '100vh';
            }
          }
        }
    }
</script>
