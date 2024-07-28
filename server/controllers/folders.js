import AWS from 'aws-sdk';
import Folder from '../Model/Folder.js';

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
});

export const createFolder = async (req, res) => {
    const { name, path } = req.body;

    // Create folder in S3
    const s3FolderPath = `${path}/`;
    const params = {
        Bucket: process.env.S3_BUCKET_NAME,
        Key: s3FolderPath,
    };

    try {
        await s3.putObject(params).promise();

        // Create folder in MySQL
        const folder = await Folder.create({ name, path: s3FolderPath });
        res.status(201).json(folder);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

};

export const getFolders = async (req, res) => {
    try {
        const folders = await Folder.findAll();
        res.status(200).json(folders);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getFilesInFolder = async (req, res) => {
    try {
        const files = await File.findAll({ where: { folderId: req.params.folderId } });
        res.status(200).json(files);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
