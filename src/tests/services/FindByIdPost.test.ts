import { expect } from "chai";
import { Model } from "sequelize";
import { afterEach } from "mocha"
import Sinon from "sinon";
import Post from "../../src/database/models/PostModel";
import PostService from "../../src/api/services/PostService";

describe('Testes de serviço: FindById Post', async function () {
  afterEach(function () {
    Sinon.restore();
  });
  it('Caso 1: Deve selecionar um Post', async function () {
    const outputMock: Post = new Post({
      id: 1,
      title: 'TipeScript na prática',
      content: 'TipeScript é uma ferramenta para ajudar no POO',
    });
    Sinon.stub(Model, 'findByPk').resolves(outputMock);
    const service = new PostService();
    const result = await service.findById(1);

    expect(result).to.be.equal(outputMock);
  })
})