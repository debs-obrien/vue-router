<template>
    <div class="wrapper">
        <h1>All Destinations</h1>
        <div class="all-destinations">
            <div v-for="destination in destinations" :key="destination.name" class="destinations">
                <h2 @click="goTodetail(destination.id)">{{ destination.name }}</h2>
            <figure>
            <img :src="require(`@/assets/${destination.image}.jpg`)"  @click="goTodetail(destination.id)"/>
            </figure>
</div>
</div>

    </div>
</template>
<script>
export default {
    methods:{  
        goTodetail(destinationId) {
            this.$router.push({name:'DestinationDetails', params:{id:destinationId}})  
            }
    },
    data: function () {
    return {
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

<style scoped>
.wrapper{
    max-width: 1400px;
    margin: 0 auto;
}
.all-destinations{
    display:flex;
    justify-content: center;

}
img{
    max-width: 200px;
}
a{
    color: lightseagreen;
    text-decoration:none;
}
a:hover, a:visited{
    text-decoration:underline;
}
.router-link-active{
    color:dodgerblue;
}
</style>
