
 var objetos = Array('cadeira','impressora','Garfo')
 const btnAdd = document.getElementById('adicionar')
 
 

 btnAdd.addEventListener('click', () => {
  let obj = document.getElementById('input-obj')
  let valor = obj.value


  if ( valor === '') {
    alert("Informe um valor válido");
    
  }
 
  
  else if (objetos.indexOf(valor) === -1) {
    objetos.unshift(valor)
    console.log(objetos)
  }

  else if(objetos.indexOf(valor) !== -1){
    alert("Objeto já existe");
    
  }
  
document.getElementById('input-obj').value = ''

  const btnOrder = document.getElementById('Ordernar')


  btnOrder.addEventListener('click', () => {
      
      
      console.log(objetos.sort()); 
  
  
  })
  
})



