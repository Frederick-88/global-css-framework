import { storiesOf } from "@storybook/vue";

storiesOf("GlobalUI/GlobalCanvasModal", module)
  .add("Default Canvas Modal", () => {
    return {
      template: `
                <div>
                <GlobalButton @click="isShowDefaultCanvasModal = true">
                    Open default canvas modal
                </GlobalButton>

                <GlobalCanvasModal
                    :is-show="isShowDefaultCanvasModal"
                    @close="isShowDefaultCanvasModal = false"
                >
                    <h3>Welcome!</h3>
                    <p>This is the slot part of canvas modal</p>
                </GlobalCanvasModal>
                </div>
                `,
      data() {
        return {
          isShowDefaultCanvasModal: false,
        };
      },
    };
  })

  .add("Primary Canvas Modal", () => {
    return {
      template: `
                  <div>
                  <GlobalButton :is-primary="true" @click="isShowPrimaryCanvasModal = true">
                      Open primary canvas modal
                  </GlobalButton>
  
                  <GlobalCanvasModal
                      :is-show="isShowPrimaryCanvasModal"
                      :is-primary="true"
                      title="It's OFFEO Day! - Primary"
                      icon="icon-offeo"
                      @close="isShowPrimaryCanvasModal = false"
                  >
                      <h3>Welcome!</h3>
                      <p>This is the slot part of canvas modal</p>
                  </GlobalCanvasModal>
                  </div>
                  `,
      data() {
        return {
          isShowPrimaryCanvasModal: false,
        };
      },
    };
  })

  .add("Success Canvas Modal", () => {
    return {
      template: `
                  <div>
                  <GlobalButton :is-success="true" @click="isShowSuccessCanvasModal = true">
                      Open success canvas modal
                  </GlobalButton>
  
                  <GlobalCanvasModal
                      :is-show="isShowSuccessCanvasModal"
                      :is-success="true"
                      title="It's OFFEO Day! - Success"
                      icon="icon-offeo"
                      @close="isShowSuccessCanvasModal = false"
                  >
                      <h3>Welcome!</h3>
                      <p>This is the slot part of canvas modal</p>
                  </GlobalCanvasModal>
                  </div>
                  `,
      data() {
        return {
          isShowSuccessCanvasModal: false,
        };
      },
    };
  })

  .add("Warning Canvas Modal", () => {
    return {
      template: `
                  <div>
                  <GlobalButton :is-warning="true" @click="isShowWarningCanvasModal = true">
                      Open warning canvas modal
                  </GlobalButton>
  
                  <GlobalCanvasModal
                      :is-show="isShowWarningCanvasModal"
                      :is-warning="true"
                      title="It's OFFEO Day! - Warning"
                      icon="icon-offeo"
                      @close="isShowWarningCanvasModal = false"
                  >
                      <h3>Welcome!</h3>
                      <p>This is the slot part of canvas modal</p>
                  </GlobalCanvasModal>
                  </div>
                  `,
      data() {
        return {
          isShowWarningCanvasModal: false,
        };
      },
    };
  })

  .add("Danger Canvas Modal", () => {
    return {
      template: `
                  <div>
                  <GlobalButton :is-danger="true" @click="isShowDangerCanvasModal = true">
                      Open danger canvas modal
                  </GlobalButton>
  
                  <GlobalCanvasModal
                      :is-show="isShowDangerCanvasModal"
                      :is-danger="true"
                      title="It's OFFEO Day! - Danger"
                      icon="icon-offeo"
                      @close="isShowDangerCanvasModal = false"
                  >
                      <h3>Welcome!</h3>
                      <p>This is the slot part of canvas modal</p>
                  </GlobalCanvasModal>
                  </div>
                  `,
      data() {
        return {
          isShowDangerCanvasModal: false,
        };
      },
    };
  });
