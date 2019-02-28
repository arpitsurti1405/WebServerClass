const conn = require('./mysql_connection');

const model = {
    getAll(cb){
        conn.query("select * from 2019Spring_Persons",(err,data) => {
            cb(err,data);
        });
    },
    get(id,cb){
        
    },
    add(input,cb)
    {
        conn.query("insert into 2019Spring_Persons(FirstName,LastName,Birthday,Password,created_at) VALUES(?)",
                    [[input.FirstName,input.LastName,input.Birthday,input.Password,new Date()]],
                    (err,data) => {
                        cb(err,data);
                    }
                );
    }
};

module.exports = model;