import { ModelStatic } from "sequelize";
import Post from "../../database/models/PostModel";
import IPost from "../interfaces/IPost";
import IServicePost from "../interfaces/IServicePost";

export default class PostService implements IServicePost {
  protected model: ModelStatic<Post> = Post;

  async create(dto: IPost): Promise<Post> {
    return await this.create({ ...dto });
  }

  async readAll(): Promise<Post[]> {
    return await this.model.findAll();
  }

  
}