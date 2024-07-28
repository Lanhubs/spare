import { generateToken } from "../config/authorizations.js";
import { handleErrorMsg } from "../config/handlers.js";
import User from "../Model/User.js";
import Crypto from "crypto-js";
const key = "Spare-Me";

export function encryptPwd(password) {
  const encryptedPwd = Crypto.AES.encrypt(password, key).toString();
  return encryptedPwd;
}
export function decryptPassword(password, encryptedPwd) {
  const decryptPwd = Crypto.AES.decrypt(encryptedPwd, key);
  const decryptedPassword = decryptPwd.toString(Crypto.enc.Utf8);
  return password === decryptedPassword;
}
export const signUp = (req, res) => {
  var { email } = req.body;
  const hashed = encryptPwd(req.body.password);
  console.log(hashed);

  User.create({
    email,
    password: hashed,
  })
    .then((docs) => {
      res
        .status(200)
        .json({
          token: generateToken(docs.email, docs.id),
          msg: "Welcome onboard 📦",
        });
    })
    .catch((e) => {
      console.log(e)
      res.status(500).json({
        msg: handleErrorMsg(e),
      });
    });
};
export const signIn = (req, res) => {
  const { email, password } = req.body;

  User.scope("withPassword")
    .findOne({
      where: {
        email,
      },
    })
    .then((docs) => {
      const pwd = decryptPassword(password, docs.password);
      
      if (pwd) {
        res.status(200).json({
          msg: "logged in successfully",
          token: generateToken(docs.email, docs.id),
        });
      } else {
        res.status(500).json({
          msg: "invalid email or password",
        });
      }
    });
};
export const signUpWithGoogle = (req, res) => {};
export const signInWithGoogle = (req, res) => {};
export const getUser =()=>{}
