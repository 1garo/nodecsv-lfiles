const testFolder = './dataset/';
import fs from 'fs';
import csvtojson from 'csvtojson'
import csvjson from 'csvjson'
// import jsontocsv from 'jsontocsv'

//TODO: validate if final.csv file has content inside, to dont write file that already has content 
//TODO: create readme.md
//TODO: get absolute path and pass it to fromFile()
const files = fs.readdirSync(testFolder);
files.forEach(filename => {
    csvtojson()
    .fromFile(`/home/hungaro/dev/js/nodecsv-lfiles/dataset/${filename}`)
    .then(jsonObj =>{
        jsonObj.forEach((ctx, i) => {
            let options
            let headers
            const data = {
                id: ctx.Respondent,
                country: ctx.Country
            }
            if (i === 0) {
                headers = "key"
                options = {
                    delimiter   : ",",
                    wrap        : false,
                    headers
                }
            }else {
                headers = "none"
                options = {
                    delimiter   : ",",
                    wrap        : false,
                    headers
                }
            }
            const d = csvjson.toCSV(JSON.stringify(data), options)
            fs.appendFileSync('./final.csv', d, (err) => {
                if(err) {
                    console.log(err); // Do something to handle the error or just throw it
                    process.exit(1);
                }
            })
        });
    })
})
