const Item = require("../../models/item");

module.exports = {
  index,
  create,
  singleBeachItems,
};

async function singleBeachItems(req, res) {
  let { id } = req.params;
  const itemsByBeach = await Item.find({ location: id });
  console.log(itemsByBeach, "HELLO");
  res.json(itemsByBeach)
}

async function index(req, res) {
  const allItems = await Item.find({});
  res.json(allItems);
}

async function create(req, res) {
  try {
    const listItem = await Item.create(req.body);
    // console.log(req.body, "BODAYYYY");
    res.json(listItem);
  } catch {
    res.status(404);
  }
}
