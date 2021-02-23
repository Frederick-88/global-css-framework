<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />

    <h3>Global Buttons</h3>
    <i class="icon icon-lock" style="color: black"></i>
    <i class="icon icon-close" style="color: black"></i>
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

    <!------------------------------- -->
    <h3>Global Switch</h3>
    <div class="home__wrapper">
      <GlobalSwitch />
      <GlobalSwitch label="GlobalSwitch Label" />
      <GlobalSwitch :is-disabled="true" />
      <GlobalSwitch :is-checked="true" />
    </div>

    <!------------------------------- -->
    <h3>Global Checkbox</h3>
    <div class="home__wrapper">
      <input type="checkbox" />
      <GlobalCheckbox />
      <GlobalCheckbox label="remember me" />
      <GlobalCheckbox :is-checked="true" label="checked-default" />
      <GlobalCheckbox :is-checked="true" :is-primary="true" label="primary" />
      <GlobalCheckbox :is-checked="true" :is-success="true" label="success" />
      <GlobalCheckbox :is-checked="true" :is-warning="true" label="warning" />
      <GlobalCheckbox :is-checked="true" :is-danger="true" label="danger" />
    </div>

    <!------------------------------- -->
    <h3>Global Input</h3>
    <div class="home__wrapper--no-flex">
      <GlobalInput />
      <GlobalInput placeholder="Disabled Input" :is-disabled="true" />
      <GlobalInput placeholder="Readonly Input" :is-read-only="true" />
      <GlobalInput value="Input with value in first place" />
      <GlobalInput type="password" value="password" />
    </div>
    <div class="home__wrapper--no-flex">
      <GlobalInput label="Your phone number?" placeholder="085835538888" />
      <GlobalInput :is-tall="true" placeholder="Tall Input" />
      <GlobalInput :is-short="true" placeholder="Short Input" />
    </div>
    <div class="home__wrapper--no-flex">
      <GlobalInput :is-success="true" message="Your input success message" />
      <br />
      <br />
      <GlobalInput :is-warning="true" message="Your input warning message" />
      <br />
      <br />
      <GlobalInput :is-error="true" message="Your input error message" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style lang="scss">
@import "@/assets/icomoon/style.scss";

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
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 0 40px;
  margin-top: 2rem;
}

.home__wrapper--no-flex {
  margin: 0 40px;
  margin-top: 2rem;
}

.home__wrapper--no-flex > * {
  margin-top: 10px;
}

.home__wrapper > * {
  margin-right: 20px;
}
</style>
