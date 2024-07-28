// models/user.js
import { DataTypes } from "sequelize";
import { sequelize } from "./db.js";
import crypto from "node:crypto"
const User = sequelize.define("User",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: crypto.randomUUID()
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        isEmail:{
          arg: true,
          msg: "invalid Email"
        }
      },
      unique: {
        msg: "email already pre-exists",
      },

    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    files:{
      type: DataTypes.JSON
    },
    storageLimit: {
      type: DataTypes.INTEGER,
      defaultValue: 1024*1000*10
    },
    usedStorage: { type: DataTypes.INTEGER, defaultValue: 0 }
  },

  {
    defaultScope: {
      // Exclude password by default
      attributes: { exclude: ["password"] },
    },
    scopes: {
      // Include password when this scope is used
      withPassword: {
        attributes: { include: ["password"] },
      },
    },
  }
);

export default User;
