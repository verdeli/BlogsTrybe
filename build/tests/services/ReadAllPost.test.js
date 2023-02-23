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
const mocha_1 = require("mocha");
const sequelize_1 = require("sequelize");
const sinon_1 = __importDefault(require("sinon"));
const PostService_1 = __importDefault(require("../../api/services/PostService"));
const PostModel_1 = __importDefault(require("../../database/models/PostModel"));
describe('Testes de serviço: Read All Posts', function () {
    (0, mocha_1.afterEach)(function () {
        sinon_1.default.restore();
    });
    it('Caso 1: Deve listar todos os posts', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const outputMock = [new PostModel_1.default({
                    id: 1,
                    title: 'TipeScript na prática',
                    content: 'TipeScript é uma ferramenta para ajudar no POO',
                })];
            sinon_1.default.stub(sequelize_1.Model, 'findAll').resolves(outputMock);
            const service = new PostService_1.default();
            const result = yield service.readAll();
            (0, chai_1.expect)(result).to.be.equal(outputMock);
            (0, chai_1.expect)(result.length).to.be.equal(1);
        });
    });
});
