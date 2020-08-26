const directoryUtil = require('./directory_util')
const fs = require('fs')

jsonData = {
    name: 'Shreya',
    username: 'shreya_j'
}

//directoryUtil.addUser(jsonData)
//directoryUtil.removeUser('kat')
directoryUtil.listUser()