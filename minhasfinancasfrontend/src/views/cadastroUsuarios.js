import React from 'react';
import Card from '../components/card'
import FormGroup from '../components/form-group'

class CadastroUsuario extends React.Component {

    state = {
        nome: '',
        email: '',
        senha: '',
        senhaRepeticao: ''
    }


    cadastrar = () => {
        if (this.state.senha === this.state.senhaRepeticao) {
            if (this.state.nome !== '' && this.state.email !== '' && this.state.senha !== '') {
                // fetch('http://localhost:3000/usuarios', {
                //     method: 'POST',
                //     headers: {
                //         'Accept': 'application/json',
                //         'Content-Type': 'application/json'
                //     },
                //     body: JSON.stringify({
                //         nome: this.state.nome,
                //         email: this.state.email,
                //         senha: this.state.senha
                //     })
                // })
                //     .then(resposta => resposta.json())
                //     .then(resposta => {
                //         if (resposta.sucesso) {
                //             this.props.history.push('/login')
                //         } else {
                //             alert(resposta.mensagem)
                //         }
                //     })
                console.log(this.state);
            }
            else {
                alert('Por favor entre com seu nome, email e senha')
            }
        }
        else {
            alert('As senhas não conferem')
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6" style={{ position: 'relative', left: '300px' }}>
                        <div className="bs-docs-section"></div>
                        <div>
                            <Card title='Cadastro de Usuário'>
                                <FormGroup label="Nome: *" htmlFor="exampleInputEmail1">
                                    <input
                                        type="text"
                                        value={this.state.nome}
                                        onChange={e => this.setState({ nome: e.target.value })}
                                        className="form-control"
                                        id="inputNome"
                                        placeholder="Digite o Nome"
                                    />
                                </FormGroup>
                                <FormGroup label="Email: *" htmlFor="exampleInputEmail1">
                                    <input
                                        type="email"
                                        value={this.state.email}
                                        onChange={e => this.setState({ email: e.target.value })}
                                        className="form-control"
                                        id="inputEmail"
                                        placeholder="Digite o Email"
                                    />
                                </FormGroup>
                                <FormGroup label="Senha: *" htmlFor="inputSenha">
                                    <input
                                        type="password"
                                        value={this.state.senha}
                                        onChange={e => this.setState({ senha: e.target.value })}
                                        className="form-control"
                                        id="inputSenha"
                                        placeholder="Password"
                                    />
                                </FormGroup>
                                <FormGroup label="Repita a Senha: *" htmlFor="inputRepitaSenha">
                                    <input
                                        type="password"
                                        value={this.state.senhaRepeticao}
                                        onChange={e => this.setState({ senhaRepeticao: e.target.value })}
                                        className="form-control"
                                        id="inputRespitaSenha"
                                        placeholder="Password"
                                    />
                                </FormGroup>

                                <button onClick={this.cadastrar} className="btn btn-success">Salvar</button>
                                <button className="btn btn-danger">Cancelar</button>

                            </Card>

                            <div class="form-group">
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default CadastroUsuario;

