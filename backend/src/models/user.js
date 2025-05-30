module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name:     { type: DataTypes.STRING, allowNull: false },
    email:    { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
    phone:    { type: DataTypes.STRING, allowNull: false},
  }, {
    tableName:   'Users',    
    underscored: false,
    timestamps:  true
  });

  // Associação com Ads
  User.associate = (models) => {
    User.hasMany(models.Ad, {
      foreignKey: 'userId',
      as: 'ads'
    });
  
    User.hasMany(models.Interest, {
      foreignKey: 'userId',
      as: 'interests'
    });
  };

  return User;
};
