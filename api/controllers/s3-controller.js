const logic = require('../logic');

const s3Upload = async (req, res) => { // Uploading specific s3 object
    try {
        const logicResult = await logic.s3.s3UploadLogic(req.body);

        return res.status(200).json({ result: logicResult }); 
    } catch (err) {
        return res.status(500).json({ errror: err.message });
    };
};

const s3Delete = async (req, res) => { // Will delete s3 object based off of the file name 
    try {
        const logicResult = await logic.s3.s3DeleteLogic(req.body);

        return res.status(200).json({ logicResult });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    };
};

module.exports = {
    s3Upload,
    s3Delete,
};
