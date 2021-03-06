module.exports = function(sequelize, Sequelize) {
 
    var User = sequelize.define('Users', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        username: {
            type: Sequelize.TEXT
        },
        about: {
            type: Sequelize.TEXT
        },
        email: {
            type: Sequelize.STRING,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        last_login: {
            type: Sequelize.DATE
        },
        status: {
            type: Sequelize.ENUM('active', 'inactive'),
            defaultValue: 'active'
        }
    }, {
        timestamps: false
    });
 
    return User;
 
}