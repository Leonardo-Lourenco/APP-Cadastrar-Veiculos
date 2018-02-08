document.getElementById('formulario').addEventListener('submit',cadastraVeiculo);

function cadastraVeiculo(e){
 
  var modeloCarro = document.getElementById('modeloCarro').value;
  var placaCarro = document.getElementById('placaCarro').value;
  var time = new Date();

  //Verificar se todos os campos estão preenchidos..
  if(!modeloCarro && !placaCarro){

     alert("Please, enter yours dates...");
     return false;

  }

  carro= {
  	modelo : modeloCarro,
  	placa:placaCarro,
  	hora: time.getHours(),
  	minutos: time.getMinutes()
  }
  

  console.log(carro);
  //localStorage.setItem('teste', "my aplication");
  //console.log(localStorage.getItem('teste'));
  //localStorage.removeItem('teste');
  //console.log(localStorage.getItem('teste'));

  if(localStorage.getItem('patio2') === null){
    var carros= [];
    carros.push(carro);
    localStorage.setItem('patio2',JSON.stringify(carros));

  }else{
     var carros = JSON.parse(localStorage.getItem('patio2'));
     carros.push(carro);
     localStorage.setItem('patio2', JSON.stringify(carros));
  }
  
  //Para remover dados após cadastrar... 
  document.getElementById('formulario').reset(); 

  mostraPatio();

  e.preventDefault();
}

//Função deletar veículo
function deleteCar(placa){

  var carros = JSON.parse(localStorage.getItem('patio2'));

  for(var i =0; i < carros.length; i++){
    if(carros[i].placa == placa){
      carros.splice(i, 1);

    }

    localStorage.setItem('patio2', JSON.stringify(carros));

  }

  mostraPatio();

}




function mostraPatio(){
  var carros = JSON.parse(localStorage.getItem('patio2'));
  var carrosResultado = document.getElementById('resultados');

  carrosResultado.innerHTML = '';
   
  for(var i = 0; i < carros.length; i++){

    var modelo = carros[i].modelo;
    var placa = carros[i].placa;
    var hora = carros[i].hora;
    var minutos = carros[i].minutos;
    
     carrosResultado.innerHTML += '<tr><td>'+ modelo + '</td>'+
                      '<td>'+ placa + '</td>' +
                      '<td>'+ hora + ':' + minutos + '</td>' +
                      '<td><button class="btn btn-danger" onclick="deleteCar(\''+placa+'\')">Delete</button><td/>' +
                   '</tr>';                                               
  }  
}
