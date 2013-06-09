var showList1 = function() 
 { 
    document.getElementById("dropdown1").style.display = "none"; // Div tag containing the dropdown list is hidden 
    document.getElementById('listbox1').options.length = 0; // If already shown list box, the options are made to 0, which makes it hidden 

   if(!((/^\s*$/).test(document.getElementById("edit1").value)))	 // Checks if white space is entered in edit box 
   { 
    document.getElementById("dropdown1").style.display="block";	 // Makes drop down visible 
    var textBoxString = document.getElementById("edit1").value; 
    var citiesArray = new Array("Delhi","Mumbai","Agra","Aligarh","Kanpur","Ajmer","Aahna","Bangalore","chennai","lucknow","delhi","Jammu");	 // Source list values to be populated in drop down 
   
   for(var i = 0; i< citiesArray.length; i += 1) 
   { 
     if(citiesArray[i].indexOf(textBoxString) != -1)	 // Checks if search text is like in source string 
    { 
      addItem1(citiesArray[i],citiesArray[i]);	 // Function to populate drop down 
    } 
     } 
   } 
}  

function addItem1(Text,Value) 
{ 
// Create an Option object 
  var opt = document.createElement("option"); // Add an Option object to Drop Down/List Box 
  document.getElementById("listbox1").options.add(opt); // Assign text and value to Option object 
  opt.text = Text; 
  opt.value = Value; 
} 

function selVal1(listval) 
{ 
 document.getElementById("edit1").value = listval.value; // Value shown in list box to shown in edit box 
 document.getElementById("dropdown1").style.display = "none"; // when i used to select list options should be hidden than
} 





