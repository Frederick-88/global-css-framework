<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />

    <h3>Global Buttons</h3>
    <div class="home-button__wrapper">
      <GlobalButton :is-primary="true">Global-Primary-Button</GlobalButton>
      <GlobalButton :is-primary-hollow="true"
        >Global-Primary-Hollow-Button</GlobalButton
      >
      <GlobalButton :is-success="true">Global-success-Button</GlobalButton>
      <GlobalButton :is-success-hollow="true"
        >Global-success-Hollow-Button</GlobalButton
      >
      <GlobalButton :is-warning="true">Global-warning-Button</GlobalButton>
      <GlobalButton :is-warning-hollow="true"
        >Global-warning-Hollow-Button</GlobalButton
      >
      <GlobalButton :is-danger="true">Global-danger-Button</GlobalButton>
      <GlobalButton :is-danger-hollow="true"
        >Global-danger-Hollow-Button</GlobalButton
      >
      <GlobalButton :is-light="true">Global-light-Button</GlobalButton>
      <GlobalButton :is-light-hollow="true"
        >Global-light-Hollow-Button</GlobalButton
      >
      <GlobalButton :is-dark="true">Global-dark-Button</GlobalButton>
      <GlobalButton :is-dark-hollow="true"
        >Global-dark-Hollow-Button</GlobalButton
      >
      <GlobalButton :is-primary="true" :is-tall="true"
        >Global-Primary-Tall-Button</GlobalButton
      >
      <GlobalButton :is-primary="true" :is-short="true"
        >Global-Primary-Short-Button</GlobalButton
      >
    </div>

    <!-- ---------------------------- -->
    <h3>Global Switch</h3>
    <div class="home__wrapper">
      <GlobalSwitch />
      <GlobalSwitch label="GlobalSwitch Label" />
      <GlobalSwitch :is-disabled="true" />
      <GlobalSwitch :is-checked="true" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style lang="scss">
.home {
  margin-bottom: 40px;
}
.home-button__wrapper {
  margin: 0 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
.home__wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 40px;
  margin-top: 2rem;
}
.home__wrapper > * {
  margin-right: 20px;
}
</style>
