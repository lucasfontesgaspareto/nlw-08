import express from 'express'

import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedbacks-repository';
import { NodemailerMailAdapter } from './adapters/nodemailer/nodemailer-mail-adapter';

import { ListFeedbacksUseCase } from './use-cases/list-feedbacks-use-case';
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case';

export const routes = express.Router()

routes.get('/feedbacks', async (req, res) => {
  const prismaFeedbacksRepository = new PrismaFeedbacksRepository()
  const listFeedbacksUseCase = new ListFeedbacksUseCase(
    prismaFeedbacksRepository,
  )

  try {
    const feedbacks = await listFeedbacksUseCase.execute()

    return res.status(200).json({
      data: feedbacks
    })
  } catch (error) {
    return res.status(500).send((error as any).message)
  }
})

routes.post('/feedbacks', async (req, res) => {
  const {
    type,
    comment,
    screenshot,
  } = req.body

  const prismaFeedbacksRepository = new PrismaFeedbacksRepository()
  const nodemailerMailAdapter = new NodemailerMailAdapter()
  const submitFeedbackUseCase = new SubmitFeedbackUseCase(
    prismaFeedbacksRepository,
    nodemailerMailAdapter
  )

  try {
    await submitFeedbackUseCase.execute({
      type,
      comment,
      screenshot,
    })

    return res.status(201).send()
  } catch (error) {
    return res.status(500).send((error as any).message)
  }
})
