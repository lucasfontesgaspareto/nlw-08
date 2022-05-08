import { FeedbacksRepository } from "../repositories/feedbacks-repository";

export class ListFeedbacksUseCase {
  constructor(
    private feedbacksRepository: FeedbacksRepository,
  ) {}

  async execute() {
    const feedbacks = await this.feedbacksRepository.list()
    return feedbacks
  }
}