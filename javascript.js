// url Async requesting function
function httpGetAsync(theUrl, callback)
{
    // create the request object
    var xmlHttp = new XMLHttpRequest();

    // set the state change callback to capture when the response comes in
    xmlHttp.onreadystatechange = function()
    {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
        {
            callback(xmlHttp.responseText);
        }
    }

    // open as a GET call, pass in the url and set async = True
    xmlHttp.open("GET", theUrl, true);

    // call send with no params as they were passed in on the url string
    xmlHttp.send(null);

    return;
}

// callback for the random search
function tenorCallback_randomsearch(responsetext)
{
    // parse the json response
    var response_objects = JSON.parse(responsetext);

    top_10_gifs = response_objects["results"];

	var caller = $("#emcee"),
    box = $("#box");

function foo()
{
    var randX = Math.floor(Math.random() * (window.innerWidth - 100));
    var randY = Math.floor(Math.random() * (window.innerHeight - 100));
    console.log([randX, randY]);
    caller.stop().animate({"left": randX + "px", "top": randY + "px"});

}

$(document).ready(function() {
    
    caller.on('mouseenter', foo);
    caller.on('click', function(){
        alert("Não foi dessa vez, tente novamente");
    });
    
});
    // load the GIFs -- for our example we will load the first GIFs preview size (nanogif) and share size (tinygif)

   //COLOCAR AQUI OS CDIGOS QUE ESTÃO COM O JOÃO
   document.getElementById("preview_gif").src = top_10_gifs[1]["media"][0]["nanogif"]["url"];
    document.getElementById("share_gif").src = top_10_gifs[2]["media"][0]["tinygif"]["url"];

    document.getElementById("preview_gif1").src = top_10_gifs[3]["media"][0]["nanogif"]["url"];
    document.getElementById("share_gif1").src = top_10_gifs[4]["media"][0]["tinygif"]["url"];

    document.getElementById("preview_gif2").src = top_10_gifs[5]["media"][0]["nanogif"]["url"];
    document.getElementById("share_gif2").src = top_10_gifs[6]["media"][0]["tinygif"]["url"];

    document.getElementById("preview_gif3").src = top_10_gifs[7]["media"][0]["nanogif"]["url"];
    document.getElementById("share_gif3").src = top_10_gifs[8]["media"][0]["tinygif"]["url"];

    document.getElementById("preview_gif4").src = top_10_gifs[9]["media"][0]["nanogif"]["url"];
    document.getElementById("share_gif4").src = top_10_gifs[10]["media"][0]["tinygif"]["url"];

    document.getElementById("preview_gif5").src = top_10_gifs[11]["media"][0]["nanogif"]["url"];
    document.getElementById("share_gif5").src = top_10_gifs[12]["media"][0]["tinygif"]["url"];
 
    document.getElementById("preview_gif6").src = top_10_gifs[13]["media"][0]["nanogif"]["url"];
    document.getElementById("share_gif6").src = top_10_gifs[14]["media"][0]["tinygif"]["url"];

    document.getElementById("preview_gif7").src = top_10_gifs[15]["media"][0]["nanogif"]["url"];
    document.getElementById("share_gif7").src = top_10_gifs[16]["media"][0]["tinygif"]["url"];

    document.getElementById("preview_gif8").src = top_10_gifs[17]["media"][0]["nanogif"]["url"];
    document.getElementById("share_gif8").src = top_10_gifs[18]["media"][0]["tinygif"]["url"];

    document.getElementById("preview_gif9").src = top_10_gifs[19]["media"][0]["nanogif"]["url"];
    document.getElementById("share_gif9").src = top_10_gifs[20]["media"][0]["tinygif"]["url"];

    document.getElementById("preview_gif10").src = top_10_gifs[21]["media"][0]["nanogif"]["url"];
    document.getElementById("share_gif10").src = top_10_gifs[22]["media"][0]["tinygif"]["url"];

    document.getElementById("preview_gif11").src = top_10_gifs[23]["media"][0]["nanogif"]["url"];
    document.getElementById("share_gif11").src = top_10_gifs[24]["media"][0]["tinygif"]["url"];

    document.getElementById("preview_gif12").src = top_10_gifs[25]["media"][0]["nanogif"]["url"];
    document.getElementById("share_gif12").src = top_10_gifs[26]["media"][0]["tinygif"]["url"];

    document.getElementById("preview_gif13").src = top_10_gifs[27]["media"][0]["nanogif"]["url"];
    document.getElementById("share_gif13").src = top_10_gifs[28]["media"][0]["tinygif"]["url"];

    document.getElementById("preview_gif14").src = top_10_gifs[29]["media"][0]["nanogif"]["url"];
    document.getElementById("share_gif14").src = top_10_gifs[30]["media"][0]["tinygif"]["url"];

    document.getElementById("preview_gif15").src = top_10_gifs[31]["media"][0]["nanogif"]["url"];
    document.getElementById("share_gif15").src = top_10_gifs[32]["media"][0]["tinygif"]["url"];
 
    document.getElementById("preview_gif16").src = top_10_gifs[33]["media"][0]["nanogif"]["url"];
    document.getElementById("share_gif16").src = top_10_gifs[34]["media"][0]["tinygif"]["url"];

    document.getElementById("preview_gif17").src = top_10_gifs[35]["media"][0]["nanogif"]["url"];
    document.getElementById("share_gif17").src = top_10_gifs[36]["media"][0]["tinygif"]["url"];

    document.getElementById("preview_gif18").src = top_10_gifs[37]["media"][0]["nanogif"]["url"];
    document.getElementById("share_gif18").src = top_10_gifs[38]["media"][0]["tinygif"]["url"];

    document.getElementById("preview_gif19").src = top_10_gifs[39]["media"][0]["nanogif"]["url"];
    document.getElementById("share_gif19").src = top_10_gifs[40]["media"][0]["tinygif"]["url"];

    document.getElementById("preview_gif20").src = top_10_gifs[41]["media"][0]["nanogif"]["url"];
    document.getElementById("share_gif20").src = top_10_gifs[42]["media"][0]["tinygif"]["url"];

    document.getElementById("preview_gif21").src = top_10_gifs[43]["media"][0]["nanogif"]["url"];
    document.getElementById("share_gif21").src = top_10_gifs[44]["media"][0]["tinygif"]["url"];
    
    document.getElementById("preview_gif22").src = top_10_gifs[45]["media"][0]["nanogif"]["url"];
    document.getElementById("share_gif22").src = top_10_gifs[46]["media"][0]["tinygif"]["url"];
    
    document.getElementById("preview_gif23").src = top_10_gifs[47]["media"][0]["nanogif"]["url"];
    document.getElementById("share_gif23").src = top_10_gifs[48]["media"][0]["tinygif"]["url"];
    
    document.getElementById("preview_gif24").src = top_10_gifs[49]["media"][0]["nanogif"]["url"];
    document.getElementById("share_gif24").src = top_10_gifs[0]["media"][0]["tinygif"]["url"];
    return;

}

//API
// function to request random gifs for a given search term
function grab_data()
{
    // set the apikey and limit
    var apikey = "74C43CDD1LZE";
    var lmt = 50;
    

    // test search term
    var search_term = "gifs";

    // using default locale of en_US
    var search_url = "https://api.tenor.com/v1/random?q=" + search_term + "&key=" +
            apikey + "&limit=" + lmt;

    httpGetAsync(search_url,tenorCallback_randomsearch);

    // data will be loaded by each call's callback
    return;
}


// SUPPORT FUNCTIONS ABOVE
// MAIN BELOW

// start the flow
grab_data();

//


