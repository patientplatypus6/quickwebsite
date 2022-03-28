<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
//import SelectBlog from '@/components/SelectBlog.vue'
</script>

<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->
  <div id='navbar'>
    <RouterLink to="/"><div class='routerlink'>Home</div></RouterLink>
    <div id='selectblog' style='display: inline-block; margin-right: 10px;'>
      <select name='blogs' id='bolbs' v-model='selected' @change='handleSelectBlog()'>
       <option disabled value=""> Blogs </option>
       <option value='proposal'> Proposal </option>
       <option value='hardware'> Hardware </option>
      </select>
    </div>
<!--    <SelectBlog /> -->
    <div id='selectnote' style="display: inline-block;">
      <select name="notes" id="notes" v-model='selected' @change='handleSelectNotes()'>
        <option disabled value="">Notes</option>
        <option value="first">First!</option>
        <option value="ASML">ASML</option>
      </select>
    </div>

    <RouterLink to='/personal'><div class='routerlink'>Personal</div></RouterLink>
    <RouterLink to="/resources"><div class='routerlink'>Resources</div></RouterLink>

  </div>

  <RouterView />
  <!-- <HomeView/> -->
</template>

<script scoped>
  export default{
    data(){
      return{
        selected: ''
      }
    },
    methods: {
      handleSelectNotes(){
        this.$router.push('/notes/'+this.selected)
        this.selected = '';
      }, 
      handleSelectBlog(){
        this.$router.push('/'+this.selected)
        this.selected = '';
      }
    }
  }
</script>

<style>
@import '@/assets/base.css';

.navbar{
  display: inline-block;
}



.routerlink{
  text-decoration: none;
  display: inline-block;
  color: white;
  font-weight: bold;
  margin: 10px;
}

/* 
#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}



header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
