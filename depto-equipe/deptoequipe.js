//Sortable dos nomes dentro do container de departamento
$(function() {
	$(".sortable-names").sortable({
		placeholder: 'sortable-hl-ph-names',
		connectWith: '.sortable-names'
	});
});				

//Sortable dos containeres de departamento
$(function() {
	$(".sortable-cards").sortable({
		placeholder: 'sortable-hl-ph',
		handle: '.card-header'
	});
});

//Toggle do botao +/- para collapse
function reply_click(botao) {
	var depto = "#departamento-" + botao.split("-")[1];
	var icon = "#icon-" + botao.split("-")[1];
	$(depto).on("show.bs.collapse", function(){
		$(icon).removeClass('fa-plus').addClass ('fa-minus');
	});
	$(depto).on("hide.bs.collapse", function(){
		$(icon).removeClass('fa-minus').addClass ('fa-plus');
	});
}

//IMPORTANTE - Conexao com o back-end
//Recupera as informacoes do sortable e guarda em 'departamentos'
function salvar() {
	var departamentos = {};
	
	$(".sortable-names").each(function(i, depto) {
		nomes = []
		$("#" + depto.id + " .depto-nome").each(function(j, nome) {
			nomes.push (nome.id);
		});
		departamentos[depto.id] = nomes;
	});
	
	//Teste apenas -> remover
	console.log (departamentos);
}