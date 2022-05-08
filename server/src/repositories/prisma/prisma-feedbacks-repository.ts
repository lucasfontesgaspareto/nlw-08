import { prisma } from "../../prisma";
import { FeedbackCreateData, FeedbacksRepository } from "../feedbacks-repository";

export class PrismaFeedbacksRepository implements FeedbacksRepository {
  async create({ type, comment, screenshot }: FeedbackCreateData) {
    await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot,
      }
    })
  }

  async list() {
    const feedbacks = await prisma.feedback.findMany()
    console.log(feedbacks)
    return feedbacks.map(feedback => feedback as FeedbackCreateData)
  }
}