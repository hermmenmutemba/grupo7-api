import tabela  from '../../models/base/tabela'
import tabelaRepository  from '../../repository/base/tabela'

const getById = (id:string) =>
   tabelaRepository.findById(id)

const getAll = () =>
    tabelaRepository.findAll()

const create = (tabela:tabela) =>
  tabelaRepository.create(tabela)

export default {
  getAll,
  getById,
  create
}