import { Router, Request, Response, NextFunction } from 'express'
import dotenv from 'dotenv';


dotenv.config();

const router: Router = Router();

router.get("/", (_: Request, res: Response) => {
  res.send("Map Info api");
});

const openai = require('./openai/openai')
router.use('/openai', openai);

const user = require('./user/user')
router.use('/user', user);

module.exports = router