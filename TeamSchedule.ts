interface objectinterface{
    Name:string,
    Id:string,
    Rank:number,
    NumberOfMatch:number
}
let participants: objectinterface[]=[{Name:"raama",Id:"TTWC1",Rank:1,NumberOfMatch:520},
                {Name:"rithi",Id:"TTWC2",Rank:2,NumberOfMatch:240},
                {Name:"tamil",Id:"TTWC3",Rank:3,NumberOfMatch:200},
                {Name:"karthi",Id:"TTWC4",Rank:4,NumberOfMatch:999},
                {Name:"srini",Id:"TTWC5",Rank:5,NumberOfMatch:250},
                {Name:"siva",Id:"TTWC6",Rank:6,NumberOfMatch:350},
                {Name:"kamal",Id:"TTWC7",Rank:7,NumberOfMatch:240},
                {Name:"ravi",Id:"TTWC6",Rank:8,NumberOfMatch:210}];
//-----------------findLeaguesMatches------------------ 
function findLeaguesMatches(){
    let leaguesSchedule:any=[];
    for(let i=0;i<participants.length/2;i++){
        let leaguesSchedules:any={"firstPlayerID":participants[i].Id,
                               "firstPlayer":participants[i].Name,
                               "firstPlayerRank":participants[i].Rank,
                               "secondPlayerID":participants[participants.length-1-i].Id,
                                "secondPlayer":participants[participants.length-1-i].Name,
                                "secondPlayerRank":participants[participants.length-1-i].Rank};
        leaguesSchedule.push(leaguesSchedules);
    }
    return leaguesSchedule; 
}
//-----------------findQualifier-----------------------
function findQualifier(){
    let Qualifier:any=[];
    let findLeaguesMatch=findLeaguesMatches()
    for(let i=0;i<findLeaguesMatch.length;i++){
        if(i%2==0){
            let Qualifiers:any={"leagueMatchID":findLeaguesMatch[i].firstPlayerID,
                            "leagueMatchWinner":findLeaguesMatch[i].firstPlayer,
                            "leagueMatchWinnerRank":findLeaguesMatch[i].firstPlayerRank,};
              Qualifier.push(Qualifiers); 
        }else{
            let Qualifiers:any={"leagueMatchID":findLeaguesMatch[i].firstPlayerID,
                            "leagueMatchWinner":findLeaguesMatch[i].firstPlayer,
                            "leagueMatchWinnerRank":findLeaguesMatch[i].firstPlayerRank};
             Qualifier.push(Qualifiers); 
        } 
    }
    return Qualifier;
}
//-----------------findQualifierMatches----------------
function findQualifierMatches(){
    let QualifierSchedule:any=[];
    let findQualifiers=findQualifier()
     for(let i=0;i<findQualifiers.length;i+=2){
        let QualifierSchedules={"firstPlayer":findQualifiers[i].leagueMatchWinner,
                                "firstPlayerRank":findQualifiers[i].leagueMatchWinnerRank,
                                "secondPlayer":findQualifiers[1+i].leagueMatchWinner,
                                "secondPlayerRank":findQualifiers[1+i].leagueMatchWinnerRank};
        QualifierSchedule.push(QualifierSchedules);
     }
    return QualifierSchedule; 
}
//-----------------findSemiFinalist--------------------
function findSemiFinalist(){
    let semiFinalist:any=[]
    let findQualifierMatch=findQualifierMatches()
    for(let i=0;i<findQualifierMatch.length;i++){
        if( i%2==0){
            let semiFinalists={"leagueMatchWinner":findQualifierMatch[i].firstPlayer,
                              "leagueMatchWinnerRank":findQualifierMatch[i].firstPlayerRank};
            semiFinalist.push(semiFinalists); 
        }else{
            let semiFinalists={"leagueMatchWinner":findQualifierMatch[i].firstPlayer,
                                "leagueMatchWinnerRank":findQualifierMatch[i].firstPlayerRank};
            semiFinalist.push(semiFinalists); 
        }
    }
    return semiFinalist; 
}
//----------------findSemiFinalMatches-----------------
function findSemiFinalMatches(){
    let SemiFinalSchedule:any=[];
    let semiFinalist=findSemiFinalist()
     for(let i=0;i<semiFinalist.length;i+=2){
        let SemiFinalSchedules={"firstPlayer":semiFinalist[i].leagueMatchWinner,
                                "firstPlayerRank":semiFinalist[i].leagueMatchWinnerRank,
                                "secondPlayer":semiFinalist[1+i].leagueMatchWinner,
                                "secondPlayerRank":semiFinalist[1+i].leagueMatchWinnerRank};
        SemiFinalSchedule.push(SemiFinalSchedules);
     }
    return SemiFinalSchedule; 
}
//----------------findFinalist-------------------------
function findFinalist(){
    let Finalist:any=[]
    let findSemiFinalMatch=findSemiFinalMatches()
    for(let i=0;i<findSemiFinalMatch.length;i++){
        if( i%2==0){
            let Finalists={"leagueMatchWinner":findSemiFinalMatch[i].firstPlayer,
                               "leagueMatchWinnerRank":findSemiFinalMatch[i].firstPlayerRank};
             Finalist.push(Finalists); 
        }else{
            let Finalists={"leagueMatchWinner":findSemiFinalMatch[i].firstPlayer,
                            "leagueMatchWinnerRank":findSemiFinalMatch[i].firstPlayerRank};
            Finalist.push(Finalists); 
        }
    }
    return Finalist;
}findFinalist()
//----------------findFinalMatch-----------------------
function findFinalMatch(){
    let finalSchedule:any=[];
    let findFinalists=findFinalist()
    for(let i=0;i<findFinalists.length;i+=2){
        let finalSchedules={"firstPlayer":findFinalists[i].leagueMatchWinner,
                                "firstPlayerRank":findFinalists[i].leagueMatchWinnerRank,
                                "secondPlayer":findFinalists[1+i].leagueMatchWinner,
                                "secondPlayerRank":findFinalists[1+i].leagueMatchWinnerRank};
        finalSchedule.push(finalSchedules);
    }
    return finalSchedule; 
}
//----------------allMatchSchedule---------------------
function allMatchSchedule(){
    if(participants.length==16){
        let allMatch={
            "LEAGUES":findLeaguesMatches(),
            "QUALIFIER":findQualifierMatches(),
            "SEMIFINAL":findSemiFinalMatches(),
            "FINAL":findFinalMatch()
        }
        console.log(allMatch);
    }else if(participants.length==8){
        let allMatch={
            "LEAGUES":findLeaguesMatches(),
            "SEMIFINAL":findQualifierMatches(),
            "FINAL":findSemiFinalMatches(),
        }
        console.log(allMatch);
    }else if(participants.length==4){
        let allMatch={
            "LEAGUES":findLeaguesMatches(),
            "FINAL":findQualifierMatches(),
        }
        console.log(allMatch);
    }
}allMatchSchedule()
