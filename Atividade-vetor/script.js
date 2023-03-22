
 var objetos = Array('cadeira','impressora','Garfo')
 const btnAdd = document.getElementById('adicionar')
 const novoObjeto = document.getElementById("input-obj").value.trim();

 btnAdd.addEventListener('click', () => {

  if (novoObjeto === "") {
    alert("Informe um valor válido");
    return;
  }
 
  
  if (objetos.includes(novoObjeto)) {
    alert("Objeto já foi adicionado");
    return;
  }
 
  
  objetos.push(novoObjeto);
  console.log(objetos); 
  document.getElementById("input-obj").value = "";

  
})

const btnOrder = document.getElementById('Ordernar')


btnOrder.addEventListener('click', () => {
    var objetos = Array('cadeira','impressora','Garfo')
    objetos.sort();
    console.log(objetos); 


}

)