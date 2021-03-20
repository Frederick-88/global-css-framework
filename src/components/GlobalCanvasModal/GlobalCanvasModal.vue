<template>
  <section class="global-canvas-modal" :class="{ 'is-show': isShow }">
    <div class="global-canvas-modal__overlay" @click="$emit('close')"></div>

    <div
      class="global-canvas-modal__content"
      :style="styleObject"
      :class="{ 'no-title': !title }"
    >
      <button
        class="global-canvas-modal__close-button"
        type="button"
        @click="$emit('close')"
      >
        <i class="icon icon-close"></i>
      </button>

      <div
        v-if="title"
        class="global-canvas-modal__header"
        :class="canvasHeaderClass"
      >
        <h2 v-if="icon" class="title">
          <i class="icon" :class="[icon]"></i>
          <span v-html="title"></span>
        </h2>
        <template v-else>
          <h2 class="title" v-html="title"></h2>
        </template>
      </div>

      <div class="global-canvas-modal__main">
        <div class="content">
          <slot />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "GlobalCanvasModal",
  props: {
    title: { type: String, default: "" },
    /**
     * Make sure you have icon files so you can define your own icon in your place <br/>
     * Here, we integrated icomoon then we can have icon by adding "icon-tick" class. <br/>
     * So, for the 'icon' props we can just put "icon-tick"
     */
    icon: { type: String, default: "" },
    isShow: { type: Boolean, default: false },
    maxWidth: { type: Number, default: 0 },

    isPrimary: { type: Boolean, default: false },
    isWarning: { type: Boolean, default: false },
    isSuccess: { type: Boolean, default: false },
    isDanger: { type: Boolean, default: false },
  },
  computed: {
    styleObject() {
      const styleObject = {};

      if (this.maxWidth !== 0) styleObject.maxWidth = `${this.maxWidth}px`;

      return styleObject;
    },
    canvasHeaderClass() {
      const classList = [];

      if (!this.isSuccess && !this.isDanger && !this.isWarning)
        classList.push("canvas-header--primary");
      if (this.isSuccess) classList.push("canvas-header--success");
      if (this.isDanger) classList.push("canvas-header--danger");
      if (this.isWarning) classList.push("canvas-header--warning");

      return classList;
    },
  },
};
</script>

<style lang="scss">
.global-canvas-modal {
  position: fixed;
  align-items: center;
  display: none;
  justify-content: center;
  left: 0;
  bottom: 0;
  right: 0;
  top: 0;
  z-index: 100;
  overflow: hidden;
  color: $darkGrey4;
  padding: 20px;
  text-align: center;

  &.is-show {
    display: flex;
  }
}

.global-canvas-modal__overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0%;
  left: 0%;
  background: rgba(0, 0, 0, 0.4);
  cursor: pointer;
}

.global-canvas-modal__content {
  position: relative;
  z-index: 2;
  width: 100%;
  background: $lightGrey8;
  max-width: 1100px;
  max-height: 90vh;
  height: auto;
  border-radius: 4px;
  overflow: auto;
  display: flex;
  flex-direction: column;

  &.no-title {
    .global-canvas-modal__main .content {
      padding: 50px 30px 30px 30px;
    }

    .global-canvas-modal__close-button {
      color: $darkGrey4;
    }
  }
}

.global-canvas-modal__close-button {
  background: none;
  border: 0;
  position: absolute;
  top: 20px;
  cursor: pointer;
  right: 20px;
  z-index: 2;
  font-size: 1rem;
  color: #fff;

  &:hover,
  &:focus {
    background: transparent;
  }
}

.global-canvas-modal__header {
  padding: 20px 30px;
  text-align: left;
  border-radius: 4px 4px 0 0;
  color: #fff;

  .icon {
    color: #fff;
    display: inline-block;
    margin-right: 10px;
    font-size: 1.5rem;
  }

  .title {
    margin: 0;
    font-size: 1.25rem;
    font-weight: 600;
    display: flex;
    text-align: left;
    align-items: center;
  }

  &.canvas-header--primary {
    background-image: linear-gradient(
      to right,
      $primary1 0%,
      $primary2 51%,
      $primary1 100%
    );
  }

  &.canvas-header--success {
    background-image: linear-gradient(
      to right,
      $success1 0%,
      $success2 51%,
      $success1 100%
    );
  }

  &.canvas-header--warning {
    background-image: linear-gradient(
      to right,
      $warning1 0%,
      $warning2 51%,
      $warning1 100%
    );
  }

  &.canvas-header--danger {
    background-image: linear-gradient(
      to right,
      $danger1 0%,
      $danger2 51%,
      $danger1 100%
    );
  }
}

.global-canvas-modal__main {
  position: relative;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  .content {
    padding: 30px;
    height: 100%;
    overflow: auto;
    scroll-behavior: smooth;
  }
}
</style>
