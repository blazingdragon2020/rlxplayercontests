var xlsx = require("xlsx");

const Brawlstars = require("brawlstars.js");
const Discord = require("discord.js");
const dtoken = 0
const btoken  = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjQ2OWJlMTMyLWNlYjAtNDU3MS1iYTI2LThkMjllNmQyZDRiNSIsImlhdCI6MTU5NzY4MDQ4NSwic3ViIjoiZGV2ZWxvcGVyL2I4NzRkM2Y5LTk0MWQtNWJhNy02NjY4LTExOGM1NDhiMGZkMCIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiNDkuMzcuMTEuMjE2Il0sInR5cGUiOiJjbGllbnQifV19.tuDDUhnZMXGSP7tywPx9Ae_tp1DwenWzZcPC6TKHmytrlsTK4XUbt2cd-aG-mTPmWC0Fry4i874QHy14J0mWhw" 
const bclient = new Brawlstars.Client(btoken)
const dclient = new Discord.Client()

var wb = xlsx.readFile("relicsplayerlist.xlsx")
var crr = wb.Sheets["Relics_Royale"]
var crv = wb.Sheets["Relics_Valiant"]
ctag = ['#VR2RJQYY' , '#20G88CG2J']

cws = [crr,crv]

dclient.on("ready" , async() =>{
    cron.schedule('00 30 02 * * Monday' , () =>{

    if(Math.floor((new Date().now() /604800))%2) return
    

    i = 0
    for(club of cws){
        
        
    var iclub = await bclient.getClub(`${ctag[i]}`)
    tbinput = iclub.members

    
    for(player of tbinput){
        player.Season_Start = player.trophies
        player.Season_End = 0
        player.Trophies_Gained = 0
        xlsx.utils.sheet_add_json(club , tbinput)
    xlsx.writeFile(wb, 'relicsplayerlist.xlsx');

    }
    console.log(i)
    i = i+ 1
    }

    



},
{
    scheduled: true,
    timezone: "Pacific"
}


  cron.schedule('00 30 00 * * Monday' , () =>{

    if(Math.floor((new Date().now() /604800))%2) return

    i = 0
    for(club of cws){
        
        
    var iclub = await bclient.getClub(`${ctag[i]}`)
    tbinput = iclub.members

    
    for(player of tbinput){

        player.Season_End = player.trophies
        player.Trophies_Gained  = player.Season_End - player.Season_Start
        
        
        xlsx.utils.sheet_add_json(club , tbinput)
    xlsx.writeFile(wb, 'relicsplayerlist.xlsx');

    }
    console.log(i)
    i = i+ 1
    }

    // beyond this line,the code is still under development,until i get a more efficient method to send the results.....................
for(cclub of cws){
    clubdata = cclub
} 

    tbinput = await tbinput.sort((a,b) => (a.Trophies_Gained > b.Trophies_Gained) ? -1 : ((b.Trophies_Gained > a.Trophies_Gained) ? 1 : 0)); 
 dclient.channels.cache.get('746431066612564019').send("__**RESULTS OF THIS SEASON!**___")
 var i = 0
for(aplayer of cresults){
  
  if(i=1){
    dclient.channels.cache.get('746431066612564019').send("THIS SEASON'S WINNER IS.....")

  }
  dclient.channels.cache.get('746431066612564019').send(`**Rank ${i}**: ${aclub.Club_Name};Season Start:${aclub.Season_Start};Season End:${aclub.Season_End} Trophies Gained: ${aclub.Trophies_Gained}`)
   
 i = i+1

    



},
{
    scheduled: true,
    timezone: "Pacific"
}

)
}








dclient.login("NzQ2NTc0NTgyNjgwNTE4NzU0.X0CTww.UPhcEBi-TzsPOEbQNoEsGtnQYDI");


