import { expect } from "chai";
import { Model } from "sequelize";
import Sinon from "sinon";
import IPost from "../../api/interfaces/IPost";
import PostService from "../../api/services/PostService";
import Post from "../../database/models/PostModel";

describe('Testes de serviço: UpdateById Post:', function () {
  afterEach(function () {
    Sinon.restore();
  });
  it('Caso 1: Deve atualizar um determinado Post por ID', async function () {
    const inputMock: IPost = {
      title: 'TipeScript na prática',
      content: 'TipeScript é uma ferramenta para ajudar no POO',
    }

    const outputMock: Post = new Post({
      id: 1,
      title: 'TipeScript na prática',
      content: 'TipeScript é uma ferramenta para ajudar no POO',
    });

    Sinon.stub(Model, 'update').resolves();
    Sinon.stub(Model, 'findByPk').resolves(outputMock);
    const service = new PostService();

    await service.updateById(1, inputMock);
    const result = await service.findById(1);

    expect(result).to.be.equal(outputMock);

  })
  it('Case 2: Quando o meu ID está incorreto.', async function () {
    const invalidID = 9999;
    const inputMock = {
      title: 'Qualquer informação errada',
      content: 'Comprei uma camiseta do Marighella'
    }

    const errorMock = "Id não existe.";
    
    const service = new PostService();
    try {
      console.log('Condição Verdadeira, ou seja, sem erro ========>');
      const updated = await service.updateById(invalidID, inputMock);
      console.log('updated =====> ', updated);
    } catch (error) {
      if (error instanceof Error) {
        console.log('error ===>', error.message);
        expect(error.message).to.equal(errorMock);
      }
    }
  })
})