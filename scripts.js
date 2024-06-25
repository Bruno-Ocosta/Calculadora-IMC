//Calculadora de IMC
function calcularIMC() {
  const alturaCm = parseFloat(document.getElementById('altura').value);
  const peso = parseFloat(document.getElementById('peso').value);
  const resultado = document.getElementById('resultado');

  if (isNaN(alturaCm) || isNaN(peso)) {
      resultado.textContent = 'Por favor, insira valores válidos.';
      return;
  }

  //
  const alturaM = alturaCm / 100;
  const imc = peso / (alturaM * alturaM);

  let classificacao = '';
  let aux = '';
  let imgSrc = '';

  if (imc < 18.5) {
      classificacao = 'Abaixo do peso. ';
      aux = 'Algumas pessoas têm um baixo peso devido às características de seu organismo, enquanto outras podem estar enfrentando problemas, como desnutrição ou transtornos alimentares. Para melhor auxiliá-lo, consulte os profissionais abaixo.';
      imgSrc = 'Imagens/imc-magro.png';
  } else if (imc >= 18.5 && imc < 24.9) {
      classificacao = 'Peso normal. ';
      aux = 'Que bom que você está com o peso normal! E a melhor maneira de continuar assim é mantendo um estilo de vida ativo e uma alimentação equilibrada. Para melhor auxiliá-lo, consulte os profissionais abaixo. ';
      imgSrc = 'Imagens/imc-normal.png';
  } else if (imc >= 25 && imc < 29.9) {
      classificacao = 'Sobrepeso. ';
      aux = ' Pode ser considerada pré-obesidade, muitas pessoas nessa condição podem apresentar doenças associadas, como diabetes e hipertensão. É importante rever hábitos e buscar ajuda antes de entrar efetivamente na faixa de obesidade. Para auxiliá-lo melhor, consulte os profissionais abaixo."';
      imgSrc = 'Imagens/imc-sobrepeso.png';
  } else if (imc >= 30 && imc < 34.9 ) {
      classificacao = 'Obesidade Grau I. ';
      aux = 'Sinal de alerta! Chegou a hora de se cuidar, mesmo que seus exames estejam normais. Vamos começar a fazer mudanças hoje! Pratique hábitos saudáveis e evite o sedentarismo. Você precisa iniciar um acompanhamento com profissionais qualificados. Abaixo, temos ótimas indicações.';
      imgSrc = 'Imagens/imc-obesidade 1.png';
  } else if (imc >= 35 && imc < 39.9 ) {
      classificacao = 'Obesidade Grau II. ';
      aux = 'Atenção! Nesse estágio, os riscos para a saúde são mais elevados e, por isso, é recomendado realizar um acompanhamento médico mais rigoroso. Uma rotina de exercícios físicos, acompanhamento nutricional e psicológico já se faz necessária para minimizar o avanço e reverter a situação. Fale com os nosso profissionais e encontre uma solução.';
      imgSrc = 'Imagens/imc-obesidade 2.png';
  } else if (imc >= 40 ) {
      classificacao = 'Obesidade Grau III. ';
      aux = 'Aqui o sinal é vermelho, também conhecido como obesidade mórbida. A realização de um tratamento adequado pode ajudar a melhorar a qualidade de vida da pessoa, mas é provável que já existam várias doenças associadas ao peso. Existem algumas opções cirúrgicas para a obesidade mórbida, como a cirurgia bariátrica. No entanto, cada caso deve ser analisado individualmente por uma equipe multidisciplinar que envolve nutricionistas, médicos especialistas e psicólogos.';
      imgSrc = 'Imagens/imc-obesidade 3.png';
  }

  resultado.innerHTML = `
  <img src="${imgSrc}" alt="${classificacao}" width="100">
  <br>
  Seu IMC é ${imc.toFixed(2)} ${classificacao} ${aux}.
  `;
  alteraclass();
}
 function alteraclass () {
const myDiv = document.getElementById('divCalculadora');
myDiv.className =  resultado ? 'calculadoraEsquerda': 'calculadoraCentro';
const divResultado = document.getElementById('resultado')
divResultado.className = 'calculadoraCentro'
const divCards = document.getElementById('cards')
divCards.className = resultado ? 'container' : 'container hidden';
}

//Menu interativo
class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
  );
  mobileNavbar.init();