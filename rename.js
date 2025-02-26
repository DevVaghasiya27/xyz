const fs = require('fs');
const path = require('path');
// const replaceThis = "dev"
// const replaceWith = "vaghasiya"
const replaceThis = "vaghasiya"
const replaceWith = "dev"
const preview = false
const folder = __dirname

try{
    fs.readdir("data", (err, data) =>{
        for (let index = 0; index < data.length; index++){
            const item = data[index];
            let oldFile = path.join(folder, item)
            let newFile = path.join(folder, item.replaceAll(replaceThis, replaceWith))
            if(!preview){
                fs.rename("data/" + item, newFile, ()=>{
                    console.log("Rename Success")
                })
            }
            else{
                if("data/" + item !== newFile) console.log("" + item + " will be renamed to " + newFile)
            }
            
        }
    })
} catch (err) {
    console.error(err);
}





// const fs = require('fs');
// const replaceThis = "dev"
// const replaceWith = "vaghasiya"
// // const replaceThis = "vaghasiya"
// // const replaceWith = "dev"
// const preview = false
// try{
//     fs.readdir("data", (err, data) =>{
//         for (let index = 0; index < data.length; index++){
//             const item = data[index];
//             let newFile = "data/" + item.replaceAll(replaceThis, replaceWith)
//             if(!preview){
//                 fs.rename("data/" + item, newFile, ()=>{
//                     console.log("Rename Success")
//                 })
//             }
//             else{
//                 if("data/" + item !== newFile) console.log("data/" + item + " will be renamed to " + newFile)
//             }
            
//         }
//     })
// } catch (err) {
//     console.error(err);
// }