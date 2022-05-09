'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     */
     await queryInterface.createTable('persona', {
      id_persona:{
          type:Sequelize.INTEGER(10),
          allowNull:false,
          primaryKey:true,
          autoIncrement:true
      },
      nombre:{
          type:Sequelize.STRING,
          allowNull:false
      },
      apaterno:{
          type:Sequelize.STRING,
          allowNull:false
      },
      amaterno:{
          type:Sequelize.STRING,
          allowNull:false
      },
      domicilio:{
          type:Sequelize.STRING,
          allowNull:false
      },
      ciudad:{
          type:Sequelize.STRING,
          allowNull:false
      },
      estado:{
          type:Sequelize.STRING,
          allowNull:false
      },
      fecha_nacimiento:{
          type:Sequelize.DATE,
          allowNull:false
      },
      tel_fijo:{
          type:Sequelize.INTEGER(10),
          allowNull:true
      },
      tel_celular:{
          type:Sequelize.INTEGER(10),
          allowNull:true
      },
      email:{
          type:Sequelize.STRING,
          allowNull:true
      },
      curp:{
          type:Sequelize.STRING,
          allowNull:true
      },
      nacionalidad:{
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
     await queryInterface.dropTable('persona');
     
  }
};
