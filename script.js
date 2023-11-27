const listaProdutos = []

const pedidos = []

const historicoPedidos = []
function executaPadaria(){
      let opcaoSelecionada;
      do{
            let opcaoSelecionada = parseInt(prompt(
                  "1 - Listar Produtos \n 2 - Listar por preço \n 3 - Listar por ordem alfabetica \n 4 - Adicionar um Novo Produto ao Catálogo \n 5 - Editar produto \n 6 - Deletar Produto \n 7 - Receber Pedidos dos Clientes \n 8 - Valor total em estoque \n 9- Relatorios de vendas \n "
            ))
            switch(opcaoSelecionada){
                  case 1:
                        listarProdutos()
                        executaPadaria()
                  case 2:
                        listarPorOrdemDePreço()
                        executaPadaria()
                  case 3:
                        listarPorOrdemAlfabetica()
                        executaPadaria()
                  case 4:
                        cadastroDeProdutos()
                        executaPadaria()
                  case 5:
                        editarProduto()
                        executaPadaria()
                  case 6:
                        deletarProduto()
                        executaPadaria()
                  case 7: 
                        pedidosClientes()
                        executaPadaria()
                  case 8:
                        valorTotal()
                        executaPadaria()
                  case 9: 
                        gerarRelatorio(pedidos)
                        executaPadaria()


            }
      }while(opcaoSelecionada >9)
}
executaPadaria()

/* Listar Todos os Produtos Disponíveis: O sistema deve ser capaz de exibir uma lista de todos os produtos disponíveis na padaria. João vai poder escolher no momento entre listagem simplificada, por ordem de preço, ou por ordem alfabética. */

function listarProdutos(){
      listaProdutos.forEach((produto) => {
            if(produto.estoque >= 1)
            console.log(`ID: ${produto.id}, Nome: ${produto.nome}, Estoque: ${produto.estoque}, Preço: ${produto.preco} `)
      } )
}

function listarPorOrdemDePreço(){
      listaProdutos.forEach((produto) =>{
      if(produto.estoque >= 1)
                  
                  console.log(`ID: ${produto.id}, Nome: ${produto.nome}, Estoque: ${produto.estoque}, Preço: ${produto.preco} `)
      })
}
function listarPorOrdemAlfabetica(){
      listaProdutos.sort((a, b) =>{
            if(a.nome < b.nome){
                  return -1
            }
      })
      listaProdutos.forEach((produto) =>{
            if(produto.estoque >= 1)
            console.log(`ID: ${produto.id}, Nome: ${produto.nome}, Estoque: ${produto.estoque}, Preço: ${produto.preco} `)
            })
}


/* Adicionar um Novo Produto ao Catálogo: O sistema deve permitir que o usuário adicione um novo produto ao catálogo. O produto deve ser adicionado com um nome, preço e estoque. */
function cadastroDeProdutos(){
      let continuar = true
      while(continuar){
      let nome = prompt('insira  nome do prioduto')
      let estoque = prompt('insira o estoque')
      let preco = prompt('insira um preco do produto')
      const novoProduto = {
            id: Date.now(),
            nome,
            estoque,
            preco,
      }
      listaProdutos.push(novoProduto)
      continuar = confirm("deseja cadastrar mais um produto?")
      }
}

/* Editar Produto do Catálogo: O sistema deve permitir que o usuário edite as informações de um produto existente no catálogo. Lembre-se que o estoque nunca pode ser menor que 0. */
function editarProduto(){
      let novoNome = prompt('insira um novo produto')
      let novoPreco = prompt('insira novo preço')
      let novoEstoque = prompt('insira um novo estoque')
      if(novoEstoque < 0){
            return
      }
      const encontrarId = Number(prompt('insira um indice para atulizar um prato ex: 1,2,3,4,5'))
      listaProdutos.findIndex(produto => produto.id === encontrarId)
            if(encontrarId < 0){
                  alert('prato nao encontrado')
                  executaPadaria()
            } else{
                  listaProdutos[encontrarId].nome = novoNome
                  listaProdutos[encontrarId].preco = novoPreco
                  listaProdutos[encontrarId].estoque = novoEstoque
            }
}

/* Remover um Produto do Catálogo: O sistema deve permitir que o usuário remova um produto do catálogo. */
function deletarProduto(){
      const indicePedido = Number(prompt('informe o ID que gostaria de deletar ex: 1,2,3,4,5'))
      listaProdutos.findIndex(produto => produto.id === id)
      if(indicePedido < 0){
            console.log('Produto, não encontrado');
            executaPadaria() 
      }
      executaPadaria.splice(indice, 1)
}

/* Receber Pedidos dos Clientes: O sistema deve permitir que os clientes façam pedidos. Um pedido deve conter um ou mais produtos e a quantidade desejada de cada um. O sistema deve armazenar um histórico de pedidos.  */
function pedidosClientes(){
      let continuar = true
      alert("Realize seu pedido asseguir")
      while(continuar){
      let nome = prompt('insira um nome do produto')
      let estoque = prompt('insira o estoque do pedido')
      let preco = prompt('insira um preco o peido')
      const novoPedido = {
            id: Date.now(),
            nome,
            estoque,
            preco,
      }
      pedidos.push(novoPedido)
      continuar = confirm("deseja fazer mais um pedido?")
      }
}

/* Somar o valor do estoque: João deve poder somar o preço de venda do seu estoque */
function valorTotal() {
      const valor = pedidos.reduce((acc, cur) => acc + cur.preco, 0);
      console.log(valor);
}
/* Bônus:

Receber Pedidos dos Clientes: O sistema deve permitir que os clientes façam
pedidos. Um pedido deve conter um ou mais produtos e a quantidade desejada de
cada um.
● Dica: Você pode criar um array separado para armazenar os pedidos. Cada
pedido pode ser um objeto que contém informações como o cliente e uma
lista de produtos pedidos. */

/* Relatório Diarios: João deve poder fazer um relatório das vendas que aconteceram. Deve conter quantas vendas foram realizadas e qual o faturamento. */

function gerarRelatorio(pedidos) {
  let numVendas = 0;
  let faturamento = 0;

  for (let i = 0; i < pedidos.length; i++) {
    if (pedidos[i].estoque === 0) {
      continue;
    }

    numVendas += pedidos[i].estoque;
    faturamento += pedidos[i].estoque * pedidos[i].preco;
  }

  return console.log(`Foram realizadas ${numVendas} vendas, totalizando um faturamento de R$${faturamento.toFixed(2)}.`);
}

