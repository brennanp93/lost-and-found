const Item = require("../../models/item");

module.exports = {
  index,
  create,
};

async function index(req, res) {
  const allItems = await Item.find({});
  res.json(allItems);
}

async function create(req, res) {
  try {
    const listItem = await Item.create(req.body);
    console.log(req.body, "BODAYYYY");
    res.json(listItem)
  } catch {
    res.status(404);
  }
}
