/*
|-------------------------------------------------------------------|
|					Bootstrap Confirm Dialog - Full					|
|	@description: Plugin para janelas de dialogos de confirmaçao	|
|	@author: Jayr Alencar											|
|	@uriauthor: www.jayralencar.com.br 								|
|-------------------------------------------------------------------|

*/
function confirmDialog(dados) {
	var language_default = {
		title: "Confirmação",
		message: "Deseja confimar esta ação?",
		btn_dismiss: "Não",
		btn_confirm: "Sim"
	}

	if(dados.language){
		if(typeof(dados.language)=='object'){
			language_default = dados.language;
		}else if(typeof(dados.language)=='string'){
			var retorno = $.ajax({
				url: dados.language,
				type:'get',
				dataType:'json',
				async: false,
				success: function(){

				}
			});
			if(retorno.status==200){
				language_default = JSON.parse(retorno.responseText)
			}
		}
	}

	var modal = $('<div/>',{class:'modal fade'});
	var modal_dialog = $('<div/>',{class:'modal-dialog'});
	var modal_content = $('<div/>',{class:'modal-content'});
	var modal_header = $('<div/>',{class: 'modal-header'})
	.append('<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>')
	.append('<h5 class="modal-title">'+((dados.title)?dados.title:language_default.title)+'</h5>');
	var modal_body = $('<div/>',{class: 'modal-body'})
	.append('<h3>'+((dados.message)?dados.message:language_default.message)+'</h3>');
	var btn_dismiss = $('<button/>',{
		class:' btn btn-danger',
		type:'button',
		'data-dismiss':'modal'
	}).html('<span class="glyphicon glyphicon-remove-circle" aria-hidden="true"></span> '+language_default.btn_dismiss);

	var btn_confirm = $('<button/>',{
		class:' btn btn-success',
		type:'button'
	}).html('<span class="glyphicon glyphicon-ok-circle" aria-hidden="true"></span> '+language_default.btn_confirm);

	var modal_footer = $('<div/>',{class: 'modal-footer'})
	.append(btn_dismiss)
	.append(btn_confirm)

	modal_content.append(modal_header).append(modal_body).append(modal_footer).appendTo(modal_dialog);

	modal.append(modal_dialog).modal('show');

	$(btn_confirm).click(function(){
		if(dados.onConfirm){
			dados.onConfirm();
			modal.modal('hide');
		}else{
			alert('Você não definiu a função onConfirm')
		}
	});

	$(btn_dismiss).click(function(){
		if(dados.onDismiss){
			dados.onDismiss();
		}
	});
}