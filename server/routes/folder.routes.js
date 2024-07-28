// routes/folderRoutes.js

import {Router} from 'express';
const router = Router()
import * as folder from '../controllers/folders.js';

router.post('/folders', folder.createFolder);
router.get('/folders', folder.getFolders);
router.get('/folders/:folderId/files', folder.getFilesInFolder);
const folderRoutes = router
export default folderRoutes
