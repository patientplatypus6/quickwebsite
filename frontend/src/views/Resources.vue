<script setup>
  //import MessagesApp from '../components/MessagesApp.vue'
</script>

<template>
 <div id='resources'>
  <div id='leftcontainer'>
    <div>
      Resources
    </div>
    <br/>
    <div>
      Here are some helpful resources available on the net. I sometimes am looking for information on a particular topic and can't find it, so here's my contribution to making the world a little easier on everyone else, by adding links to resources.
    </div>
    <br/>
    <div style='text-decoration: underline'>
      Apartment Hunting - 
    </div>
    <br/>
    <div>
      I've used the following sites when looking for an apartment - 
    </div>
    <ul>
      <li>
        <a href='https://www.roomies.com'>roomies</a>
      </li>
      <li>
        <a href='https://www.roomster.com'>roomster</a>
      </li>
      <li>
        <a href='https://www.craigslist.com'>craigslist</a>
      </li>
      <li>
        <a href='https://www.reddit.com/redditroommates'>reddit roomates</a>
      </li>
      <li>
        <a href='https://www.rent.com'>rent.com</a>
      </li>
      <li>
        <a href='https://www.apartmentguide.com'>apartmentguide</a>
      </li>
      <li>
        <a href='https://wwww.apartments.com'>apartments.com</a>
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
