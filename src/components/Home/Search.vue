<template>
  <div >
    <component :is="'script'" charset="utf-8" src="//www.travelpayouts.com/widgets/7e6c5990d97bf579009941dd6dc907d7.js?v=2263" async>

    </component>
  </div>
</template>

<script>
export default {
    data(){
        return{
            sw:1
        }
    }
}
</script>

<style>
.search-container{
    border-radius:35px;
    height:200px;
    width:90%;
    border-top-left-radius:0px;
}

@media screen and (max-width:500px) {
 .search-container{
    border-radius:35px;
    height:100px;
    width:90%;
    border-top-left-radius:0px;
}   
}
</style>