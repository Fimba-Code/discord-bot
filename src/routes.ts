import { Router } from "express"
import Members from "./controller/Members"

const routes = Router()

routes.get("/members", Members.index)

export default routes
