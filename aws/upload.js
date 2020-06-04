const AWS = require('aws-sdk');
const fs = require('fs');

const id = 'AKIAI2UNMVVLJYCIR3DQ';
const secret = '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';
const buckedName = 'repodocumentaltecnoshare';

function uploadFile(filename){
    const fileConten = fs.readFileSync(filename);

    const params = {
        Bucket: buckedName,
        Key: "ejemploAWS.txt",
        Body: fileConten
    }

    const s3 = new AWS.S3({
        accessKeyId: id,
        secretAccessKey: secret
    });

    s3.upload(params, (err, data) => {
        if(err){
            throw err;
        }
        console.log(`Archivo subido a AWS! ${data.Location}`);
    });
}

uploadFile('./ejemploAWS.txt');