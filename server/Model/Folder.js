// models/folder.js
import { DataTypes } from "sequelize";
import { sequelize } from "./db.js";
import User from "./User.js";

const Folder = sequelize.define("Folder", {
  id: {
    type: DataTypes.UUID,
    
    primaryKey: true,
    defaultValue: crypto.randomUUID()

  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: {
      name: "unique_email",
      msg: "Email already in use",
    },
    allowNull: false,
  },
  user: {
    type: DataTypes.UUID,
    references: {
      model: User,
      key: "id",
    },
  },
  path: {
    type: DataTypes.STRING,
    allowNull: false,
    // unique: true,
  },
});

export default Folder;
