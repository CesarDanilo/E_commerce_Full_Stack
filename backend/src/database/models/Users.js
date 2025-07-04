'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    class Users extends Model {
        static associate(models) {
            Users.hasMany(models.Pedido, { foreignKey: 'usuario_id' });
        }
    }

    Users.init({
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        email: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique: true, // Adiciona unicidade para o campo de email
            validate: {
                isEmail: true // Valida o formato do email
            }
        },
        senha: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        admin: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        ativo: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        cpf: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        cidade: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        endereco: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        bairro: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        numero: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        cep: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        referencia: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        contato: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        }
    }, {
        sequelize,
        modelName: 'Users',
        tableName: 'Users',
        timestamps: true // Habilita o gerenciamento automático de createdAt e updatedAt
    });

    return Users;
};
