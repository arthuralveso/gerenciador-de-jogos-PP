const connection = require('../database/connection');

module.exports = {
  async create(req, res) {
    
    const { title, description, developer, photo } = req.body;

    await connection('games').insert({
      title,
      description,
      developer,
      photo,
    });

    return res.json({title})
  },

  async index(req, res) {
    const games = await connection('games').select('*');

    return res.json(games);
  },

  async delete(req, res) {
    const { id } = req.params;

    await connection('games').where('id', id).delete();

    return res.status(204).send();
  },

  async update(req, res) {
    const { title, description, developer, photo } = req.body;
    const { id } = req.params;

    await connection('games').where('id', id).update({
      title: title,
      description: description,
      developer: developer,
      photo: photo,
    });

    const game = await connection('games').where('id', id);

    res.json(game);
  },

  async indexById(req, res) {
    const { id } = req.params;

    const game = await connection('games').where('id', id).first();

    res.json(game);
  }
}