export interface Chamado{
    /*o ponto de interrogação nas variaveis siguinifica que não precisamos passar valores nesses campos 
    como obrigatorios*/ 
    id?: any;
    dataAbertura?: string;
    dataFechamento?: string;
    prioridade: string;
    status: string;
    titulo: string;
    descricao: string;
    tecnico:  any;
    cliente: any;
    nomeCliente: string;
    nomeTecnico: string;

}