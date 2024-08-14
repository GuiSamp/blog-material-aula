---
icon: edit
date: 2024-07-25 20:10:00.00 -3
tag:
  - 'Object Pool'
  - gof
category:
  - seminario-1
order: 10
excerpt: Apresentação do Padrão de Projeto Object Pool
author: JoaoAugustoMPdJ, SalvadorCerqueiraJr
---

# Object Pool

## João Augusto Moura Peixoto de Jesus (20211TADSSAJ0004)
[@JoaoAugustoMPdJ](https://github.com/JoaoAugustoMPdJ)

<!-- @include: ../../../includes/seminario-1-JoaoAugustoMPdJ/README.md -->


## Salvador Cerqueira Júnior (20212TADSSAJ0020)
[@SalvadorCerqueiraJr](https://github.com/SalvadorCerqueiraJr)

<!-- @include: ../../../includes/seminario-1-SalvadorCerqueiraJr/README.md -->

## Guilherme Sampaio
```mermaid
classDiagram
    class Conexao {
        <<abstract>>
        - emUso: boolean
        + conectar() void
        + desconectar() void
        + estaEmUso() boolean
        + executarConsulta(query: String) void
    }

    class ConexaoMySQL {
        + executarConsulta(query: String) void
    }

    class ConexaoPostgreSQL {
        + executarConsulta(query: String) void
    }

    class ConexaoPool {
        - pool: List<Conexao>
        - tamanhoMaximo: int
        + pegarConexao(): Conexao
        + devolverConexao(conexao: Conexao) void
    }

    class GerenciadorConexao {
        + main(args: String[]) void
    }

    Conexao <|-- ConexaoMySQL
    Conexao <|-- ConexaoPostgreSQL
    ConexaoPool o-- Conexao : "gerencia"
    GerenciadorConexao o-- ConexaoPool : "usa"

```
