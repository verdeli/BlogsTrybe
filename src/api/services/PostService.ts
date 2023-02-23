import { ModelStatic } from "sequelize";
import Post from "../../database/models/PostModel";
import IPost from "../interfaces/IPost";
import IServicePost from "../interfaces/IServicePost";

export default class PostService implements IServicePost {
  protected model: ModelStatic<Post> = Post;   // modelStatic(type do sequelize) é a represetação das tabelas do db. Aqui esta inicializando a model.

  async create(dto: IPost): Promise<Post> {
    return await this.model.create({ ...dto });
  }

  async readAll(): Promise<Post[]> {
    return await this.model.findAll();
  }

}
