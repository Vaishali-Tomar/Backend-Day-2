const fs = require('fs');
const path = require('path');
const readline = require('readline');

const fileName = __dirname + "user.json";

const writeFileDemo = (filePath, content = "") => {
    fs.writeFile(filePath, content, (err) => {
        if(err){
            console.log('ERROR OCCURED WHILE WRITING FILE');
            return;
        }
        console.log("file written succesfully");
    })
}
const newUser = {
    id: 1,
    name: "Roman Regins",
    age: 50,
  };

const readFileDemo = (filePath) => {
    fs.readFile(filePath, (err, data)=> {
        if(err){
            console.log("Error Reading file", err);
            return;
        }
        console.log("FILE DATA=>", data.toString());
        let usersData = JSON.parse(data.toString() || '[]');
        // Push the new user into the array
        usersData.push(newUser);
        // Write the updated array back to the file
        writeFileDemo(fileName, JSON.stringify(usersData, null, 2));
    })
}

const fullPath = path.join(__dirname, "files", "../../../../downloads", "example.txt");
 console.log(fullPath);

 const deleteFileDemo = (filePath) => {
    fs.unlink(filePath, (err) => {
      if (err) {
        console.log("ERROR WHILE DELETING FILE", err);
        return;
      }
      console.log("File deleted successfully");
    });
  };
  
  // deleteFileDemo(fileName);
  
// writeFileDemo(fileName, JSON.stringify([]))
// readFileDemo(fileName);

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

r1.question("Enter Your Name : ", (answer) => {
    console.log(`Hi, ${answer}`);
    r1.close();
})