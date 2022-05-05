import { SubmitFeedbackUseCase } from "./submit-feedback-use-case"

const createFeedbackSpy = jest.fn()
const sendMailSpy = jest.fn()

describe('Submit feedback', () => {
  const submitFeedback = new SubmitFeedbackUseCase(
    { create: createFeedbackSpy },
    { sendMail: sendMailSpy }
  )

  it('should be able to submit a feedback', async () => {
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: 'Tá tudo bugado!!!',
      screenshot: 'data:image/png;base64',
    })).resolves.not.toThrow()

    await expect(createFeedbackSpy).toBeCalled()
    await expect(sendMailSpy).toBeCalled()
  })

  it('should not be able to submit a feedback without type', async () => {
    await expect(submitFeedback.execute({
      type: '',
      comment: 'Tá tudo bugado!!!',
      screenshot: 'data:image/png;base64',
    })).rejects.toThrow()
  })

  it('should not be able to submit a feedback without type', async () => {
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: '',
      screenshot: 'data:image/png;base64',
    })).rejects.toThrow()
  })

  it('should not be able to submit a feedback without valid screenshot', async () => {
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: 'Tá tudo bugado!!!',
      screenshot: 'test',
    })).rejects.toThrow()
  })
})