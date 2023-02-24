import chai, { expect } from "chai"
import chaiHttp from "chai-http";
import { Model } from "sequelize";
import Sinon from "sinon";
import IPost from "../../api/interfaces/IPost";
import App from "../../App";
import Post from "../../database/models/PostModel";

chai.use(chaiHttp);

describe('Testes para a rota post', function () {
  const app = new App

  afterEach(function () {
    Sinon.restore();
  });

  it('Deve cadastrar um post com sucesso', async function () {
    //arrange
    const post = {
      title: 'Um post qualquer',
      content: 'Hello'
    }
    //action
    const response = await chai.request(app.app).post('/post').send(post);

    //assert
    expect(response.status).to.be.equal(201);
  })
  it('Deve cadastrar um post com sucesso e retornar o post criados', async function () {
    //arrange
    const inputMock: IPost = {
      title: 'TipeScript na prática',
      content: 'TipeScript é uma ferramenta para ajudar no POO',
    }

    const outputMock: Post = {
      id: 1,
      title: 'TipeScript na prática',
      content: 'TipeScript é uma ferramenta para ajudar no POO',
    } as Post;

    Sinon.stub(Model, 'create').resolves(outputMock);

    //action
    const response = await chai.request(app.app).post('/post').send(inputMock);

    //assert
    expect(response.body).to.be.equal(outputMock);
  })
  it('Testando o findById', async function () {
    //arrange  
    Sinon.stub(Model, 'findByPk').resolves(null);

    //action
    const response = await chai.request(app.app).get('/post:999');

    //assert
    expect(response.status).to.be.equal(404);
  })
})
