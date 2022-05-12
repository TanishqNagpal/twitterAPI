const {TwitterApi}=require("twitter-api-v2")

const client=new TwitterApi({

    appKey: "UW39UOYu5ouypIKIsND7UAFIS",
    appSecret: "aFwhdqu9rDsTEUOZKQvCxhcL9lSW311sutOgu41SJjlvnac9dy",
    accessToken: "1515658160035360768-7pURY8PHTfAZzEpedgDWRMX2FPtrEF",
    accessSecret: "PpzdUX19ngp3vScH59JPU373wZx7BVdL3LZ4Eu3Z1lw7K"
})

const rwClient=client.readWrite

module.exports=rwClient