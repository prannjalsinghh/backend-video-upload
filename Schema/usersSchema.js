const mongoose= require('mongoose')

const user= {
    name:String,
    number:String,
    image:String,
    verified:Boolean,
    work:String,
    about:String,
    rank:String,
    respects:[{
        postedBy:String,
        cameraUsed:String,
        selectedRank:String,
        url:String,
    }]
}

const User = mongoose.model('Users',user)

module.exports=User;
