module.exports = (sequelize, DataTypes) => {
    const Media = sequelize.define('Media', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        url: {
            type: DataTypes.STRING,
            allowNull: false
        },
        type: {
            type: DataTypes.ENUM('image', 'video'),
            allowNull: false
        },
        adId: {
            type: DataTypes.UUID,
            allowNull: false
        }
    }, {
        tableName: 'Medias',
        underscored: false,
        timestamps: true
    });

    Media.associate = (models) => {
        Media.belongsTo(models.Ad, {
            foreignKey: 'adId',
            as: 'ad'
    });
    };

    return Media;
};
