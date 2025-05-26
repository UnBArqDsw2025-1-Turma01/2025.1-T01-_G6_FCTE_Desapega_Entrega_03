module.exports = (sequelize, DataTypes) => {
    return sequelize.define('User', {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
      name:     { type: DataTypes.STRING, allowNull: false },
      email:    { type: DataTypes.STRING, allowNull: false, unique: true },
      password: { type: DataTypes.STRING, allowNull: false }
    }, {
      tableName:   'Users',    
      underscored: false,
      timestamps:  true
    });
  };