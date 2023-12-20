import { Request, Response } from "express";
import { subjectRepository } from "../repositories/SubjectRepository";

//CLASSE RESPONS[AVEL PELOS CONTROLADORES DE DISCIPLINA

export class SubjectController {
  async create(req: Request, res: Response) {
    // criar disciplina
    const { name } = req.body;

    if (!name) {
      return res.status(400).json("Bad Request");
    }

    try {
      //data mapper e active recording --> ver documentacao do typeORM
      // Uma entidade que extende uma classe e a partir dessa classe extendidade ela tem todas as funcoes para tratar com o banco de dados

      /**
       * Data Mapper
       *
       *  ele trabalha direto com repositorio e a partir dele faz todas as operacoes
       */

      /** Usando Data Mapper */

      const newSubject = subjectRepository.create({ name });

      await subjectRepository.save(newSubject) //save add informacoes no banco de dados

      return res.status(201).json(`Succesfully created Subject:, ${JSON.stringify(newSubject)}`)
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: `Internal Server Error` });
    }
  }
}

/***
 *
 *
 *
 *
 */
