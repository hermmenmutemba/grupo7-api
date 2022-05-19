import { Request, Response } from "express";
import tabelaService from "../../services/base/tabela";
import tabela from "../../models/base/tabela";

export const get_all_tabelas = async (
  request: Request,
  response: Response,
) => {
  const tabela = await tabelaService.getAll();
  return response.status(200).json(tabela);
};

export const get_tabela = async (request: Request, response: Response) => {
  const { id } = request.params;

  const tabela = await tabelaService.getById(id);

  if (tabela) {
    return response.status(200).json(tabela);
  }
  return response.status(404).json(
    { msg: "no Coeficiente with that phoneNumber" },
  );
};

export const create_tabela = async (request: Request, response: Response) => {
  const {
    Item,  
    Designacao,
    Descricao,
    Coeficiente,
  } = await request.body;

  try {
    let tabela: tabela = {
      id: 0,
      Item,
      Designacao,
      Descricao,
      Coeficiente,
    };

    tabela = await tabelaService.create(tabela);

    return response.status(200).json(tabela);
  } catch (e) {
    return response.status(404).json(
      { msg: "error to create a Tabela with that i", error: e },
    );
  }
};

export const delete_tabela = async (request: Request, response: Response) => {
  return response.status(500).json(
    { msg: "not Implemented" },
  );
  const { id } = request.body;

  try {
    //await tabelaervice.remove(intem);

    return response.send(200).json({ id: id });
  } catch (e) {
    return response.send(404).json(
      { msg: "error to create a order with that i" },
    );
  }
};
