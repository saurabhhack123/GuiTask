 var showList2 = function() 
 { 
    document.getElementById("dropdown2").style.display = "none"; // Div tag containing the dropdown list is hidden 
   document.getElementById('listbox2').options.length = 0; // If already shown list box, the options are made to 0, which makes it hidden 
   if(!((/^\s*$/).test(document.getElementById("edit2").value)))	 // Checks if white space is entered in edit box 
    { 
    document.getElementById("dropdown2").style.display="block";	 // Makes drop down visible 
    var textBoxString = document.getElementById("edit2").value; 
    var citiesArray = new Array("Delhi","Mumbai","Agra","Aligarh","Kanpur","Ajmer","Aahna","Bangalore","chennai","lucknow","delhi","Jammu");	 // Source list values to be populated in drop down 
    for(var i = 0; i< citiesArray.length; i += 1) 
    {  
       if(citiesArray[i].indexOf(textBoxString) != -1)	 // Checks if search text is like in source string 
     {  
       addItem2(citiesArray[i],citiesArray[i]);	 // Function to populate drop down 
     } 
    } 
   } 
} 

function addItem2(Text,Value) 
{ 
// Create an Option object 
  var opt = document.createElement("option"); // Add an Option object to Drop Down/List Box 
  document.getElementById("listbox2").options.add(opt); // Assign text and value to Option object 
  opt.text = Text; 
  opt.value = Value; 
} 

function selVal2(listval) 
{ 
  document.getElementById("edit2").value = listval.value; // Value shown in list box to shown in edit box 
  document.getElementById("dropdown2").style.display = "none";
} 








