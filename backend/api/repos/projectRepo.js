const db = require('../../data/teammanage-db');

exports.add = name => {
    var idPro = Math.random().toString(36).slice(2, 8);
    var sql = `insert into projects(id_pro, name) values('${idPro}', '${name}');`;
    return db.insert(sql);
}

exports.getName = idPro => {
    var sql = `select name from projects where id_pro = '${idPro}';`;
    return db.load(sql);
}