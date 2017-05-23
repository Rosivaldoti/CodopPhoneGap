req = null;

window.onload = function(){
	document.getElementById("btConsulta").onclick = consultaOperadora;
	document.getElementById("btSair").onclick = sairAPP;
    }


function consultaOperadora() {
	try{
	   var num = new String(document.getElementById("numTelefone").value);
	if(num ){
		
	
		
	}
	var url = encodeURI("http://consultas.portabilidadecelular.com"
			+"/painel/consulta_numero.php?" +"user=harleydelima&pass=92445536ctr&search_number="
			+num+"&nome");
    
	if (window.XMLHttpRequest) {
		
	    req = new XMLHttpRequest();     
	}
	else if (window.ActiveXObject) {
	         req = new ActiveXObject("Microsoft.XMLHTTP");    // Internet Explorer >= versão 5
	     }
    req.onreadystatechange = callback;
	req.open("GET", url, true);
     req.setRequestHeader('Content-Type', 'text/html; charset=UTF-8');
    req.send(null);
	}catch(e){
		
	}
}

function callback() {
	
    if (req.readyState == 4) {
		
	    if (req.status == 200){
			if(req.responseText=="55999"){
				document.getElementById("resultado").innerHTML="Error número inválido";
				return;
			}
			var num = document.getElementById("numTelefone").value;
			document.getElementById("resultado").innerHTML += req.responseText+"--"+num;
		
        }
        else{
		    console.log("Erro: " + req.status + " Descrição: " + req.statusText);
            alert("Sistema indisponivel no momento\n"
                 +"Tente novamente mais tarde")
        }
	}



	
}
function sairAPP(){
	navigator.app.exitApp();}

