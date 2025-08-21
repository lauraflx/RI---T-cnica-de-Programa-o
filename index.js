const capitaoAmerica = {
    nome: "Steve Rogers",
    codinome: "Capitao America",
    armaPrincipal: "Escudo Americano",
    armaSecundaria: '',
    velocidade: 85,
    forca: 75,
    resistencia: 80,
    descricao: function(){
        return "Nome do personagem: " + this.nome + "\n" +
        "Codinome: " + this.codinome + "\n" +
        "Arma Principal: " + this.armaPrincipal + "\n" +
        "Arma Secundaria: " + this.armaSecundaria + "\n" +
        "Nivel de força: " + this.forca + "\n" +
        "Nivel de velocidade: " + this.velocidade + "\n" +
        "Nivel de resistencia: " + this.resistencia
    }  
}
 
const homemDeFerro = {
    nome: "Tony Stark",
    codinome: "Homem de Ferro",
    armaPrincipal: "Armadura",
    armaSecundaria: '',
    velocidade: 90,
    forca: 75,
    resistencia: 78,
    descricao: function(){
        return "Nome do personagem: " + this.nome + "\n" +
        "Codinome: " + this.codinome + "\n" +
        "Arma Principal: " + this.armaPrincipal + "\n" +
        "Arma Secundaria: " + this.armaSecundaria + "\n" +
        "Nivel de força: " + this.forca + "\n" +
        "Nivel de velocidade: " + this.velocidade + "\n" +
        "Nivel de resistencia: " + this.resistencia
    }  
}
 
const Thor = {
    nome: "Thor",
    codinome: "Homem de Ferro",
    armaPrincipal: "Martelo Mjonir",
    armaSecundaria: '',
    velocidade: 71,
    forca: 98,
    resistencia: 79,
    descricao: function(){
        return "Nome do personagem: " + this.nome + "\n" +
        "Codinome: " + this.codinome + "\n" +
        "Arma Principal: " + this.armaPrincipal + "\n" +
        "Arma Secundaria: " + this.armaSecundaria + "\n" +
        "Nivel de força: " + this.forca + "\n" +
        "Nivel de velocidade: " + this.velocidade + "\n" +
        "Nivel de resistencia: " + this.resistencia
    }  
}
 
const homemaranha = {
    nome: "Peter Parker",
    codinome: "Homem Aranha",
    armaPrincipal: "lança teia",
    armaSecundaria: '',
    velocidade: 67,
    forca: 76,
    resistencia: 67,
    descricao: function(){
        return "Nome do personagem: " + this.nome + "\n" +
        "Codinome: " + this.codinome + "\n" +
        "Arma Principal: " + this.armaPrincipal + "\n" +
        "Arma Secundaria: " + this.armaSecundaria + "\n" +
        "Nivel de força: " + this.forca + "\n" +
        "Nivel de velocidade: " + this.velocidade + "\n" +
        "Nivel de resistencia: " + this.resistencia
    }  
}
 
const hulk = {
    nome: "Bruce Banner",
    codinome: "hulk",
    armaPrincipal: "super forca",
    armaSecundaria: '',
    velocidade: 76,
    forca: 98,
    resistencia: 67,
    descricao: function(){
        return "Nome do personagem: " + this.nome + "\n" +
        "Codinome: " + this.codinome + "\n" +
        "Arma Principal: " + this.armaPrincipal + "\n" +
        "Arma Secundaria: " + this.armaSecundaria + "\n" +
        "Nivel de força: " + this.forca + "\n" +
        "Nivel de velocidade: " + this.velocidade + "\n" +
        "Nivel de resistencia: " + this.resistencia
    }  
}
 
const doctorstrange = {
    nome: "Stephen Strange",
    codinome: "Doctor Strange",
    armaPrincipal: "artes misticas",
    armaSecundaria: '',
    velocidade: 70,
    forca: 80,
    resistencia: 89,
    descricao: function(){
        return "Nome do personagem: " + this.nome + "\n" +
        "Codinome: " + this.codinome + "\n" +
        "Arma Principal: " + this.armaPrincipal + "\n" +
        "Arma Secundaria: " + this.armaSecundaria + "\n" +
        "Nivel de força: " + this.forca + "\n" +
        "Nivel de velocidade: " + this.velocidade + "\n" +
        "Nivel de resistencia: " + this.resistencia
    }  
}
 
const viuvanegra = {
    nome: "Natasha Romanoff",
    codinome: "viuva negra",
    armaPrincipal: "bastão eletrico",
    armaSecundaria: "mordida da viuva negra",
    velocidade: 70,
    forca: 80,
    resistencia: 89,
    descricao: function(){
        return "Nome do personagem: " + this.nome + "\n" +
        "Codinome: " + this.codinome + "\n" +
        "Arma Principal: " + this.armaPrincipal + "\n" +
        "Arma Secundaria: " + this.armaSecundaria + "\n" +
        "Nivel de força: " + this.forca + "\n" +
        "Nivel de velocidade: " + this.velocidade + "\n" +
        "Nivel de resistencia: " + this.resistencia
    }  
}
 
const thanos = {
    nome: "thanos",
    codinome: "thanos",
    armaPrincipal: "manopla do infinito",
    armaSecundaria: '',
    velocidade: 98,
    forca: 99,
    resistencia: 90,
    descricao: function(){
        return "Nome do personagem: " + this.nome + "\n" +
        "Codinome: " + this.codinome + "\n" +
        "Arma Principal: " + this.armaPrincipal + "\n" +
        "Arma Secundaria: " + this.armaSecundaria + "\n" +
        "Nivel de força: " + this.forca + "\n" +
        "Nivel de velocidade: " + this.velocidade + "\n" +
        "Nivel de resistencia: " + this.resistencia
    }  
}
 
 
const vingadores = [Thor, capitaoAmerica, viuvanegra, hulk, homemaranha, homemDeFerro, doctorstrange, thanos];
function comparar(vingador1, vingador2) {
  console.log("Comparação");
  console.log(vingador1.descricao());
  console.log(vingador2.descricao());
  const atributos = ["forca", "velocidade", "resistencia"];
  atributos.forEach(atributo => {
    if (vingador1[atributo] > vingador2[atributo]) {
      console.log(`${vingador1.codinome} vence em ${atributo}!`);
    } else if (vingador1[atributo] < vingador2[atributo]) {
      console.log(`${vingador2.codinome} vence em ${atributo}!`);
    } else {
      console.log(`Empate em ${atributo}!`);
    }
  });
  console.log("\n");
}

vingadores.forEach((p1, i) => {
  vingadores.slice(i + 1).forEach(p2 => {
    comparar(p1, p2);
  });
});
