const Sequelize = require('sequelize');
let{sequelize}=require('D:/PassportJs/database/models/connections.js');

const users = sequelize.define('users', {
    // Model attributes are defined here
    username: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    }
},
{
    
    tableName:'users',
     timestamps: false
}
);

// to create table if doesn't exist
users.sync();
module.exports={users};