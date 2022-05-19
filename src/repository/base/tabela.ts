import tabela from "../../models/base/tabela";
import { getRepository,getConnection } from "typeorm";

interface Key {
  id?: any;
}

const findById = async function findById(id: string): Promise<tabela> {
  const tabelaRepository = getRepository(tabela);

  const data: tabela = await tabelaRepository.findOneOrFail({
      where: {id: id }
    });

  return data;
};

const findAll = async function findAll(): Promise<tabela[]> {
  const tabelaRepository = getRepository(tabela);

  const data: tabela[] = await tabelaRepository.find({
    order: {
      Descricao: "ASC",
      id: "DESC",
    },
  });

  return data;
}

const create = async function create(
  data: tabela
): Promise<tabela> {
  const tabelaRepository = getRepository(tabela);

  await tabelaRepository.save(data);

  return data;
};

export default {
  create,
  findAll,
  findById
};
