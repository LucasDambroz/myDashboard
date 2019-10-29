const arrayMateriais = [ 'Apontador','Canetinhas Sylvapen','Lapiseria','Caneta','Clips coloridos','Corretivo','Régua','Borracha','Tesoura'];

const materialEscolar = document.getElementById("materialEscolar");

arrayMateriais.forEach((material) => {
    option = new Option(material, material.toLowerCase());
    materialEscolar.options[materialEscolar.options.length] = option;
  });

function desabilitarBotao(){
  
    
}