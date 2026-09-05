const formulario = document.querySelector("form");

        formulario.addEventListener("submit", function(event) {
            event.preventDefault();

            const nome = document.getElementById("nome").value.trim();
            const email = document.getElementById("email").value.trim();
            const telefone = document.getElementById("telefone").value.trim();
            const cep = document.getElementById("CEP").value.trim();
            const numero = document.getElementById("numero").value.trim();
            const senha = document.getElementById("senha").value.trim();

            if (nome === "") {
                alert("Por favor, preencha o nome.");
                return;
            }

            if (email === "") {
                alert("Por favor, preencha o e-mail.");
                return;
            }

            if (!email.includes("@")) {
                alert("Digite um e-mail válido.");
                return;
            }

            if (telefone === "") {
                alert("Por favor, preencha o telefone.");
                return;
            }

            if (cep === "") {
                alert("Por favor, preencha o CEP.");
                return;
            }

            if (numero === "") {
                alert("Por favor, preencha o número.");
                return;
            }

            if (senha === "") {
                alert("Por favor, preencha a senha.");
                return;
            }

            alert("Cadastro preenchido corretamente!");
        });

        const campoCep = document.getElementById("CEP");

        campoCep.addEventListener("blur", function() {
            const cep = campoCep.value.replace(/\D/g, "");

            if (cep.length !== 8) {
                alert("Digite um CEP válido.");
                return;
            }

            fetch(`https://viacep.com.br/ws/${cep}/json/`)
                .then(function(resposta) {
                    return resposta.json();
                })
                .then(function(dados) {

                    if (dados.erro) {
                        alert("CEP não encontrado.");
                        return;
                    }

                    document.getElementById("rua").value = dados.logradouro;
                    document.getElementById("bairro").value = dados.bairro;
                    document.getElementById("cidade").value = dados.localidade;
                    document.getElementById("estado").value = dados.uf;
                })
                .catch(function() {
                    alert("Não foi possível buscar o CEP.");
                });
        });