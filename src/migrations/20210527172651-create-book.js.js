module.exports = {
  // eslint-disable-next-line no-shadow
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('books', {
      id: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: Sequelize.DataTypes.STRING,
      },
      year: {
        type: Sequelize.DataTypes.INTEGER,
      },
      author: {
        type: Sequelize.DataTypes.STRING,
      },
      summary: {
        type: Sequelize.DataTypes.STRING,
      },
      publisher: {
        type: Sequelize.DataTypes.STRING,
      },
      pageCount: {
        type: Sequelize.DataTypes.INTEGER,
      },
      readPage: {
        type: Sequelize.DataTypes.INTEGER,
      },
      finished: {
        type: Sequelize.DataTypes.BOOLEAN,
      },
      reading: {
        type: Sequelize.DataTypes.BOOLEAN,
      },
      insertedAt: {
        type: Sequelize.DataTypes.DATE,
      },
      updatedAt: {
        type: Sequelize.DataTypes.DATE,
      },
    });
  },

  down: async (queryInterface) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('books');
  },
};
