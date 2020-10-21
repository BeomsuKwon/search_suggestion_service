var router = require("express").Router();
var productSearchService = require("../../services/productSearchService");

router.get("/", async (req, res) => {
  try {
    res.send(await productSearchService.getProductName(''));
  } catch (error) {
    res.statusCode = 500;
    res.send(error);
  }
});

router.get("/:productName", async (req, res, next) => {
  try {
    let productName = req.params['productName'];

    const result = await productSearchService.getProductName(productName);

    res.send(result);
  } catch (error) {
    res.statusCode = 500;
    res.send(error)
  }
});

module.exports = router;
