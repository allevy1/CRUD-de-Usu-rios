const usuario = document.querySelector("#usuario");
const senha = document.querySelector("#senha");
const button_log = document.querySelector("#button-log");
const email = document.querySelector("#conta");
const button_register = document.querySelector("#button-register");
const url = "http://localhost:3000";

const pessoa = {
  nome: "Levy",
  senha: "amizade_de_cachorro",
  email: "birita@gmail.com",
};

export const cadastro = [pessoa];

for (let i = 0; i < cadastro.length; i++) {
  console.log(cadastro[i]);
}

button_log.addEventListener("click", verificação);
button_register.addEventListener("click", cadastrar);

function verificação() {
  let novo_usuario = {
    nome: usuario.value,
    senha: senha.value,
    email: email.value,
  };

  // cadastro.forEach((element) => {
  //   console.log(element);
  //   if (usuario.value == element.nome && senha.value == element.senha) {
  //     alert("Usuário Logado");
  //   } else {
  //     alert("Usuário não encontrado ou não existente");
  //   }
  // });
}

function cadastrar() {
  let novo_usuario = {
    nome: usuario.value,
    senha: senha.value,
    email: email.value,
  };
  console.log(novo_usuario);

  if (!usuario.value || !senha.value || !email.value) {
    alert("Preencha todos os campos para se cadastrar");
    return;
  }

  fetch(url + "/user", {
    method: "POST",
    body: JSON.stringify(novo_usuario),
    headers: { "Content-Type": "application/json" },
  });
  // cadastro.push(novo_usuario);
  // console.log(cadastro);
}
