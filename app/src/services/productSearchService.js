const { Client } = require("@elastic/elasticsearch");
const { search } = require("../routes");
const client = new Client({ node: "http://elasticsearch:9200" });

const getProductName = async (productName) => {
  let key = String(productName);

  let result = await client.search({
    index: "product_names",
    body: {
      query: {
        bool: {
          should: [
            {
              fuzzy: {
                "official name": {
                  value: key,
                  fuzziness: 3,
                },
              },
            },
            {
              prefix: {
                "official name": {
                  value: key,
                },
              },
            },
            {
              match_phrase_prefix: {
                "official name": key,
              },
            },
          ],
        },
      },
    },
  });

  // Search data array
  result = result.body['hits']['hits'];


  return Promise.all(result.map(async (val) => {
    return val['_source']['official name'];
  }));
};

module.exports = { getProductName };
