// models/post.js
import { DataTypes } from "sequelize";
import { sequelize } from "./db.js";
import User from "./User.js";
import Folder from "./Folder.js";

const File = sequelize.define("File", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: crypto.randomUUID(),
  },
  fileType: {
    type: DataTypes.ENUM("image", "video", "audio", "document"),
    defaultValue: "image",
  },
  fileName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userId: {
    type: DataTypes.UUID,
    references: {
      model: User, // Reference to User model
      key: "id",
    },
    // onUpdate: "CASCADE",
    // onDelete: "CASCADE",
  },
  s3Key: {
    type: DataTypes.STRING,
  },
  s3Url: {
    type: DataTypes.STRING,
  },
  folderId:{
    type: DataTypes.UUID,
    references:{
      model: Folder,
      key: "id"

    },
    mimeType:{
      type: DataTypes.STRING,
      
    },
    allowNull: true
  }
});

// Define the association
// User.hasMany(File, { foreignKey: "userId" });
// File.belongsTo(User, { foreignKey: "userId" });

export default File;
