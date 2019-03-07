const conn = require('./mysql_connection');

const model = {
    getAll(cb){
        conn.query("select * from 2019Spring_Persons",(err,data) => {
            cb(err,data);
        });
    },
    get(id,cb){
        conn.query("select * from 2019Spring_Persons where id=?",id,(err,data) => {
            cb(err,data);
        });
    },
    add(input,cb)
    {
        if(!input.Password)
        {
            cb(Error('Password Required'));
            return;
        }
        else if(!input.Password.length <8)
        {
            cb(Error('A longer password is required'));
            return;
        }
        conn.query("insert into 2019Spring_Persons(FirstName,LastName,Birthday,Password,created_at) VALUES(?)",
                    [[input.FirstName,input.LastName,input.Birthday,input.Password,new Date()]],
                    (err,data) => {
                        if(err)
                        {
                            cb(err);
                            return;
                        }
                        model.get(data.insertId,(err,data)=>{
                            cb(err,data);
                        });
                        
                    }
                );
    }
};

module.exports = model;