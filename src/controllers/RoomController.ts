//SALVAR OS VIDEO SDE UMA AULA
import { Request,Response } from "express"
import { roomRepository } from "../repositories/RoomRepositoriy"

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


}