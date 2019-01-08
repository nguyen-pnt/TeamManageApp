const db = require('../../data/teammanage-db');

exports.add = memberEntity => {
    var idMem = Math.random().toString(36).substr(2, 9);
    var sql = `insert into members(id_mem, name, phone) 
    values('${idMem}', '${memberEntity.name}', '${memberEntity.phone}'`;
    return db.load(sql);
}

exports.updateIdPro = memberEntity => {
    var sql = `update members set id_pro = '${memberEntity.idPro}' where id_mem = '${memberEntity.idMem}'`;
    return db.insert(sql);
}