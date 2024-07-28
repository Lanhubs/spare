// routes/fileRoutes.js
import * as file from "../controllers/files.js";
import * as auth from "../config/authorizations.js";
import { upload } from "../config/multer.js";
import { Router } from "express";
const router = Router();
router
  .route("/files")
  .post(auth.authorizeToken, upload.single("file"), file.uploadFiles)
  .delete(auth.authorizeToken, file.deleteFiles);
router
  .route("/file")
  .get(auth.authorizeToken,file.getFile)
  .post(auth.authorizeToken, upload.single("file"), file.uploadFile)
  .delete(file.deleteFile);
const fileRoutes = router;
export default fileRoutes;
