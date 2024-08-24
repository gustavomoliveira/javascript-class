//Implementando um diagrama UML de criação de classe Aluno;

let alunos = [];
let disciplinas = [];
let professores = [];
let cursos = [];

class Aluno {
    constructor(nome, email, nota, idade, mensalidade) {
        this.nome = nome;
        this.email = email;
        this.nota = nota;
        this.idade = idade;
        this.mensalidade = mensalidade;
    }
    toString() {
        return `Meu nome é ${this.nome} e tenho ${this.idade} anos.`;
    }
    imprimir() {
        alert('Inclusão realizada com sucesso! \n' +
            this.toString() + '\n' +
            this.calcularMensalidade()
        );
    }
    calcularMensalidade() {
        if(this.nota > 7) {
            return this.mensalidade * 0.8;
        }
        return this.mensalidade;
    }
}

/* const aluno1 = new Aluno('Gustavo', 'gustavo@gmail.com', 10, 37, 2000);
aluno1.imprimir();
alunos.push(aluno1);
console.log(alunos); */

alunos.push(new Aluno('Gustavo', 'gustavo@gmail.com', 10, 37, 2000), new Aluno('Bartô', 'barto@gmail.com', 8, 3, 2500));
console.log(alunos);

alunos.forEach(a => {
    a.imprimir();
});


//UML de criação de classe Disciplina;

class Disciplina {
    constructor(descricao, curso, cargaHoraria) {
        this.descricao = descricao;
        this.curso = curso;
        this.cargaHoraria = cargaHoraria;
    }
    toString() {
        return `Essa é a disciplina ${this.descricao} do curso ${this.curso}.`
    }
    imprimir() {
        alert('As informações da disciplina são: \n' +
            this.toString() + '\n' +
            this.cargaHoraria
        );
    }
}

const disciplinaJs = new Disciplina('JavaScript II', 'Engenharia de Software', 42.4);
disciplinaJs.imprimir();
disciplinas.push(disciplinaJs);

//UML de criação de classe Professor;

class Professor {
    constructor(nome, salario, anoMestre) {
        this.nome = nome;
        this.salario = salario;
        this.anoMestre = anoMestre;
    }
    toString() {
        return `O nome do professor é ${this.nome} e seu salário é ${this.salario}.`
    }
    imprimir() {
        alert('As informações do professor são: \n' +
            this.toString() + '\n' +
            this.anoMestre
        );
    }
}

const professor1 = new Professor('Elberth', 50000, 2004);
professor1.imprimir();
professores.push(professor1);

//UML de criação de classe Curso;

class Curso {
    constructor(nome, coordenador, qtdeDisciplina) {
        this.nome = nome;
        this.coordenador = coordenador;
        this.qtdeDisciplina = qtdeDisciplina;
    }
    toString() {
        return `O nome do curso é ${this.nome} e o seu coordenador é o ${this.coordenador}.`
    }
    imprimir() {
        alert('As informações do curso são: \n' +
            this.toString() + '\n' +
            this.qtdeDisciplina
        );
    }
}

const curso1 = new Curso('Engenharia de Software', 'Marcos', 3);
curso1.imprimir();
cursos.push(curso1);