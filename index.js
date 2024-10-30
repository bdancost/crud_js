console.log("Hello everybody");
console.log("#ConstruindoCRUDS");

// [CRUD]
const miniTwitter = {
  usuarios: [
    {
      username: "danielfernandes",
    },
  ],
  posts: [
    {
      id: 1,
      owner: "danielfernandes",
      content: "hello world",
    },
  ],
};

// CREATE
function criaPost(dados) {
  miniTwitter.posts.push({
    id: miniTwitter.posts.length + 1,
    owner: dados.owner,
    content: dados.content,
  });
}
criaPost({ owner: "danielfernandes", content: "hello world2" });
criaPost({ owner: "danielfernandes", content: "hello world3" });
// console.log(miniTwitter.posts);

// READ
function pegaPosts() {
  return miniTwitter.posts;
}
console.log(pegaPosts());

// UPDATE
function atualizaContentDoPost(id, novoConteudo) {
  const postQueVaiSerAtualizado = pegaPosts().find((post) => {
    return post.id === id;
  });
  console.log(postQueVaiSerAtualizado);
  postQueVaiSerAtualizado.content = novoConteudo;
}
atualizaContentDoPost(1, "Novo conteúdo do posts");
console.log(pegaPosts());

// DELETE
function apagaPost(id) {
  const listaDePostsAtualizada = pegaPosts().filter((postAtual) => {
    return postAtual.id !== id;
  });
  miniTwitter.posts = listaDePostsAtualizada;
}
apagaPost(1);
apagaPost(2);
apagaPost(3);
console.log(pegaPosts());
