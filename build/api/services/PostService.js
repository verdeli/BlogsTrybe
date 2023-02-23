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
const PostModel_1 = __importDefault(require("../../database/models/PostModel"));
class PostService {
    constructor() {
        this.model = PostModel_1.default; // modelStatic(type do sequelize) é a represetação das tabelas do db. Aqui esta inicializando a model.
    }
    create(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.model.create(Object.assign({}, dto));
        });
    }
    readAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.model.findAll();
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.model.findByPk(id);
        });
    }
    updateById(id, dto) {
        return __awaiter(this, void 0, void 0, function* () {
            const post = this.model.findByPk(id);
            if (!post) {
                throw new Error("Id não existe.");
            }
            yield this.model.update(Object.assign({}, dto), { where: { id } });
            const updated = this.model.findByPk(id);
            return updated;
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error("Method not implemented.");
        });
    }
}
exports.default = PostService;
