 function calculate(){
        var res= document.getElementById("textfield").value
        red=parseInt(res.substr(0, 2),16)
        green= parseInt(res.substr(2, 2),16)
        blue= parseInt(res.substr(4, 2),16)
        // alert("R"+red+"\nG:"+green+"\nB:"+blue)
        var sPer=document.getElementById("shadePer").value
        percentage = sPer/100
        sres=(1-percentage)
        SRresult=red*sres
        SGresult=green*sres
        SBresult=blue*sres
        // alert("Shades+++ \nR:"+SRresult+"\nG:"+SGresult+"\nB:"+SBresult+"\n\n")
        var tPer=document.getElementById("tintPer").value
        tres = tPer/100
        TRresult = red+((255-red)*tres)
        TGresult = green+((255-green)*tres)
        TBresult = blue+((255-blue)*tres)
        labelValue = document.getElementById("resultArea").innerHTML='Shades R:'+SRresult+'\nG:'+SGresult+'\nB:'+SBresult+'\n\n'+'Tint   R:'+TRresult+'\nG:'+TGresult+'\nB:'+TBresult;
       // alert("Shades+++    R:"+SRresult+"\nG:"+SGresult+"\nB:"+SBresult+"\n\n"+"Tint   R:"+TRresult+"\nG:"+TGresult+"\nB:"+TBresult)
}