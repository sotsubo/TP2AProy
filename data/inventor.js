const conecction = require("./conecction");

async function getIventors(){
    const clientmongo = await conecction.getConnection();

    const collection = await clientmongo.db('sample_betp2')
        .collection('inventors')
        .find()
        .toArray();

    return collection; 
}

async function getInventor(inventorId){
    const clientmongo = await conecction.getConnection();

    const doc = await clientmongo.db('sample_betp2')
        .collection('inventors')
        .findOne({_id:parseInt(inventorId)});

    return doc; 
}

async function pushInventor(inventor){
    const clientmongo = await conecction.getConnection();

    const result = await clientmongo.db('sample_betp2')
        .collection('inventors')
        .insertOne(inventor);
    
    return result;
}

async function updateInventor(inventor){
    const clientmongo = await conecction.getConnection();

    const query = {_id: parseInt(inventor._id)};
    const newvalues  = {$set: 
        {first: inventor.first, last: inventor.last, year: inventor.year}
    };

    const result  = await clientmongo.db('sample_betp2')
        .collection('inventors')
        .updateOne(query, newvalues);
    
    return result;
}

async function deleteInventor(inventorId){
    const clientmongo = await conecction.getConnection();

    const result = await clientmongo.db('sample_betp2')
        .collection('inventors')
        .deleteOne({_id: parseInt(inventorId)});
    return result;
}

module.exports = {getIventors, getInventor, pushInventor, updateInventor, deleteInventor};