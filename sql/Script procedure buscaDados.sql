CREATE PROCEDURE buscaDados
(IN codigoPesquisa int)
BEGIN
    IF codigoPesquisa=1 THEN   
        select nomeUsuarioVenda,qtde from top5VendedorDia;
        select descricaoProduto,qtde from top5ProdutosDia;
        select descricaoGrupo,qtde from top5GruposDia;      
    END IF;
      
     IF codigoPesquisa=2 THEN
          select nomeUsuarioVenda,qtde from top5VendedorMes;
        select descricaoProduto,qtde from top5ProdutosMes;
        select descricaoGrupo,qtde from top5GruposMes;
    END IF;
    
     IF codigoPesquisa=3 THEN      
        select nomeUsuarioVenda,qtde from top5VendedorAno;
        select descricaoProduto,qtde from top5ProdutosAno;
        select descricaoGrupo,qtde from top5GruposAno; 
     END IF;
END