var bCrypt = require('bcrypt-nodejs');
'use strict';

module.exports = {
  up: function(queryInterface){
      return queryInterface.bulkInsert('Users', [{
        firstname: 'Administrador',
        lastname: 'App',
        username: 'admin',
        about: 'Usuário de teste',
        email: 'admin@crud.com.br',
        password: bCrypt.hashSync('123', bCrypt.genSaltSync(8), null),
        last_login: new Date()
      }], {});
  },

  down:function(queryInterface) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
