//SALVAR OS VIDEO SDE UMA AULA
import { Request,Response } from "express"
import { roomRepository } from "../repositories/RoomRepositoriy"
import { videoRepository } from "../repositories/VideoRepository"

//testar biblioteca que faz validacao da existenci das variaveis aqui
export class RoomController {
   async create( req: Request, res: Response) {

      const { name, description } = req.body


      try{

         const newRoom = roomRepository.create({name, description})

         await roomRepository.save(newRoom)

         return res.status(201).json(`Succesfully create new Room ${JSON.stringify(newRoom)}`)

      } catch (error){
         console.log(error)
         return res.status(500).json("Internal Server ERror")
      }

   }

   async createVideo( req: Request, res: Response) {

      const { title, url } = req.body
      const { idRoom } = req.params


      try{

         const room =  await roomRepository.findOneBy({id: Number(idRoom)})

         if(!room){
            return res.status(404).json({ message: 'Aula nao existe'})
         }

         const newVideo = videoRepository.create({
            title,
            url,
            room
         })

         await videoRepository.save(newVideo)

         return res.status(201).json(`Succesfully create new Video ${JSON.stringify(newVideo)}`)

      } catch (error){
         console.log(error)
         return res.status(500).json("Internal Server ERror")
      }

   }


   

}