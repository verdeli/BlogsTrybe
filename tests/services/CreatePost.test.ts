import { expect } from "chai";
import { afterEach } from "mocha"
import { Model } from "sequelize";
import Sinon from "sinon";
import IPost from "../../src/api/interfaces/IPost";
import PostService from "../../src/api/services/PostService";
import Post from "../../src/database/models/PostModel";

describe('Testes de serviço: Create Post', function () {
  afterEach(function () {
    Sinon.restore();
  });
  it('Caso 1: Deve criar um novo posts', async function () {
    const inputMock: IPost = {
      title: 'TipeScript na prática',
      content: 'TipeScript é uma ferramenta para ajudar no POO',
    }
    const outputMock: Post = new Post({
      id: 1,
      title: 'TipeScript na prática',
      content: 'TipeScript é uma ferramenta para ajudar no POO',
    });
    Sinon.stub(Model, 'create').resolves(outputMock);
    const service = new PostService();
    const result = await service.create(inputMock);

    expect(result).to.be.equal(outputMock);
  })
});