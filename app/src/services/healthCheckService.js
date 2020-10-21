const { Client } = require("@elastic/elasticsearch");
const client = new Client({ node: "http://elasticsearch:9200" });

const es = () => {
  client
    .ping()
    .then((res) => {
      console.log('ES: OK!');
    })
    .catch((err) => {
      console.error(err);
    });
};

module.exports = { es };
