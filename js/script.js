


function consultaCep(){
    let cep = document.getElementById("cep").value;
    let url = "https://viacep.com.br/ws/"+cep+"/json/"
    
    $.ajax({
        url: url,   
        type: "GET",
        success: function(response){
            console.log(response);
            $("#logradouro").html(response.logradouro)
            
        }

    })
}
