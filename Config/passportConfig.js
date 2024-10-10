import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import dotenv from 'dotenv';
dotenv.config();

// Configura o Passport com a estratégia do Google
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/callback", // URL de callback configurada
  },
  async (accessToken, refreshToken, profile, done) => {
    // Aqui você vai implementar a lógica de salvar ou verificar o usuário no banco de dados
    // usando o Prisma para interagir com a tabela de usuários.
    try {
      const user = await prisma.usuarioss.findUnique({ where: { googleId: profile.id } });
      if (user) {
        return done(null, user); // Usuário já existe
      } else {
        // Se o usuário não existir, criar um novo
        const newUser = await prisma.usuarioss.create({
          data: {
            googleId: profile.id,
            email: profile.emails[0].value,
            nome: profile.displayName
          }
        });
        return done(null, newUser);
      }
    } catch (error) {
      return done(error);
    }
  }
));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await prisma.usuarios.findUnique({ where: { id } });
    done(null, user);
  } catch (error) {
    done(error);
  }
});

export default passport;