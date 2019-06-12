<template>
<div>
    <div  v-for="(destination,index) in destinations" :key="index">
        <div v-if="location == destination.name">
            <h1>{{destination.name}}</h1>
            <div class="destination-details">
            <img :src="require(`@/assets/${destination.image}.jpg`)" />
            <p>{{destination.description}}</p>
            </div>
            </div>
         </div>
    </div>
</template>
<script>
export default {
    data: function () {
    return {
        location:this.$route.params.location,
    destinations: [
        {
            name: "Brazil",
            slug: "brazil",
            image: "brazil",
            url: "brazil",
            id: 1,
            description: "all about brazil. is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
            name: "Panama",
            slug: "panama",
            image: "panama",
            url: "panama",
            id: 2,
            description: "all about panama. Nam fermentum, leo ac lobortis tincidunt, justo felis semper nisi, sed facilisis quam ante a justo. Nam pulvinar nibh nec mi vestibulum cursus quis eget orci. Aenean faucibus faucibus ex, a imperdiet nibh luctus faucibus. Mauris porttitor, velit ac eleifend mattis, sem justo accumsan odio, ut mattis nulla nulla eu nibh. Cras justo risus, sollicitudin eget nulla a, consequat convallis tortor. Fusce eget neque metus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla facilisi. Sed aliquam nunc id lectus sagittis, ac elementum eros egestas. Aliquam sed tempor dui."

        },
        {
            name: "Hawaii",
                        slug: "hawaii",
            image: "hawaii",
            url: "hawaii",
            id: 3,
            description: "all about hawaii. Etiam iaculis, ex in semper fringilla, lorem augue maximus lorem, in aliquet ex massa non enim. Maecenas pharetra orci eu semper pharetra. Suspendisse vel elit semper, fringilla metus ac, pulvinar justo. Vestibulum nibh lacus, pellentesque non arcu vel, efficitur eleifend lorem. Duis ultrices bibendum orci, nec laoreet elit. In vulputate massa vel massa cursus gravida. Aliquam sed lacus pulvinar, imperdiet risus at, lacinia dolor. Maecenas pellentesque arcu mattis iaculis efficitur. Maecenas quis sem pulvinar, sodales neque eget, efficitur odio."

        },
        {
            name: "Jamaica",
                        slug: "jamaica",

            image: "jamaica",
            url: "jamaica",
            id: 4,
            description: "all about jamaica. Suspendisse lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis."

        }
    ]
  }
}
}
</script>
<style>
img{
   max-width: 600px;
    height: auto;
    width: 100%;
    max-height: 400px;
}
.destination-details{
    display:flex;
    justify-content: space-between;
}
p{
    margin: 0 40px;
    font-size: 20px;
    text-align: left;
}
</style>
