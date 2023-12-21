//SALVAR OS VIDEO SDE UMA AULA
import { Request, Response } from "express";
import { roomRepository } from "../repositories/RoomRepositoriy";
import { videoRepository } from "../repositories/VideoRepository";
import { subjectRepository } from "../repositories/SubjectRepository";

//testar biblioteca que faz validacao da existenci das variaveis aqui
export class RoomController {
   async create(req: Request, res: Response) {
      const { name, description } = req.body;

      try {
         const newRoom = roomRepository.create({ name, description });

         await roomRepository.save(newRoom);

         return res
            .status(201)
            .json(`Succesfully create new Room ${JSON.stringify(newRoom)}`);
      } catch (error) {
         console.log(error);
         return res.status(500).json("Internal Server ERror");
      }
   }

   async createVideo(req: Request, res: Response) {
      const { title, url } = req.body;
      const { idRoom } = req.params;

      try {
         const room = await roomRepository.findOneBy({ id: Number(idRoom) });

         if (!room) {
            return res.status(404).json({ message: "Aula nao existe" });
         }

         const newVideo = videoRepository.create({
            title,
            url,
            room,
         });

         await videoRepository.save(newVideo);

         return res
            .status(201)
            .json(`Succesfully create new Video ${JSON.stringify(newVideo)}`);
      } catch (error) {
         console.log(error);
         return res.status(500).json("Internal Server ERror");
      }
   }

   async roomSubject(req: Request, res: Response) {
		const { subject_id } = req.body
		const { idRoom } = req.params

		try {
			const room = await roomRepository.findOneBy({ id: Number(idRoom) })

			if (!room) {
				return res.status(404).json({ message: 'Aula não existe' })
			}

			const subject = await subjectRepository.findOneBy({
				id: Number(subject_id),
			})

			if (!subject) {
				return res.status(404).json({ message: 'Disciplina não existe' })
			}

			const roomUpdate = {
				...room,
				subjects: [subject],
			}

			await roomRepository.save(roomUpdate)

			return res.status(200).json(roomUpdate)
		} catch (error) {
			console.log(error)
			return res.status(500).json({ message: 'Internal Sever Error' })
		}
	}


   async list( req: Request, res: Response){


      try {
         const rooms = await roomRepository.find({
            relations: {
               subjects: true,
               videos: true
            }


         })

         res.status(200).json(rooms)
      } catch (error) {
         console.log(error)
			return res.status(500).json({ message: 'Internal Sever Error' })
         
      }
   }

}
