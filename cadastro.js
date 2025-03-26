async function cadastro(){
    let parametros = {
        "name": document.getElementById("nome").value,
        "email": document.getElementById("email").value,
        "user_type_id": 1,
        "password": document.getElementById("senha").value,
        "cpf_cnpj": document.getElementById("cpf_cnpj").value,
        "terms": 1,
        "birthday": document.getElementById("data").value
    };

    let url = "https://go-wash-api.onrender.com/api/user";
    let api = await fetch(url, {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(parametros)
    });

    if (api.ok){
        let response = await api.json()
        console.log(response)
    }else{

    }
}