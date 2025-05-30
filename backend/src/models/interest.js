module.exports = (sequelize, DataTypes) => {
    const Interest = sequelize.define('Interest', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        userId: {
            type: DataTypes.UUID,
            allowNull: false
        },
        adId: {
            type: DataTypes.UUID,
            allowNull: false
        },
        message: {
            type: DataTypes.STRING, // Opcional: mensagem personalizada do interessado
            allowNull: true
        }
    }, {
        tableName: 'Interests',
        underscored: false,
        timestamps: true
    });

  // Associações
    Interest.associate = (models) => {
        Interest.belongsTo(models.User, {
            foreignKey: 'userId',
            as: 'user'
    });

        Interest.belongsTo(models.Ad, {
            foreignKey: 'adId',
            as: 'ad'
        });
    };

    return Interest;
};
