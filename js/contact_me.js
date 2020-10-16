$('#sendMessageButton').click(function() {
  var nome = document.getElementById('nome').value
  var email = document.getElementById('email').value
  var location = document.getElementById('localizacao').value
  var data = {nome: nome, email: email, location: location}
  console.log(nome, email, location)
  var url = "https://yw8j9v9wxl.execute-api.us-east-1.amazonaws.com/dev/unicorns"

  $.ajax({
    type: "POST",
    crossDomain: true,
    url: url,
    data: JSON.stringify(data),
    dataType: "json",
    success: function(){
      alert("Unicórnio solicitado com sucesso!");
    },
  })
});
