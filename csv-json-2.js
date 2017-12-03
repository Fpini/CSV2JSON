const csv=require('csvtojson')
const fs=require('fs')

console.log ('START')
const convert = (csvInpFilePath= './customer-data.csv', jsonOutFilePath='./prova.json') => {
csv()
.fromFile(csvInpFilePath)
.on('end_parsed',function(jsonArrObj){
	fs.writeFile(jsonOutFilePath, JSON.stringify(jsonArrObj,'','\t'), (err) => {
		if (err) throw err;
		console.log('The file has been saved!');
	})
})

.on('done',(error)=>{
    console.log('DONE')
})
.on('error',(err)=>{
    console.log(err)
})
};
convert(process.argv[2], process.argv[3]);