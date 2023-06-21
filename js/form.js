$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');

    $('#formulario-cadastro').validate({
        rules: {
            nome: {
                required: true,
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: {
            nome: {
                required: "Por favor, insira o seu nome completo"
            },
            email: {
                required: "Por favor, insira o seu email",
                email: "Por favor, insira um email válido"
            },
            telefone: {
                required: "Por favor, insira o seu telefone"
            },
            cpf: {
                required: "Por favor, insira o seu CPF"
            },
            endereco: {
                required: "Por favor, insira o seu endereço completo"
            },
            cep: {
                required: "Por favor, insira o seu CEP"
            }
        },
        submitHandler: function(form) {
            alert('Formulário submetido!');
        }
    });
});
