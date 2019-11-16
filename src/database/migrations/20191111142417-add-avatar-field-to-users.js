module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * users: nome da tabela que quero add a nova coluna
     * avatar_id: nome do campo que quero adicionar
     */
    return queryInterface.addColumn('users', 'avatar_id', {
      type: Sequelize.INTEGER,
      references: { model: 'files', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,
    });
  },

  down: queryInterface => {
    return queryInterface.removeColumn('users', 'avatar_id');
  },
};
