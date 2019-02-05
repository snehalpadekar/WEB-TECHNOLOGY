
function validation()
{
	 var name = document.forms["myform"]["Name"]; 
	 var address = document.forms["myform"]["Address"]; 
	 var qualification = document.forms["myform"]["Qualification"];  
	 var contactno = document.forms["myform"]["Contact no."];  
	 var emailid = document.forms["myform"]["Emailid"];  
	 var bdate = document.forms["myform"]["date"];
     var bloodgroup =  document.forms["myform"]["bloodgroup"];  
     var gender = document.forms["myform"]["gender"];
     var city = document.forms["myform"]["City"];  
	   
	    if (name.value == "")                                  
	    { 
	        window.alert("Please enter your name."); 
	        name.focus(); 
	        return false; 
	    } 
	   
	    if (address.value == "")                               
	    { 
	        window.alert("Please enter your address."); 
	        name.focus(); 
	        return false; 
	    } 
	    if (qualification.value == "")                               
	    { 
	        window.alert("Please enter your qualification."); 
	        qualification.focus(); 
	        return false; 
	    } 
	       
	    /*if (contactno.value == "")                           
	    { 
	        window.alert("Please enter your telephone number."); 
	        contactno.focus(); 
	        return false; 
	    } */
	    
	    if (email.value == "")                                   
	    { 
	        window.alert("Please enter a valid e-mail address."); 
	        email.focus(); 
	        return false; 
	    } 
	   
	    if (email.value.indexOf("@", 0) < 0)                 
	    { 
	        window.alert("Please enter a valid e-mail address."); 
	        email.focus(); 
	        return false; 
	    } 
	   
	    if (emailid.value.indexOf(".", 0) < 0)                 
	    { 
	        window.alert("Please enter a valid e-mail address."); 
	        emailid.focus(); 
	        return false; 
	    } 
	   
	    
	   
	    if (bdate.value == "")                        
	    { 
	        window.alert("Please enter your bdate"); 
	        bdate.focus(); 
	        return flase; 
	    } 
	   
	    if (bloodgroup.selectedIndex < 1)                  
	    { 
	        alert("Please enter your bloodgroup."); 
	        bloodgroup.focus(); 
	        return false; 
	    } 

	    if (gender.selectedIndex < 1)                  
	    { 
	        alert("Please enter your bloodgroup."); 
	        gender.focus(); 
	        return false; 
	    } 

	    if (city.selectedIndex < 1)                  
	    { 
	        alert("Please enter your bloodgroup."); 
	        city.focus(); 
	        return false; 
	    } 
	    return true; 
	
}
