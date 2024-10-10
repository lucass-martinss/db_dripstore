import express from 'express';
import passport from 'passport';
import { OAuth2Client } from 'google-auth-library';
import { PrismaClient } from "@prisma/client"; // Certifique-se de ajustar o caminho do Prisma
import jwt from 'jsonwebtoken'; // Para gerar tokens JWT

const prisma = new PrismaClient();
const route = express.Router();
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// Rota de login com Google
route.get('/google', passport.authenticate('google', {
  scope: ['profile', 'email'],
}));

route.post('/google/callback', async (req, res) => {
    const { idToken } = req.body; // O idToken deve vir do corpo da requisição
  console.log(req)
    try {
      const ticket = await client.verifyIdToken({
          idToken,
          audience: process.env.GOOGLE_CLIENT_ID,
      });
      const Jpayload = ticket.getPayload();
      console.log(Jpayload)
      console.log(ticket)
    
      // Dados do usuário
      const { sub: googleId, email } = Jpayload;
    
      // Verifique se o usuário já existe no banco de dados
      let user = await prisma.usuarios.findUnique({ 
        where: { email },
        include: {
        enderecos: true,
      }, });
      if (!user) {
        // Se o usuário não existe, criar um novo
        user = await prisma.usuarios.create({
          data: {
            googleId,
            email,
            nome: Jpayload.given_name,  // Você pode salvar mais dados como o nome
            telefone: "",
            senha: "", // Senha pode ser null, pois autenticação OAuth não exige senha
            cpf: "",
            enderecos: {
                create:{
                  rua: "",
                  bairro: "",
                  cidade: "",
                  cep: "",
                  complemento: "",
                },
            },
          },
        });
        
      }
     
      // Gera o token JWT
      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  
      // Redireciona para o frontend com o token
      res.status(200).json({ message: 'Usuário logado com sucesso', token, user});
    } catch (error) {
      console.error("Erro durante a verificação do token:", error);
      res.status(400).json({ error: 'Token inválido' });
    }
  });

// Rota de login com Facebook
route.get('/facebook', passport.authenticate('facebook', {
  scope: ['email'],
}));

// Callback do Facebook
route.get('/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/' }),
  (req, res) => {
    // Sucesso, redireciona para a página inicial ou outra página
    res.redirect('/');
  }
);

export default route;
