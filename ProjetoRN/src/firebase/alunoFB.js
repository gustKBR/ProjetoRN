import { conexaoFS } from './conexaoFB';

export class AlunoFB{
    state = {
        colecao: conexaoFS.collection('ProjetoRN/alunos/aluno')
    };

    pegarColecao(){
        return this.state.colecao;
    }

    adicionarAluno(aluno){
        this.state.colecao.add(aluno);
    }

    editarAluno(aluno){
        const {id} = aluno;
        delete aluno.id;

        this.state.colecao.doc(id).update(aluno);
    }

    removedorAluno(aluno){
        this.state.colecao.doc(aluno.id).delete();
    }
}