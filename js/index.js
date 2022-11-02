
function Autenticar(data){
      
      fetch('https://ooda.azurewebsites.net/Usuario/Autenticar', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {"Content-type": "application/json; charset=UTF-8"}
      })
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(err => console.log(err))
}
