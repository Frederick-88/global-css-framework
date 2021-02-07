<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <GlobalButton :is-primary="true">Global-Primary-Button</GlobalButton>
    <GlobalButton :is-primary-hollow="true"
      >Global-Primary-Hollow-Button</GlobalButton
    >
    <GlobalButton :is-primary="true" :is-tall="true"
      >Global-Primary-Tall-Button</GlobalButton
    >
    <GlobalButton :is-primary="true" :is-short="true"
      >Global-Primary-Short-Button</GlobalButton
    >
    <GlobalInput />
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
