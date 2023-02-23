import { ModelStatic, where } from "sequelize";
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

  async findById(id: number): Promise<Post> {
    const post = this.model.findByPk(id);
    if (!post) {
      throw new Error("Id não existe.");
    }
    const result = await this.model.findByPk(id);
    return result as Post;
  }

  async updateById(id: number, dto: IPost): Promise<Post> {
    const post = this.model.findByPk(id);
    if (!post) {
      throw new Error("Id não existe.");
    }
    await this.model.update({ ...dto }, { where: { id } });
    const updated = await this.model.findByPk(id);
    return updated as Post;
  }

  // async deleteById(id: number): Promise<Post> {
  //   throw new Error("Method not implemented.");
  // }

}
