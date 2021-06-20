import constants from "../constants/index.js";

const indexController = (req, res) => {
  let data = constants.data;
  res.json(data);
};

export default {
  indexController,
};
