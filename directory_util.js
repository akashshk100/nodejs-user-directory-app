const fs = require('fs')
const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require('constants')

const loadUser = () => {
    try{
        dataBuffer = fs.readFileSync('user_directory.json')
        stringData = dataBuffer.toString()
        return JSON.parse(stringData)
    }catch(e){
        return []
    }
}

const addUser = (jsonData) => {
    user_directory = loadUser()
    duplicate = user_directory.filter((user) => user.username === jsonData.username)
    if(duplicate.length === 0){
        user_directory.push(jsonData)
        saveFile(user_directory)
    }
    else{
        console.log('username taken')
    }
}

const removeUser = (username) => {
    userDirectory = loadUser();
    let index
    for(let i=0; i<userDirectory.length;i++){
        if(userDirectory[i].username === username){
            index = i
            break
        }
    }
    userDirectory.splice(index, 1)
    saveFile(userDirectory)
}

const listUser = () => {
    user_directory = loadUser()
    user_directory.forEach(user => {
        console.log(user.username+'\t'+user.name)
    });
}

const saveFile = (user_directory) => {
    fs.writeFileSync('user_directory.json', JSON.stringify(user_directory))
}

module.exports = {
    addUser: addUser,
    removeUser: removeUser,
    listUser: listUser
}