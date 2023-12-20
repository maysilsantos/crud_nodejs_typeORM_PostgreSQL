//SALVAR OS VIDEO SDE UMA AULA
import { Request, Response } from "express"
import { videoRepository } from "../repositories/VideoRepository"

//testar biblioteca que faz validacao da existenci das variaveis aqui
export class VideoController {
   async create( req: Request, res: Response) {

      const { title, url } = req.body
      const { idRoom } = req.params


      try{

         const newVideo = videoRepository.create({title, url})

         await videoRepository.save(newVideo)

         return res.status(201).json(`Succesfully create new Video ${JSON.stringify(newVideo)}`)

      } catch (error){
         console.log(error)
         return res.status(500).json("Internal Server ERror")
      }

   }


}