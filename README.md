# Bootstrap Confirm Dialog
Plugin para janelas de dialogos de confirmação, substitui a função <code>confirm()</code> do JavaScript de forma elegante.
<h3>Full</h3>
Na versão Full é possível difinir a linguagem e o titulo da janela, além da mensagem e das funções de callback.
<h4>Usando</h4>
<pre>
<code>
  confirmDialog({
		message:'Tem certeza que deseja confirmar?',
		language:'english.json',
		onConfirm: function(){
			alert('Confimou')
		},
		onDismiss: function(){
			alert('Não')
		}
	});
</code>
</pre>
<h4>Liguagem (Idioma)</h4>
Se a linguagem não for informada será usada a padrão português.
<pre>
<code>
{
	"title": "Confirm",
	"message": "Standard message",
	"btn_dismiss": "No",
	"btn_confirm": "Yes"
}
</code>
</pre>

<h3>Basic</h3>
Na versão básica é possível informar apenas a mensagem a ser mostrada e as funções callback
<h4>Usando</h4>
<pre>
<code>
 confirmDialog('Você tem certeza que deseja apagar?', function(){
		alert("Confirmou")
	}, function(){
		alert("Não")
	});
</code>
</pre>
