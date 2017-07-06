   <!DOCTYPE html>
   <html>
   
   <body>
    Choose file to upload<br>
    <form action="http://localhost:8080/Webtech2Project/rest/file/upload" method="post" enctype="multipart/form-data">
    	<input name="file" id="filename" type="file" /><br><br>
    	<button name="submit" type="submit">Upload</button>




    <label><b>Username</b></label>
    <input id= "name" type="text" placeholder="Enter Username" name="uname" value="tester" required> 

    <label><b>Password</b></label>
    <input id ="password" type="text" placeholder="Enter Password" name="psw" value="test" required>

    <button type="button" onclick="fetch()">Fetch Credentials</button>
    <button type="button" onclick="login()" >Login</button>
    <button type="button" onclick="checklogin()" >Check login</button>
    <input type="checkbox" checked="checked"> Remember me
    	




    	
    	
    	<h2>Test for Fetching</h2>

<button type="button" onclick="loadDoc()">Try a Fetch</button>
<br><br>
<p id="demo"></p>
<p id="demo2"></p>

<script type ="text/javascript">

function login(){
	
	 var name = document.getElementById("name").value;
	 var pass = document.getElementById("password").value;
	
	 var xhttp = new XMLHttpRequest();
	  xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	    	document.getElementById("demo2").innerHTML = this.responseText;
	    }
	  };
	  xhttp.open("GET", "http://localhost:8080/Webtech2Project/rest/login/" + name + "/" + pass, true);
	  xhttp.send();

	
    location.href = "home.html";
}



function checklogin(){
	
		
	 var xhttp = new XMLHttpRequest();
	  xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	    	document.getElementById("demo2").innerHTML = this.responseText;
	    }
	  };
	  xhttp.open("GET", "http://localhost:8080/Webtech2Project/rest/login/check", true);
	  xhttp.send();

}


function loadDoc() {
	
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    	document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "http://localhost:8080/Webtech2Project/rest/postitservice/fetch_all", true);
  xhttp.send();
}


function fetch() {
	
	  var xhttp = new XMLHttpRequest();
	  var tosearch = document.getElementById("name").value;

	  xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	    	document.getElementById("demo").innerHTML = this.responseText;
	    	
	    	
	    }
	    else if( this.readyState == 4 && this.status == 403 ){ document.getElementById("demo").innerHTML = "OH NO! NOT AUTHORIZED!";}
	  };
	  xhttp.open("GET", "http://localhost:8080/Webtech2Project/rest/userservice/find_name/" + tosearch, true);
	  xhttp.send();
	}
</script>

</body>
</html>

    