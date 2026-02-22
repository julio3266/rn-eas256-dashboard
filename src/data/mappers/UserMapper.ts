import { UserApiModel } from '@data/models/userApiModel';
import { User } from '@domain/entities/User';

export const mapUserApiToEntity = (model: UserApiModel): User => ({
    id: model.id,
    nome: model.nome,
    email: model.email,
    telefone: model.telefone,
});
