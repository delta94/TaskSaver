import jwt from 'jsonwebtoken';

export const generateToken = (firstName: string, lastName: string) => {
  return jwt.sign({ firstName, lastName },
    process.env.SECRET_KEY, {
    expiresIn: '1H'
  });
};