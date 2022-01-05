import { EggAppConfig, PowerPartial } from "egg";

export default () => {
  const config: PowerPartial<EggAppConfig> = {};
  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: "apple002.mysql.rds.aliyuncs.com",
      // 端口号
      port: "3306",
      // 用户名
      user: "wm_deploy_test",
      // 密码
      password: "K86dHdnmyRd",
      // 数据库名
      database: "deploy_test",
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };

  return config;
};
