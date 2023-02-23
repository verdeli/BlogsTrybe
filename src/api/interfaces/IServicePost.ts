import Post from "../../database/models/PostModel";
import IPost from "./IPost";

export default interface IServicePost {
  create(dto: IPost): Promise<Post>;
  readAll(): Promise<Post[]>;
  findById(id: number): Promise<Post>;
  updateById(id: number, dto: IPost): Promise<Post>;
  // deleteById(id: number): Promise<Post>;
}