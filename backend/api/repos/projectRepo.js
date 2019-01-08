const db = require('../../data/teammanage-db');

exports.add = name => {
    var idPro = Math.random().toString(36).slice(2, 8);
    var sql = `insert into projects(id_pro, name) values('${idPro}', '${name}');`;
    return db.insert(sql);
}