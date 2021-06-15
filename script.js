const cadastrar = () => {
  let nomeCurso = document.getElementById('nome').value
  let campoNomeCurso = document.getElementById('nome_curso')

  let dataDeInicio = document.getElementById('dataInicio').value
  let campoDataInicio = document.getElementById('data_inicio')


  let dataDeFim = document.getElementById('dataFim').value
  let campoDataFim = document.getElementById('data_fim')


  let tempoDuracao = document.getElementById('duracao').value
  let campoDuracao = document.getElementById('tempo_duracao')

  let textoDescricao = document.getElementById('descricao').value
  let campoDescricao = document.getElementById('area-descricao')



  campoNomeCurso.innerHTML = nomeCurso

  campoDataInicio.innerHTML = dataDeInicio

  campoDataFim.innerHTML = dataDeFim

  campoDuracao.innerHTML =`${tempoDuracao} semanas`

  campoDescricao.innerHTML = textoDescricao
}