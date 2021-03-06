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

  filter() {
    const input = document.getElementById("myInput");
    const text = input.value;
    return this.arrayProduto.filter(filtarArray => filtarArray.nome.includes(text));
  }

  listarTabela() {
    let tbody = document.getElementById('tbody')
    tbody.innerText =''

    const cursos = this.filter();
    for(const curso of cursos) {
      let tr = tbody.insertRow()

      let td_nome = tr.insertCell()
      let td_dataInicio = tr.insertCell()
      let td_dataFinal = tr.insertCell()
      let td_duracao = tr.insertCell()
      let td_descricao = tr.insertCell()

      td_nome.innerText = curso.nome
      td_dataInicio.innerText = curso.dataInicio
      td_dataFinal.innerText = curso.dataFinal
      td_duracao.innerText = curso.duracao + ' Semanas'
      td_descricao.innerText = curso.descricao

      document.getElementById('nome').value = ''
      document.getElementById('dataInicio').value = ''
      document.getElementById('dataFim').value = ''
      document.getElementById('duracao').value = ''
      document.getElementById('descricao').value = ''
    }
    
  }

  adicionar(produto) {
    this.arrayProduto.push(produto)
  }

   cadastrar(){
    let curso = this.lerDados()

    if(curso.nome == '' && curso.dataInicio == '' && curso.dataFinal == '' && curso.duracao == '' ) {
      alert('Os campos abaixo precisam ser preenchidos.')
    } else {
        this.adicionar(curso)
        this.listarTabela()
    }
    
  }

}

const produto = new Produto()
