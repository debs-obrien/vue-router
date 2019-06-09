<template>
<div>

    <div>hello details</div>
    <h2>the destination id is :{{this.$route.params.id}}</h2>
    <!-- <div class="col-md-12" v-for="(destination,index) in destinations" :key="index">     
        <div v-if="desId == destination.id">      
            <h1>{{destination.name}}</h1>      
            <img :src="destination.image" class="img-fluid">     
            </div>    
         </div> -->


    </div>
</template>
<script>
export default {

    data: function () {
    return {
        destinationId:this.$route.params.id,
    destinations: [
        {
            name: "Brazil",
            image: "brazil",
            url: "brazil",
            id: 1
        },
        {
            name: "Panama",
            image: "panama",
            url: "panama",
            id: 2

        },
        {
            name: "Hawaii",
            image: "hawaii",
            url: "hawaii",
            id: 3

        },
        {
            name: "Jamaica",
            image: "jamaica",
            url: "jamaica",
            id: 4

        }
    ]
  }
}
}
</script>