import laptopWorkingJson from "@/assets/files/laptop-working.json";
import rocketLoader from "@/assets/files/rocket-loader.json";

import { storiesOf } from "@storybook/vue";

storiesOf("GlobalUI/GlobalAnimationLoader", module)
  .add("Default Animation Loader", () => {
    return {
      template: `
                <div>
                <GlobalAnimationLoader
                    :file="jsonFile"
                    text="Default width/size"
                />
                </div>
                `,
      data() {
        return {
          // To use GlobalAnimationLoader you need to import your JSON file
          // and define it in Vue-Data instance before send it as a prop
          jsonFile: rocketLoader,
        };
      },
    };
  })

  .add("Another Animation Loader Example", () => {
    return {
      template: `
                <div>
                <GlobalAnimationLoader
                    :file="jsonFile"
                    :width= "400"
                    text="Playing JSON file with GlobalAnimationLoader"
                />
                </div>
                `,
      data() {
        return {
          // To use GlobalAnimationLoader you need to import your JSON file
          // and define it in Vue-Data instance before send it as a prop
          jsonFile: laptopWorkingJson,
        };
      },
    };
  });
