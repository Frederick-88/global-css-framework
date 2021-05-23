import { storiesOf } from "@storybook/vue";

storiesOf("GlobalUI/GlobalBaseDialog", module)
  .add("Default Dialog", () => {
    return {
      template: `
                <div>
                    <GlobalButton @click="isShowDefaultDialog = true">
                        Open default dialog
                    </GlobalButton>
                    
                    <GlobalBaseDialog 
                        :is-show="isShowDefaultDialog" 
                        title="Default dialog title" 
                        text="This is a dialog description" 
                        @close="isShowDefaultDialog = false"
                    >
                        <p>This is a slot</p>
                    </GlobalBaseDialog>
                </div>
                `,
      data() {
        return {
          isShowDefaultDialog: false,
        };
      },
    };
  })

  .add("Dialog Types", () => {
    return {
      template: `
                <div>
                    <GlobalButton @click="isShowDialogOneButton = true">
                        Open dialog with one button and custom text
                    </GlobalButton>
                    
                    <GlobalBaseDialog 
                        :is-show="isShowDialogOneButton" 
                        title="Dialog with one button and custom text" 
                        button1Text="Accept"
                        text="This is a dialog with one button description" 
                        :no-cancel="true"
                        @confirm="isShowDialogOneButton = false"
                        @close="isShowDialogOneButton = false"
                    >
                        <p>This is a slot</p>
                    </GlobalBaseDialog>


                    <GlobalButton @click="isShowDialogNoButton = true">
                    Open dialog with no button
                    </GlobalButton>

                    <GlobalBaseDialog 
                        :is-show="isShowDialogNoButton" 
                        title="Dialog with no button" 
                        text="This is a dialog with no button description" 
                        :no-button="true"
                        @close="isShowDialogNoButton = false"
                    >
                        <p>This is a slot</p>
                    </GlobalBaseDialog>

                    
                    <GlobalButton @click="isShowDialogMultilineButton = true">
                        Open dialog with multiline button
                    </GlobalButton>

                    <GlobalBaseDialog 
                        :is-show="isShowDialogMultilineButton" 
                        title="Dialog with multiline button" 
                        text="This is a dialog with multiline button description" 
                        :multiline-buttons="true"
                        @close="isShowDialogMultilineButton = false"
                    >
                        <p>This is a slot</p>
                    </GlobalBaseDialog>
                </div>
                `,
      data() {
        return {
          isShowDialogOneButton: false,
          isShowDialogNoButton: false,
          isShowDialogMultilineButton: false,
        };
      },
    };
  })

  .add("Primary Dialog", () => {
    return {
      template: `
                <div>
                    <GlobalButton :is-primary="true" @click="isShowPrimaryDialog = true">
                        Open default dialog
                    </GlobalButton>
                    
                    <GlobalBaseDialog 
                        :is-primary="true"
                        :is-show="isShowPrimaryDialog" 
                        title="Default primary dialog title" 
                        text="This is a primary dialog description" 
                        @close="isShowPrimaryDialog = false"
                    >
                        <p>This is a slot</p>
                    </GlobalBaseDialog>
                </div>
                `,
      data() {
        return {
          isShowPrimaryDialog: false,
        };
      },
    };
  })

  .add("Success Dialog", () => {
    return {
      template: `
                <div>
                    <GlobalButton :is-success="true" @click="isShowSuccessDialog = true">
                        Open default dialog
                    </GlobalButton>
                    
                    <GlobalBaseDialog 
                        :is-success="true"
                        :is-show="isShowSuccessDialog" 
                        title="Default success dialog title" 
                        text="This is a success dialog description" 
                        @close="isShowSuccessDialog = false"
                    >
                        <p>This is a slot</p>
                    </GlobalBaseDialog>
                </div>
                `,
      data() {
        return {
          isShowSuccessDialog: false,
        };
      },
    };
  })

  .add("Warning Dialog", () => {
    return {
      template: `
                <div>
                    <GlobalButton :is-warning="true" @click="isShowWarningDialog = true">
                        Open default dialog
                    </GlobalButton>
                    
                    <GlobalBaseDialog 
                        :is-warning="true"
                        :is-show="isShowWarningDialog" 
                        title="Default warning dialog title" 
                        text="This is a warning dialog description" 
                        @close="isShowWarningDialog = false"
                    >
                        <p>This is a slot</p>
                    </GlobalBaseDialog>
                </div>
                `,
      data() {
        return {
          isShowWarningDialog: false,
        };
      },
    };
  })

  .add("Danger Dialog", () => {
    return {
      template: `
                <div>
                    <GlobalButton :is-danger="true" @click="isShowDangerDialog = true">
                        Open default dialog
                    </GlobalButton>
                    
                    <GlobalBaseDialog 
                        :is-danger="true"
                        :is-show="isShowDangerDialog" 
                        title="Default danger dialog title" 
                        text="This is a danger dialog description" 
                        @close="isShowDangerDialog = false"
                    >
                        <p>This is a slot</p>
                    </GlobalBaseDialog>
                </div>
                `,
      data() {
        return {
          isShowDangerDialog: false,
        };
      },
    };
  });
