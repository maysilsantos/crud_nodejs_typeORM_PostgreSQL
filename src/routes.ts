import { Router} from "express";
import { SubjectController } from "./controllers/SubjectController";
import { RoomController } from "./controllers/RoomController";
import { Room } from "./entities/Room";


const routes = Router()

routes.post(`/subject`, new SubjectController().create)
routes.post(`/room`, new RoomController().create)
//routes.post(`/room/:idRoom/create`, new VideoController().create)
routes.post(`/room/:idRoom/create`, new RoomController().createVideo)
routes.post(`/room/:idRoom/subject`, new RoomController().roomSubject)
routes.get(`/room/`, new RoomController().list)
export default routes