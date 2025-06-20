# Prova S206 – Qualidade de Software

Repositório contendo os testes de API (Postman) e Interface (Cypress) realizados individualmente.

## 📦 Parte 1 – Testes com Postman (API)

- API utilizada: [https://reqres.in](https://reqres.in)
- 3 cenários de teste, incluindo 1 negativo
- Relatório gerado via `newman`

### Executar testes Postman:
```bash
newman run postman/reqres_collection.postman_collection.json -r cli,html --reporter-html-export postman/newman-report.html
