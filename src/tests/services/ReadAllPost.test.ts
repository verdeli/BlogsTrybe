import { expect } from "chai";
import { afterEach } from "mocha"
import { Model } from "sequelize";
import Sinon from "sinon";
import PostService from "../../api/services/PostService";
import Post from "../../database/models/PostModel";


describe('Testes de serviço: Read All Posts', function () {
  afterEach(function () {
    Sinon.restore();
  });
  it('Caso 1: Deve listar todos os posts', async function () {
    const outputMock: Post[] = [new Post({
      id: 1,
      title: 'TipeScript na prática',
      content: 'TipeScript é uma ferramenta para ajudar no POO',
    })];

    Sinon.stub(Model, 'findAll').resolves(outputMock);
    const service = new PostService();
    const result = await service.readAll();

    expect(result).to.be.equal(outputMock);
    expect(result.length).to.be.equal(1);
  })
});