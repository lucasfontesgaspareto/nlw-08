import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "35141e65f364ee",
    pass: "f8e7b7aa4ea495"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Lucas Fontes Gaspareto <lucasfontesgaspareto@gmail.com>',
      subject: subject,
      html: body
    })
  }
}