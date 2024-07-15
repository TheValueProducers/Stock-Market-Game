const { Company } = require("../models");

const sendInfo = async (req, res) => {
  try {
    const { company_id } = req.body;
    const info = await Company.findOne({ where: { company_id } });

    if (!info) {
      return res.status(404).json({ message: 'Company not found' });
    }

    res.status(200).json(info);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = { sendInfo };