<template>
  <div>
    <h1> Not Found </h1>
    <p>
      Ooops we couldn't find that page. Try going
      <router-link :to="{ name: 'Home' }">home</router-link>
    </p>
  </div>
</template>
