<template>
    <div class="wrapper">
        <h1>All Destinations</h1>
        <div class="all-destinations">
            <div v-for="destination in destinations" :key="destination.name" class="destinations">
            <router-link :to="destination.url">
                <h2>{{ destination.name }}</h2>
            </router-link>
            <figure>
            <img :src="require(`@/assets/${destination.image}.jpg`)" />
            </figure>
</div>
</div>
  <router-view></router-view>

    </div>
</template>
<script>
export default {
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
</style>
