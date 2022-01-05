const Service = require("egg").Service;
class Home extends Service {
  async homeList() {
    const { app } = this;
    const list  = await app.mysql.query(
      `SELECT * FROM deploy_test.deploy_env`
    ) 
    return list
  }
  async getDeployEnum(){
    const { app } = this;
    const list  = await app.mysql.query(
      `SELECT * FROM deploy_test.deploy_enum`
    ) 
    return list
  }
}

module.exports = Home;
