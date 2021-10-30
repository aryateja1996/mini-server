const fs = require('fs')

module.exports = {
    getData: (filename) => {
        var data = {};
        try {
            data = JSON.parse(fs.readFileSync(filename))

            return data
        } catch (error) {
            console.log(error.code)
            error.code == 'ENOENT' ? fs.writeFileSync(filename, JSON.stringify({})) : console.log(error.code)
            return data
        }
    },
    saveData: (filename, data) => {
        try {
            fs.writeFileSync(filename, JSON.stringify(data))
            return true
        } catch (error) {
            return false
        }
    },
}