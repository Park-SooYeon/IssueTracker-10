const { label } = require('./database');
const errorMessages = require('../services/errorMessages');

const findLabelAll = async () => {
  try {
    const labels = await label.findAll({
      attributes: ['id', 'title', 'description', 'color'],
    });

    return labels;
  } catch (err) {
    throw new Error(errorMessages.label.notFoundError);
  }
};

const createLabel = async (labelData) => {
  try {
    const { title, description, color } = labelData;
    const isExistLabel = await label.findOne({
      where: { title },
      raw: true,
    });
    if (isExistLabel) return false;
    await label.create({ title, description, color });
    return true;
  } catch (err) {
    throw new Error(errorMessages.label.createFailed);
  }
};

module.exports = {
  findLabelAll,
  createLabel,
};
