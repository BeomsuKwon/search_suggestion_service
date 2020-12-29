const { Client } = require("@elastic/elasticsearch");
const { search } = require("../routes");
const client = new Client({ node: "http://elasticsearch:9200" });

const getProductName = async (productName) => {
  let key = String(productName);

  let result = await client.search({
    index: "product_name",
    body: {
      query: {
        bool: {
          should: [
            {
              match: {
                "ニックネーム.suggest": {
                  query: key,
                },
              },
              match: {
                "ニックネーム.readingform": {
                  query: key,
                  fuzziness: "AUTO",
                  operator: "and",
                },
              },
            },
          ],
        },
      },
    },
  });

  // Search data array
  result = result.body["hits"]["hits"];

  return Promise.all(
    result.map(async (val) => {
      return val["_source"]["ニックネーム"];
    })
  );
};

module.exports = { getProductName };
