module.exports = (sequelize, DataTypes) => {
    const Ad = sequelize.define('Ad', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        pickupLocation: {
            type: DataTypes.STRING,
            allowNull: false
        },
        type: {
            type: DataTypes.ENUM('sale', 'donation', 'exchange'),
            allowNull: false
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        userId: {
            type: DataTypes.UUID,
            allowNull: false
        }
    }, {
        tableName: 'Ads',
        underscored: false,
        timestamps: true
    });

  // Associações
    Ad.associate = (models) => {
        Ad.belongsTo(models.User, {
            foreignKey: 'userId',
            as: 'user'
        });

    Ad.hasMany(models.Media, {
        foreignKey: 'adId',
        as: 'medias'
    });

    Ad.hasMany(models.Interest, {
        foreignKey: 'adId',
        as: 'interests'
    });

    };

    return Ad;
};
