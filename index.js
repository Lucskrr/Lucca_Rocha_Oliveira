
var usuarios = [
  { nome: 'Eduardo', email: 'eduardogrunitzky@gmail.com', telefone: '41987886113', cpf: '13116440913', dataNascimento: '2005-12-10' },
  { nome: 'Robert', email: 'robert@gmail.com', telefone: '41999887766', cpf: '22323333322', dataNascimento: '2011-11-11' }
];

function enviaCadastro() {
   var nome = document.getElementById('nome').value;
   var email = document.getElementById('email').value;
   var senha = document.getElementById('senha').value;
   var confirmarSenha = document.getElementById('confirm').value;
   var telefone = document.getElementById('telefone').value;
   var cpf = document.getElementById('cpf').value;
   var data = document.getElementById('data').value;

   if (nome !== '' && !contemApenasLetras(nome)) {
    alert('Por favor, insira um nome válido contendo apenas letras.');
    return;
 }

   if (!validaEmail(email)) {
      alert('Por favor, insira um e-mail válido.');
      return;
    }

    if (senha !== confirmarSenha) {
      alert('A senha e a confirmação de senha não coincidem.');
      return;
    }

    if (!validaTelefone(telefone)) {
      alert('Por favor, insira um número de telefone válido.');
      return;
   }

   if (!validaCPF(cpf)) {
      alert('Por favor, insira um CPF válido.');
      return;
    }
 
 
   if (nome === '' || email === '' || senha === '' || confirmarSenha === '' || telefone === '' || cpf === '' || data === '') {
     alert('Por favor, preencha todos os campos.');
   } else {
      var mensagem = 'Formulário enviado!\n' +
      'Nome: ' + nome + '\n' +
      'E-mail: ' + email + '\n' +
      'Senha: ' + senha + '\n' +
      'Telefone: ' + telefone + '\n' +
      'CPF: ' + cpf + '\n' +
      'Data de Nascimento: ' + data;
 
     alert(mensagem);
 
     resetaCadastro();
   }

   var novoUsuario = {
    nome: nome,
    email: email,
    telefone: telefone,
    cpf: cpf,
    dataNascimento: data
  };

  usuarios.push(novoUsuario);

  var tabela = document.querySelector('#relatorio tbody');
  tabela.innerHTML = '';

  for (var i = 0; i < usuarios.length; i++) {
    var usuario = usuarios[i];

    var novoUsu = tabela.insertRow(i);
    novoUsu.classList.add(i % 2 === 0 ? 'linha-par' : 'linha-impar'); 

    var nNome = novoUsu.insertCell(0);
    var nEmail = novoUsu.insertCell(1);
    var nTelefone = novoUsu.insertCell(2);
    var nCPF = novoUsu.insertCell(3);
    var nDataNascimento = novoUsu.insertCell(4);

    nNome.innerHTML = usuario.nome;
    nEmail.innerHTML = usuario.email;
    nTelefone.innerHTML = usuario.telefone;
    nCPF.innerHTML = usuario.cpf;
    nDataNascimento.innerHTML = usuario.dataNascimento;
  }
 }
 
 function resetaCadastro() {
   document.getElementById('cadastroo').reset();
 }

 function contemApenasLetras(texto) {
  var letrasRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;
  return letrasRegex.test(texto);
}

function validaEmail(email) {
   var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   return emailRegex.test(email);
}

function validaTelefone(telefone) {
  var telefoneRegex = /^(\d{2}[ .-]?\d{5}[ .-]?\d{4}|\d{11})$/;
  return telefoneRegex.test(telefone);
}

 function validaCPF(cpf) {
  var cpfRegex = /^(\d{3}[.-]?\d{3}[.-]?\d{3}[\/]?\d{2}|\d{11})$/;
   return cpfRegex.test(cpf);
}










 

   