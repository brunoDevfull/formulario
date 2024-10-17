

function limparForm() {
  document.querySelector("input[name= 'nome']").value = "" //limpar campos com esses id
  document.querySelector("input[name= 'descricao']").value = ""
  document.querySelector("input[name= 'preco']").value = ""

}

function adicionarProduto() {
  console.log('adicionarProdutos')
  const nome = document.querySelector('input[name="nome').value
  const descricao = document.querySelector('input[name="descricao').value
  const preco = document.querySelector('input[name="preco').value

  console.log(`nome: ${nome}, descrição: ${descricao}, preço: ${preco}`)

  const produtoNovo = `<p>nome: ${nome}</p> <p>descrição: ${descricao}</p> <p>preço: ${preco}</p>`
  const elementoLista = document.querySelector('#produtos')

  elementoLista.innerHTML = `${elementoLista.innerHTML} <li>${produtoNovo}</li>`

  limparForm()



}

