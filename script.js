class Produto {

  constructor() {
    this.arrayProduto = []
  }

  lerDados() {
    let produto = {}

    produto.nome = document.getElementById('nome').value
    produto.dataInicio = document.getElementById('dataInicio').value
    produto.dataFinal = document.getElementById('dataFim').value
    produto.duracao = document.getElementById('duracao').value
    produto.descricao = document.getElementById('descricao').value

    return produto
  }

  listarTabela() {
    let tbody = document.getElementById('tbody')
    tbody.innerText =''

    for(let i = 0; i < this.arrayProduto.length; i++) {
      let tr = tbody.insertRow()

      let td_nome = tr.insertCell()
      let td_dataInicio = tr.insertCell()
      let td_dataFinal = tr.insertCell()
      let td_duracao = tr.insertCell()
      let td_descricao = tr.insertCell()

      td_nome.innerText = this.arrayProduto[i].nome
      td_dataInicio.innerText = this.arrayProduto[i].dataInicio
      td_dataFinal.innerText = this.arrayProduto[i].dataFinal
      td_duracao.innerText = this.arrayProduto[i].duracao
      td_descricao.innerText = this.arrayProduto[i].descricao
    }
  }

  adicionar(produto) {
    this.arrayProduto.push(produto)
  }

  cadastrar(){
    let produto = this.lerDados()
    this.adicionar(produto)

    this.listarTabela()
  }

}

var produto = new Produto()