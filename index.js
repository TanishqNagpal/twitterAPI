const rwClient =require("./twitterClient.js");


const tweet =async () =>{

    try{

        await rwClient.v1.tweet("hello")


    }catch(e) {

        console.error(e)
    }
}



tweet();

