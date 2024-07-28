// controllers/fileController.js
import { handleFileType } from "../config/handlers.js";
import * as FILE from "../config/multer.js";
import File from "../Model/Files.js";
import Folder from "../Model/Folder.js";

export const uploadFile = async (req, res) => {
  try {
    const { originalname, mimetype, size, buffer } = req.file;
    // parsing the params for aws-s3 config to retain the file

    const id = req.user.id;
    const params = FILE.params;
    params.contentType = mimetype;
    params.Body = buffer;
    params.Key = `/${req.user.id}/${originalname}`;
    // storing the file
    const CloudUpload = FILE.S3.upload(params).promise();
    CloudUpload.then(async (data) => {
      console.log(data);
      const { Bucket, ETag, ...rest } = data;
      const fileData = {
        fileName: originalname,
        mimeType: mimetype,
        fileType: handleFileType(originalname),
        size: size,
        s3Key: key,
        s3Url: location,
        folderId: req.body.folderId,
      };
      const file = await File.create(fileData);

      res.status(201).json(file);
    }).catch((err) => {
      console.log(err);
      // throw new Error("", {
      //   message:"failed to backup file"


      // });
      // error.message = "failed to backup file";
      
      /*       res.status(500).json({
        message: "failed to backup file",
      }); */
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const deleteFile = async (req, res) => {
  const file = await File.findOneAndDelete();
};
export const uploadIntoFolder = async (req, res) => {
  try {
    const { originalname, mimetype, size } = req.file;
    const folder = await Folder.findOrCreate({
      where: { id: req.body.folderId, user: req.user.id },
    });
    if (!folder) {
      return res.status(404).json({ message: "Folder not found" });
    }
    params.key = `/${req.user.id} ${folder.id}/${originalname}`;
    // parsing the params for aws-s3 config to retain the file
    const params = FILE.params;
    params.contentType = mimetype;
    params.Body = req.file.fileBuffer;
    params.key = `/${req.user.id}/${originalname}`;
    // storing the file
    const { location, key } = FILE.S3.upload(params, (err, data) => {
      if (err) {
        console.log(err);
        res.status(500).json({
          message: "failed to backup file",
        });
      } else {
        const { Bucket, ETag, ...rest } = data;
        return rest;
      }
    });
    const fileData = {
      fileName: originalname,
      mimeType: mimetype,
      size: size,
      s3Key: key,
      s3Url: location,
      folderId: req.body.folderId,
    };

    const file = await File.create(fileData);
    console.log(file);
    res.status(201).json(file);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
export const editFileName = (req, res) => {};
export const deleteFiles = (req, res) => {};
export const getFile = (req, res) => {};
export const uploadFiles = (req, res) => {};
