const SUCCESS_MSG = require('./successMessages');
const ERROR_MSG = require('./errorMessages');

const checkValidation = {
  files: (fileData) => {
    const file = fileData;
    if (!file) return false;
    return true;
  },
};

const uploadFile = async (req, res) => {
  try {
    const { file } = req;
    if (!checkValidation.files(file)) res.status(400).json({ message: ERROR_MSG.invalid });
    const filePath = process.env.BASE_URL + file.filename;
    res.status(200).json({ message: SUCCESS_MSG.create, data: filePath });
  } catch (err) {
    res.status(500).json({ message: ERROR_MSG.server });
  }
};

module.exports = uploadFile;
