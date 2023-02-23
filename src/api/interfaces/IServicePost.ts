import Post from "../../database/models/PostModel";
import IPost from "./IPost";

export default interface IServicePost {
  create(dto: IPost): Promise<Post>;
  readAll(): Promise<Post[]>;
  findById(id: number): Promise<Post | null>;
  updateById(id: number): Promise<Post>;
  deleteById(id: number): Promise<Post>;
}