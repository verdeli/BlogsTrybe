import { Model, INTEGER, STRING } from "sequelize";
import DB from '.'

class Post extends Model {
  declare readonly id: number;
  declare title: string;
  declare content: string;
}
Post.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: INTEGER,
  },
  title: {
    allowNull: false,
    type: STRING(255),
  },
  content: {
    allowNull: false,
    type: STRING,
  }
}, {
  sequelize: DB,
  underscored: true,
  timestamps: false,
  modelName: 'posts',
});

export default Post;