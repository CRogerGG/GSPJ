'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('abogado',{
      id:{
          type:Sequelize.INTEGER(10),
          allowNull:false,
          primaryKey:true,
          autoIncrement:true
      },
      id_persona:{
          type:Sequelize.INTEGER(10),
          allowNull:false,
          references: {
              model: 'Persona',
              key: 'id_persona'
          }
      },
      categoria:{
          type:Sequelize.STRING,
          allowNull:true
      },
      createdAt:Sequelize.DATE,
      updateAt:Sequelize.DATE
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     */
    await queryInterface.dropTable('abogado');
     
  }
};
