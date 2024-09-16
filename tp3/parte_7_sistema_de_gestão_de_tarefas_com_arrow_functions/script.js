/* 
Exercício 15 Grupo: Estrutura de dados, adição, edição e remoção de tarefas
Requisito:
Crie uma estrutura de dados chamada tarefas, que é um array de objetos.
Cada tarefa deve conter as propriedades id, descricao, concluida (boolean), e prioridade (baixa, média ou alta).
Crie uma função adicionarTarefa que permita adicionar uma nova tarefa ao array usando arrow functions.
Crie uma função editarTarefa que permita editar a descrição e prioridade de uma tarefa específica,
identificada pelo id, utilizando arrow functions.
Crie uma função removerTarefa que remova uma tarefa do array com base no id da tarefa.
*/

let tarefas = [
    { id: 1, descricao: 'Acordar cedo', concluida: false, prioridade: 'média' },
    { id: 2, descricao: 'Estudar', concluida: false, prioridade: 'alta' },
    { id: 3, descricao: 'Reciclar lixo', concluida: false, prioridade: 'baixa' }
];

let adicionarTarefa = (descricao, concluida, prioridade) => {
    let novaTarefa = {
        id: tarefas.length + 1,
        descricao: descricao,
        concluida: concluida,
        prioridade: prioridade
    };
    tarefas.push(novaTarefa);
}

adicionarTarefa('Lavar louça', false, 'alta');
console.log(tarefas);

let editarTarefa = (id, descricao, prioridade) => {
    tarefas.forEach(tarefa => {
        if(tarefa.id === id) {
            tarefa.descricao = descricao;
            tarefa.prioridade = prioridade;
        }
    });
    return tarefas;
}

editarTarefa(1, 'Não acordar', 'alta');
console.log(tarefas);

let removerTarefa = (id) => {
    let indice = tarefas.findIndex(tarefa => tarefa.id == id);
    tarefas.splice(indice, 1);
}

removerTarefa(2);
console.log(tarefas);

/* 
Exercício 16 Grupo: Marcar tarefas como concluídas e filtrar por prioridade, relatório final de tarefas e resumo
Requisito:
Crie uma função marcarConcluida que marque uma tarefa como concluída com base no id.
Utilize arrow functions para filtrar e listar tarefas de acordo com sua prioridade, usando o método filter.
Crie uma função gerarRelatorio que exiba todas as tarefas com seu status (concluída ou não),
usando arrow functions para formatar as informações.
Crie uma função resumoTarefas que retorne o total de tarefas, quantas estão concluídas e quantas estão pendentes,
utilizando métodos como reduce e arrow functions.
*/

let marcarConcluida = (id) => {
    tarefas.forEach(tarefa => {
        if(tarefa.id === id) {
            tarefa.concluida = true;
        }
    });
}

marcarConcluida(3);
console.log(tarefas);

let filtroPrioridade = (prioridade) => {
    tarefas = tarefas.filter(tarefa => tarefa.prioridade === prioridade);
}

filtroPrioridade('alta');
console.log(tarefas);

let gerarRelatorio = () => {
    tarefas.forEach(tarefa => {
        console.log(`Tarefa: ${tarefa.descricao} \n
Conclusão: ${tarefa.concluida ? 'Sim' : 'Não'}`); /* ternário dentro do template string */
    });
}

gerarRelatorio();

let resumoTarefas = () => {
    let resumo = tarefas.reduce((acumulador, tarefa) => {
        acumulador.total++; /* cria um acumulador para o total de tarefas. cada uma das propriedades concluidas é contada */
        if(tarefa.concluida) {
            acumulador.concluidas++ /* cria um acumulador para as concluidas com boolean true */
        } else {
            acumulador.pendentes++ /* cria um acumulador para as concluidas com boolean false */
        }
        return acumulador; /* retorna o acumulador geral */
    }, {total: 0, concluidas: 0, pendentes: 0}); /* inicia um array de objetos para todos os tipos de tarefas */
    console.log(`Resumo de Tarefas \n
Total: ${resumo.total} \n
Concluidas: ${resumo.concluidas} \n
Pendentes: ${resumo.pendentes}`);
}

resumoTarefas();