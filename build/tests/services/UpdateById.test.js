"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const sequelize_1 = require("sequelize");
const sinon_1 = __importDefault(require("sinon"));
const PostService_1 = __importDefault(require("../../api/services/PostService"));
const PostModel_1 = __importDefault(require("../../database/models/PostModel"));
describe('Testes de serviço: UpdateById Post:', function () {
    afterEach(function () {
        sinon_1.default.restore();
    });
    it('Caso 1: Deve atualizar um determinado Post por ID', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const inputMock = {
                title: 'TipeScript na prática',
                content: 'TipeScript é uma ferramenta para ajudar no POO',
            };
            const outputMock = new PostModel_1.default({
                id: 1,
                title: 'TipeScript na prática',
                content: 'TipeScript é uma ferramenta para ajudar no POO',
            });
            sinon_1.default.stub(sequelize_1.Model, 'update').resolves();
            sinon_1.default.stub(sequelize_1.Model, 'findByPk').resolves(outputMock);
            const service = new PostService_1.default();
            yield service.updateById(1, inputMock);
            const result = yield service.findById(1);
            (0, chai_1.expect)(result).to.be.equal(outputMock);
        });
    });
    it('Case 2: Quando o meu ID está incorreto.', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const invalidID = 9999;
            const inputMock = {
                title: 'Qualquer informação errada',
                content: 'Comprei uma camiseta do Marighella'
            };
            const errorMock = `Id não existe.`;
            const service = new PostService_1.default();
            try {
                yield service.updateById(invalidID, inputMock);
            }
            catch (error) {
                if (error instanceof Error) {
                    console.log('error ===>', error);
                    console.log('Error ===>', Error);
                    (0, chai_1.expect)(error.message).to.equal(errorMock);
                }
            }
        });
    });
});
