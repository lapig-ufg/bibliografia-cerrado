## OpenAlex
O OpenAlex é uma plataforma inovadora e abrangente que fornece acesso livre e aberto a uma vasta coleção de dados acadêmicos e de pesquisa, visando democratizar o conhecimento científico. Com mais de 243 milhões de artigos, 48 milhões de referências e cerca de 1,9 bilhões de citações, o OpenAlex se destaca como uma fonte fundamental de informações para pesquisadores, acadêmicos e profissionais. Sua missão é criar um catálogo universal de conhecimento, inspirado pela antiga Biblioteca de Alexandria, e oferece dados sob uma licença CC0, permitindo a reutilização e a inovação. Além disso, a plataforma é gerida por uma organização sem fins lucrativos, garantindo sua sustentabilidade e compromisso com a transparência.

Acesse: https://openalex.org/

> __Palavras da busca (fulltext)__ (cerrado OR savanna) AND (Brasil OR Brazil)

 - __OR (OU):__ Esse conectivo é usado para incluir resultados que contenham pelo menos um dos termos especificados. Por exemplo, “(cerrado OR savanna)” encontra artigos que mencionam “cerrado” ou “savanna” ou ambos.
 - __AND (E):__ Esse conectivo é usado para combinar termos e encontrar resultados que contenham todos os termos especificados. Por exemplo, “(cerrado AND brasil)” encontra artigos que mencionam simultaneamente “cerrado” e “brasil”.
 - __Total:__ 110.730 publicações.

## Agrupamento (clusterização)
Os 110.730 registros sobre o Cerrado foram agrupados utilizando o algoritmo de K-means, com o objetivo de criar grupos homogêneos internamente e heterogêneos externamente, com base nas palavras-chave extraídas dos artigos, refletindo os principais temas abordados. A escolha do número ideal de clusters foi realizada utilizando, entre outros métodos, a técnica do cotovelo, que auxilia na identificação do ponto de inflexão onde o aumento do número de clusters não resulta em uma melhoria significativa na variabilidade explicada. Após essa análise, optou-se por 21 clusters, permitindo uma divisão mais precisa e representativa dos diferentes temas presentes no conjunto de dados, facilitando assim a análise e interpretação dos padrões subjacentes ao conteúdo dos artigos sobre o Cerrado.
<p align="center" width="100%">
    <img width="100%" src="assets/markdown/metodo/imgs/cutuvelo.png">
</p>

Cada cluster foi caracterizado pela palavra mais frequente, que reflete o principal tópico discutido dentro daquele grupo. Além disso, a tamanho do cluster (ou seja, o número de registros que pertencem a cada cluster) e o WSS (Within-Cluster Sum of Squares), uma medida da variabilidade interna do cluster, são apresentados. O cluster 1, com 74.414 registros, é o maior e está associado ao tema "Plant Diversity" (Diversidade de Plantas), enquanto o cluster 12, com apenas 97 registros, é o menor, com o tema "Agronomic Traits" (Características Agronômicas). O WSS, que indica a dispersão interna dos dados dentro de cada cluster, varia significativamente entre os clusters, com valores mais baixos (como o cluster 3, com WSS de 0,00) sugerindo uma maior

<p align="center" width="100%">
    <img width="100%" src="assets/markdown/metodo/imgs/clusters.png">
</p>
homogeneidade interna, enquanto valores mais altos (como o cluster 20, com WSS de 3.234,69) indicam maior dispersão. Essa distribuição permite uma análise detalhada das diferentes abordagens e temas discutidos nos artigos sobre o Cerrado, facilitando a identificação de padrões e tendências relevantes dentro de cada subárea.
<p align="center" width="100%">
    <img width="100%" src="assets/markdown/metodo/imgs/tabela.png">
</p>