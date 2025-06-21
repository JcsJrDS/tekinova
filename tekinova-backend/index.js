const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/send', async (req, res) => {
  const { name, email, service, message } = req.body;

  // Configure o transporte SMTP com os dados do seu provedor de e-mail
  const transporter = nodemailer.createTransport({
    host: 'smtp.zoho.com',      // Para Zoho internacional (não use .com.br)
    port: 465,                  // Ou 587 se preferir STARTTLS
    secure: true,               // true para 465 (SSL), false para 587 (STARTTLS)
    auth: {
      user: 'contato@tekinova.com.br', // Seu e-mail Zoho completo
      pass: 'digite a senha'       // Sua senha do Zoho
    }
  });

  try {
    await transporter.sendMail({
      from: '"Site Tekinova" <contato@tekinova.com.br>',
      to: 'contato@tekinova.com.br',
      subject: `Novo contato do site - ${service || 'Contato'}`,
      text: `
        Nome: ${name}
        E-mail: ${email}
        Serviço: ${service}
        Mensagem: ${message}
      `,
      html: `
        <p><b>Nome:</b> ${name}</p>
        <p><b>E-mail:</b> ${email}</p>
        <p><b>Serviço:</b> ${service}</p>
        <p><b>Mensagem:</b><br/>${message}</p>
      `
    });
    res.json({ ok: true });
  } catch (error) {
    res.status(500).json({ ok: false, error: error.message });
  }
});

app.listen(3001, () => {
  console.log('Servidor rodando em http://localhost:3001');
});