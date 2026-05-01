import { sendMail } from "../utils/mailer.js";
import ErrorService from "./error.service.js";

export default class InquiryService {
    async sendInquiry(data) {
        const { name, surname, phone, email, inquiry } = data;

        const from = `"${name} ${surname}" <${process.env.SMTP_MAIL}>`;
        const to = process.env.SMTP_MAIL; // Correo destino
        const subject = "Consulta Web";
        const contentHtml = `
        <div>
            <p>Nombre: ${name}</p>
            <p>Apellido: ${surname}</p>
            <p>Teléfono: ${phone}</p>
            <p>Email: ${email}</p>
            <p>Consulta: ${inquiry}</p>
        </div>`;

        const result = await sendMail(from, to, subject, contentHtml);

        if (!result) {
            throw new ErrorService("Error al enviar el correo");
        }

        return result;
    }
}