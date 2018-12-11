### Uso

* #### Incluir todas as dependências

* #### deptoequipe.js
  * function salvar: nela contém a ordenação de departamentos e membros da equipe por departamento
    * Ex: departamento2: ['nome4', 'nome6', nome'7']
    * departamento1: ['nome3', 'nome1', 'nome2']

* #### deptoequipe.html
  * cada cartão possui um id (i) e três tags (departamento, botao e icon), e uma lista de nomes dentro
    * departamento-i, botao-i, icon-i (importante que a numeração seja igual)
      * os ids devem ser únicos!
      * departamento-1 -> botao-1 -> icon-1
      * departamento-2 -> botao-2 -> icon-2
      * ... departamento-L -> botao-L -> icon-L
    * os ids dos nomes são independentes dos ids dos departamentos/botões/ícones
      * os ids dos nomes devem ser únicos!
      * nome-1, nome-2, .., nome-N
  * é possível mudar um membro de departamento arrastando-o para outro cartão 
  
#### Exemplo de escrita dinâmica:
```java
//id dos nomes
k = 0;
for (i = 0; i < departamentos.lenght(); i++) {
  //Sortable Card
  for (j = 0; j < departamentos[i].lenght(); j++) {
    //Sortable Names
    k++;
  }
}
```

```php
<!-- Sortable Card -->
<div class="card mb-3 border-success shadow">
  <div class="card-header h5 text-white bg-success shadow">
    $(departamento[$(i)]).nome;
    <button data-toggle="collapse" data-target="#departamento-$(i)" id = "botao-$(i)" class = "btn btn-success pull-right" onClick = "reply_click(this.id)">
      <i id = "icon-$(i)" class = "fa fa-plus icon-toggle"></i>
    </button>
  </div>
  <!-- Sortable Names -->
  <div class="card-body sortable-names collapse" id = "departamento-$(i)">
    <h5 class="depto-nome" id = "nome-$(k)">$(departamento[i].membro[$(j)]</h5>
    <h5 class="depto-nome" id = "nome-$(k + 1)">$(departamento[i].membro[$(j + 1)]</h5>
    <h5 class="depto-nome" id = "nome-$(k + 2)">$(departamento[i].membro[$(j + 2)]</h5>
  </div>
  <!-- /Sortable Names -->
</div>
<!-- /Sortable Card -->
```          
