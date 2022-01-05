import { EggPlugin } from "egg";

const plugin: EggPlugin = {
  mysql: {
    enable: true,
    package: "egg-mysql",
  },
};

export default plugin;
