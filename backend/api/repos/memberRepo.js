const db = require('../../data/teammanage-db');

exports.add = memberEntity => {
    var idMem = Math.random().toString(36).slice(2, 8);
    var sql = `insert into members(id_mem, name, phone) 
    values('${idMem}', '${memberEntity.name}', '${memberEntity.phone}'`;
    return db.insert(sql);
}

exports.updateIdPro = (idMem, idPro) => {
    var sql;
    if (idPro != null) {
        sql = `update members set id_pro = '${idPro}' where id_Mem = '${idMem}'`;
    } else {
        sql = `update members set id_pro = null where id_Mem = '${idMem}'`;
    }
    return db.insert(sql);
}

exports.getMembersOfProject = idPro => {
    var sql;
    if (idPro != null) {
        sql = `select * from members where id_pro = '${idPro}';`;
    } else {
        sql = `select * from members where id_pro = null;`;
    }
    return db.load(sql);
}