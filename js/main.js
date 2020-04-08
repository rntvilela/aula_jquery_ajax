function consulta_cep() {
	$('.barra_progresso').show();
	var cep = document.getElementById("CEP").value;
	var url = "https://viacep.com.br/ws/"+cep+"/json/";

	$.ajax({
		url: url,
		type: 'GET',
		success: function (response) {
			console.log(response);
			$('#titulo_cep').html("CEP "+response.cep);
			$('#logradouro').html(response.logradouro);
			$('#bairro').html(response.bairro);
			$('#localidade').html(response.localidade);
			$('#uf').html(response.uf);
			$('.cep').show('slow/400/fast');
			$('.barra_progresso').hide();
		}
	})
}

$(function () {
	$('.cep').hide('slow/400/fast');
	$('.barra_progresso').hide();
})