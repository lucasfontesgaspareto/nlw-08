import { ListFeedbacksUseCase } from "./list-feedbacks-use-case"

const createFeedbackSpy = jest.fn()
const listFeedbackSpy = jest.fn()

describe('List feedback', () => {
  const listFeedback = new ListFeedbacksUseCase(
    {
      create: createFeedbackSpy,
      list: listFeedbackSpy,
    }
  )

  it('should be able to list feedbacks', async () => {
    await expect(listFeedback.execute()).resolves.not.toThrow()
    await expect(listFeedbackSpy).toBeCalled()
  })
})