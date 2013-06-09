// Declaring valid date character, minimum year and maximum year
var streetArray = new Array("Delhi","Mumbai","Agra","Aligarh","Kanpur");

var dtCh= "/";
var minYear=1900;
var maxYear=2100;

function isInteger(s){
  var i;
    for (i = 0; i < s.length; i++){   
        // Check that current character is number.
        var c = s.charAt(i);
        if (((c < "0") || (c > "9"))) return false;
    }
    // All characters are numbers.
    return true;
}

function stripCharsInBag(s, bag){
  var i;
    var returnString = "";
    // Search through string's characters one by one.
    // If character is not in bag, append to returnString.
    for (i = 0; i < s.length; i++){   
        var c = s.charAt(i);
        if (bag.indexOf(c) == -1) returnString += c;
    }
    return returnString;
}

function daysInFebruary (year){
  // February has 29 days in any year evenly divisible by four,
    // EXCEPT for centurial years which are not also divisible by 400.
    return (((year % 4 == 0) && ( (!(year % 100 == 0)) || (year % 400 == 0))) ? 29 : 28 );
}
function DaysArray(n) {
  for (var i = 1; i <= n; i++) {
    this[i] = 31;
    if (i==4 || i==6 || i==9 || i==11) {this[i] = 30}
    if (i==2) {this[i] = 29}
   } 
   return this;
}

function isDate(dtStr){
  
  var daysInMonth = DaysArray(12);
  var pos1=dtStr.indexOf(dtCh);
  var pos2=dtStr.indexOf(dtCh,pos1+1);
  var strMonth=dtStr.substring(0,pos1);
  var strDay=dtStr.substring(pos1+1,pos2);
  var strYear=dtStr.substring(pos2+1);
  strYr=strYear;
  if (strDay.charAt(0)=="0" && strDay.length>1) strDay=strDay.substring(1);
  if (strMonth.charAt(0)=="0" && strMonth.length>1) strMonth=strMonth.substring(1);
  for (var i = 1; i <= 3; i++) {
    if (strYr.charAt(0)=="0" && strYr.length>1) strYr=strYr.substring(1);
  }
  month=parseInt(strMonth);
  day=parseInt(strDay);
  year=parseInt(strYr);
  if (pos1==-1 || pos2==-1){
    console.log("The date format should be : mm/dd/yyyy");
    return false;
  }
  if (strMonth.length<1 || month<1 || month>12){
    console.log("Please enter a valid month");
    return false;
  }
  if (strDay.length<1 || day<1 || day>31 || (month==2 && day>daysInFebruary(year)) || day > daysInMonth[month]){
    console.log("Please enter a valid day");
    return false;
  }
  if (strYear.length != 4 || year==0 || year<minYear || year>maxYear){
    console.log("Please enter a valid 4 digit year between "+minYear+" and "+maxYear);
    return false;
  }
  if (dtStr.indexOf(dtCh,pos2+1)!=-1 || isInteger(stripCharsInBag(dtStr, dtCh))==false){
    console.log("Please enter a valid date");
    return false;
  }
return true;
}
function isCitiesInrange(city){
// cities list to be used for validation

var citiesArray = new Array("Delhi","Mumbai","Agra","Aligarh","Kanpur","Ajmer","Aahna","Bangalore","chennai","lucknow","delhi","Jammu");

   for(var i=0;i<citiesArray.length;i++)
   {
      if(citiesArray[i]==city)
        { return true;}
   }      
   return false;
}

function ValidateForm(){
  var dt1=document.getElementById('doj');
  var dt2=document.getElementById('opt');
  var txt1 = document.getElementById('edit1').value;
  var txt2 = document.getElementById('edit2').value;  
  
  if((txt1=='') || isCitiesInrange(txt1)==false)
  {
   document.getElementById('error1').innerHTML = 'From Field is not valid'; 
  }
  if((txt2=='') || isCitiesInrange(txt2)==false)
  {
   document.getElementById('error2').innerHTML = 'To Field is not valid'; 
  }

  if ( (dt1.value=='') || isDate(dt1.value)==false){
    dt1.focus();
    document.getElementById('error3').innerHTML = 'Date of Journey is Not valid';
   }

  if(dt2.value !='Optional')
  {
    if( isDate(dt2.value)==false){
    dt2.focus();
    document.getElementById('error4').innerHTML = 'Optional Date is Not Valid'; 
      }
  }

  console.log("Validation terminates !!!"); 
  return true;
 }
