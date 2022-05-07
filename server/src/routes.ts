import express from 'express'
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case';
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedbacks-repository';
import { NodemailerMailAdapter } from './adapters/nodemailer/nodemailer-mail-adapter';

export const routes = express.Router()

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
