import { Router} from "express";
import { SubjectController } from "./controllers/SubjectController";
import { RoomController } from "./controllers/RoomController";
import { VideoController } from "./controllers/VideoController";
import { Room } from "./entities/Room";


const routes = Router()

routes.post(`/subject`, new SubjectController().create)
routes.post(`/room`, new RoomController().create)
//routes.post(`/room/:idRoom/create`, new VideoController().create)
routes.post(`/room/:idRoom/create`, new RoomController().createVideo)
export default routes