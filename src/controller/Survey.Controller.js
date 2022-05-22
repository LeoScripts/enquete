const surveyController = {
  async read(req, res) {
    const { page = 1 } = req.query;
    const { count: total, rows: users } = await Usuario.findAndCountAll({
      limit: 5,
      offset: (page - 1) * 5,
    });

    const totalPagina = Math.round(total / 5);
    return res.render('usuarios', { users, totalPagina });
  },

  async findById(req, res) {
    const { id } = req.params;

    const user = await Usuario.findOne({
      where: {

        id_usuario: id,
      },
    });

    return res.render('viewUsuario', { user });
  },

  create(req, res) {
    return res.render('cadastroUsuario');
  },
  async store(req, res) {
    const { nome, email, senha } = req.body;

    console.log(nome, email, senha);

    const resultado = await Usuario.create({
      nome,
      email,
      senha,
    });
    return res.redirect('/');
  },

  async edit(req, res) {
    const { id } = req.params;
    const usuario = await Usuario.findByPk(id);
    return res.render('editarUsuario', { usuario });
  },

  async update(req, res) {
    const { id } = req.params;
    const { nome, email, senha } = req.body;

    const resultado = await Usuario.update(
      {
        nome,
        email,
        senha,
      },
      {
        where: {
          id_usuario: id,
        },
      },
    );

    console.log(resultado);
    return res.redirect('/');
  },

  async destroy(req, res) {
    const { id } = req.params;

    const resultado = await Usuario.destroy({
      where: {
        id_usuario: id,
      },
    });

    console.log(resultado);
    return res.redirect('/');
  },
};

module.exports = surveyController;
