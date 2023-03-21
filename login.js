let usuarios = [
    {
        nome: "admin",
        senha: "admin"
    }, {
        nome: "Fernando",
        senha: "4321"
    }, {
        nome: "Carlsen",
        senha: "1667"
    }, {
        nome: "Kasparov",
        senha: "9435"
    }, {
        nome: "David",
        senha: "1953"
    }, {
        nome: "Aristóteles",
        senha: "3405"
    }
]
let armazenamento = localStorage.getItem("usuariologado")




if (armazenamento != undefined) {

    let contadorjs = localStorage.getItem("contadorjs")

    if (contadorjs == 1) {
        localStorage.setItem("contadorjs", 2)
    } else {
        localStorage.removeItem("usuariologado")
        window.location.href = "index.html"
    }

    let paragrafo = document.querySelector(".nomeinicio")
    paragrafo.innerHTML += ` ${armazenamento}`

    ////////////-------//////////////------/////////  BOTÕES  //////////////------///////////////------////////////////////////// BOTÕES //////////////------///////////////
    ////////////-------//////////////------/////////  BOTÕES  //////////////------///////////////------////////////////////////// BOTÕES //////////////------///////////////

    const sair = document.querySelector("input#sair");
    sair.addEventListener("click", sair2)

    const limpar = document.querySelector("input#lim")
    limpar.addEventListener("click", limpar2)

    const deletar = document.querySelector("input#del")
    deletar.addEventListener("click", deletar2)

    const insertusu = document.querySelector('input#ins')
    insertusu.addEventListener("click", adicionar1)

    const atua1 = document.querySelector('input#atu')
    atua1.addEventListener("click", atualizarusu1)

    const listar = document.querySelector("input#mos")
    listar.addEventListener("click", mostrar)

    const testar = document.querySelector("input#tes")
    testar.addEventListener("click", testar1)

    ////////////-------//////////////------/////////  DIVISÃO DE FUNÇÃO  //////////////------///////////////------////////////////////////// DIVISÃO DE FUNÇÃO //////////////------///////////////
    ////////////-------//////////////------/////////  DIVISÃO DE FUNÇÃO  //////////////------///////////////------////////////////////////// DIVISÃO DE FUNÇÃO //////////////------///////////////
    function sair2() {
        localStorage.removeItem("usuariologado")
        window.location.href = "./index.html"
    }

    // window.addEventListener("beforeunload", voltar)
    // function voltar() {
    //     localStorage.removeItem("usuariologado");
    // }

    ////////////-------//////////////------/////////  DIVISÃO DE FUNÇÃO  //////////////------///////////////------////////////////////////// DIVISÃO DE FUNÇÃO //////////////------///////////////
    ////////////-------//////////////------/////////  DIVISÃO DE FUNÇÃO  //////////////------///////////////------////////////////////////// DIVISÃO DE FUNÇÃO //////////////------///////////////

    function mostrar() {
        let res = document.querySelector('div.res')
        res.innerHTML = ""

        for (let a = 0; a < usuarios.length; a++) {
            res.innerHTML += `Usuário ${[a + 1]}: ${usuarios[a].nome} (Senha - ${usuarios[a].senha})<br>`
        }

    }



    ////////////-------//////////////------/////////  DIVISÃO DE FUNÇÃO  //////////////------///////////////------////////////////////////// DIVISÃO DE FUNÇÃO //////////////------///////////////
    ////////////-------//////////////------/////////  DIVISÃO DE FUNÇÃO  //////////////------///////////////------////////////////////////// DIVISÃO DE FUNÇÃO //////////////------///////////////

    function limpar2() {
        let res = document.querySelector('div.res')

        res.innerHTML = ""

    }

    ////////////-------//////////////------/////////  DIVISÃO DE FUNÇÃO  //////////////------///////////////------////////////////////////// DIVISÃO DE FUNÇÃO //////////////------///////////////
    ////////////-------//////////////------/////////  DIVISÃO DE FUNÇÃO  //////////////------///////////////------////////////////////////// DIVISÃO DE FUNÇÃO //////////////------///////////////

    function deletar2() {
        let res = document.querySelector('div.res')
        res.innerHTML = ""

        for (let a = 0; a < usuarios.length; a++) {

            res.innerHTML += `<div><input type="checkbox" id="${a}"><label>Usuário ${[a + 1]}: ${usuarios[a].nome}<br></label></div>`
        }

        res.innerHTML += `<input type="button" value = "Deletar" id = "excl">`

        const excl = document.querySelector('input#excl');
        excl.addEventListener("click", excluir)

        function excluir() {

            let userdeletado = [""]

            for (let a = 0; a < usuarios.length; a++) {
                let checkbox = document.getElementById(`${a}`);

                if (checkbox.checked == true) {
                    userdeletado[a] = 1
                } else {
                    userdeletado[a] = 0
                }

            }

            for (let a = userdeletado.length - 1; a >= 0; a--) {
                if (userdeletado[a] == 1) {
                    usuarios.splice(a, 1);
                }

            }
            let res = document.querySelector('div.res')
            res.innerHTML = ""

            for (let a = 0; a < usuarios.length; a++) {
                res.innerHTML += `Usuário ${[a + 1]}: ${usuarios[a].nome}<br>`
            }

        }



    }

    ////////////-------//////////////------/////////  DIVISÃO DE FUNÇÃO  //////////////------///////////////------////////////////////////// DIVISÃO DE FUNÇÃO //////////////------///////////////
    ////////////-------//////////////------/////////  DIVISÃO DE FUNÇÃO  //////////////------///////////////------////////////////////////// DIVISÃO DE FUNÇÃO //////////////------///////////////

    function adicionar1() {
        let res = document.querySelector('div.res')
        res.innerHTML = ""
        res.innerHTML += `<form>
                        <label for="inputuseradd">Novo usuário:</label><br>
                        <input type="text" id="useradd"><br>
                        <label for="inputsenhadd">Senha novo usuário:</label><br>
                        <input type = "password" id="senhadd"><br>
                        <label for="inputconfirmadd">Confirmação:</label><br>
                        <input type = "password" id="confirmadd"><br></br>
                        <input type = "button" id="botaoadd" value="Adicionar Usuário"></form>`

        const adicionar3 = document.querySelector('input#botaoadd')
        adicionar3.addEventListener("click", adicionar2)
    }

    ////////////-------//////////////------/////////  DIVISÃO DE FUNÇÃO  //////////////------///////////////------////////////////////////// DIVISÃO DE FUNÇÃO //////////////------///////////////
    ////////////-------//////////////------/////////  DIVISÃO DE FUNÇÃO  //////////////------///////////////------////////////////////////// DIVISÃO DE FUNÇÃO //////////////------///////////////

    function adicionar2() {
        let novouser = {
            nome: document.querySelector('input#useradd').value,
            senha: document.querySelector('input#senhadd').value,
        }

        let confi = document.querySelector('input#confirmadd').value

        let barracao = 0

        if (confi == novouser.senha) {
            for (let a = 0; a < usuarios.length; a++) {
                if (usuarios[a].nome == novouser.nome) {
                    barracao = 1
                }
            }

            if (barracao == 0) {
                usuarios.push(novouser)
                alert("Usuário adicionado com sucesso")
                mostrar()

            } else {
                alert("Usuário já encontrado no banco de dados")
                adicionar1()
            }

        } else {
            alert("Senhas não coincidem, favor reescrevê-las!")
            adicionar1()
        }


    }

    ////////////-------//////////////------/////////  DIVISÃO DE FUNÇÃO  //////////////------///////////////------////////////////////////// DIVISÃO DE FUNÇÃO //////////////------///////////////
    ////////////-------//////////////------/////////  DIVISÃO DE FUNÇÃO  //////////////------///////////////------////////////////////////// DIVISÃO DE FUNÇÃO //////////////------///////////////

    function atualizarusu1() {
        let res = document.querySelector('div.res')
        res.innerHTML = ""
        res.innerHTML += `
                        <label for="inputuserold">Nome de usuário:</label>
                        <input type="text" id="usurefreshold">

                        <label for="inputsenhaold">Senha usuário:</label>
                        <input type = "password" id="senharefreshold">

                        <label for="inputnewuser">Novo nome de usuário:</label>
                        <input type = "text" id="usurefreshnew">

                        <label for="inputusenhanew">Nova senha de usuário:</label>
                        <input type="password" id="senharefreshnew">

                        <label for="inputsenhaconfirm">Confirmação de senha:</label>
                        <input type = "password" id="confirmrefreshnew">

                        <input type = "button" id="refresh" value="Atualizar Cadastro">
                        `

        const attusu2 = document.querySelector('input#refresh')
        attusu2.addEventListener("click", atualizarusu3)
    }

    ////////////-------//////////////------/////////  DIVISÃO DE FUNÇÃO  //////////////------///////////////------////////////////////////// DIVISÃO DE FUNÇÃO //////////////------///////////////
    ////////////-------//////////////------/////////  DIVISÃO DE FUNÇÃO  //////////////------///////////////------////////////////////////// DIVISÃO DE FUNÇÃO //////////////------///////////////


    function atualizarusu3() {
        let nomevelho = document.querySelector('input#usurefreshold').value
        let nomenovo = document.querySelector('input#usurefreshnew').value
        let senhanova = document.querySelector('input#senharefreshnew').value
        let senhavelha = document.querySelector('input#senharefreshold').value
        let confirmsenha = document.querySelector('input#confirmrefreshnew').value

        let errosenha = 1
        let repetida = 0
        let indice = 0

        for (let a = 0; a < usuarios.length; a++) {
            if (nomevelho == usuarios[a].nome) {
                if (usuarios[a].nome != nomevelho) {
                    repetida = 1
                }
            }
        }
        if (repetida == 0) {
            for (let a = 0; a < usuarios.length; a++) {

                if (nomevelho == usuarios[a].nome) {
                    repetida = 0

                    if ((usuarios[a].senha == senhavelha) && (senhanova == confirmsenha)) {
                        errosenha = 0
                        indice = a
                        a = usuarios.length
                    }
                }
            }



            if (errosenha == 0) {
                let res = document.querySelector('div.res')
                res.innerHTML = "";
                usuarios[indice].nome = nomenovo
                usuarios[indice].senha = senhanova
                alert("Dados atualizados com sucesso!")
                mostrar()
                localStorage.setItem("usuariologado", nomenovo)
                let paragrafo = document.querySelector(".nomeinicio")
                paragrafo.innerHTML = ` `
                paragrafo.innerHTML += ` Olá ${nomenovo}`



            } else {
                alert("Login incorreto, favor verificar a senha")
                atualizarusu1()

            }
        } else {
            alert("Login incorreto, favor verificar o login")
            atualizarusu1()

        }
    }






    ////////////-------//////////////------/////////  DIVISÃO DE FUNÇÃO  //////////////------///////////////------////////////////////////// DIVISÃO DE FUNÇÃO //////////////------///////////////
    ////////////-------//////////////------/////////  DIVISÃO DE FUNÇÃO  //////////////------///////////////------////////////////////////// DIVISÃO DE FUNÇÃO //////////////------///////////////


    function testar1() {
        let res = document.querySelector('div.res')
        res.innerHTML = `<form>
                        <label for="inputusertest">Nome de usuário:</label>
                        <input type="text" id="usuariotest">

                        <label for="inputsenhatest">Senha usuário:</label>
                        <input type = "password" id="senhatest"><br>

                        <input type = "button" id="testar3" value="Testar">

                        </form>`

        const testar2 = document.querySelector("input#testar3")
        testar2.addEventListener("click", testar3)
    }

    function testar3() {

        let dados = {
            nome: document.querySelector('input#usuariotest').value,
            senha: document.querySelector('input#senhatest').value
        }

        let erro = 1

        for (let a = 0; a < usuarios.length; a++) {
            if (dados.nome == usuarios[a].nome && dados.senha == usuarios[a].senha) {
                erro = 0
                a = usuarios.length
            }
        }
        if (erro == 0) {
            alert("Usuário encontrado e verificado no sistema")
            testar1()
        } else {
            alert("Não existe esse usuário no nosso banco de dados, caso quiser adicionar, clique no botão adicionar usuário!")
            testar1()
        }
    }
    localStorage.setItem("contadorjs", 2)
}
else {

    localStorage.setItem("contadorjs", 1)

    const clicarlogar = document.querySelector("#botaoentrar")
    clicarlogar.addEventListener("click", logar)

    function logar() {
        let user = document.querySelector('input#usu').value
        let pass = document.querySelector('input#pass').value
        let cont = 0


        for (i = 0; i < usuarios.length; i++) {

            if (usuarios[i].nome == user && usuarios[i].senha == pass) {
                alert(`Seja bem-vindo ${(usuarios[i].nome)}!!`)
                localStorage.setItem("usuariologado", usuarios[i].nome)
                i = usuarios.length
                cont = 1
                window.location.href = 'login2.html'
            }

        }
        if (cont == 0) {
            alert(`Usuário não encontrado, favor criar uma conta.`)

        }

    }

}