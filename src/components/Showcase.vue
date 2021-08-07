<template>
   <header id="showcase">
      <h1>Welcome to the Sample Hotel</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis mollitia totam perspiciatis! Nihil.</p>
   </header>
</template>

<style scoped>
  #showcase{
      background-image: url("../assets/img/showcase1.jpeg");
      height:80vh;
      opacity:0.9;
      background-size:cover;
      background-position:center;
      background-repeat:no-repeat;
      display:flex;
      flex-direction: column;
      justify-content: center;
      align-items:center;      
  }

  h1{
     background-color: #79c280 ;
     padding:8px;
     font-size:45px;
     color:#002904;
     font-family:Arial, Helvetica, sans-serif;
     line-height:1.2;
  }

  p {
     background-color: #79c280 ;
     font-size:20px;
     color:#002904;
     padding:8px;
  }
</style>

<script>
export default {
   name:"Showcase"
}
</script>
