import {Router} from 'express';
import fileRoutes from './file.routes.js';
import folderRoutes from './folder.routes.js';
const router = Router()
router.use(fileRoutes)
router.use(folderRoutes)
const streamRoutes = router
export default streamRoutes
