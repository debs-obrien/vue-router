<template>
    <div class="wrapper">
        <h1>All Destinations</h1>
        <div class="all-destinations">
            <div v-for="destination in destinations" :key="destination.name" class="destinations">
                <h2 @click="goTodetail()">{{ destination.name }}</h2>
            <figure>
            <img :src="require(`@/assets/${destination.image}.jpg`)"  @click="goTodetail()"/>
            </figure>
</div>
</div>

    </div>
</template>
<script>
export default {
    methods:{  
        goTodetail() {
            console.log('clicked')    
            this.$router.push({name:'details'})  
            }
    },
    data: function () {
    return {
    destinations: [
        {
            name: "Brazil",
            image: "brazil",
            url: "brazil"
        },
        {
            name: "Panama",
            image: "panama",
            url: "panama"

        },
        {
            name: "Hawaii",
            image: "hawaii",
            url: "hawaii"

        },
        {
            name: "Jamaica",
            image: "jamaica",
            url: "jamaica"

        }
    ]
  }
}
}
</script>

<style>
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
