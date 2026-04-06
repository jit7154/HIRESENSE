const multer = require("multer")

const upload = multer({
    storage:multer.memoryStorage(),
    limits:{
        fileSize:3*1024*1024 //basically 3mb hai ye
    }
})

module.exports=upload