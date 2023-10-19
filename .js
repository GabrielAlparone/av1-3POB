import java.util.ArrayList;
 import java.util.List;
 import java.util.Scanner;

 class Produto {
      int id;
      String nome;
      double preco;

     public Produto(int id, String nome, double preco) {
         this.id = id;
         this.nome = nome;
         this.preco = preco;
     }

     public int getId() {
         return id;
     }

     public String getNome() {
         return nome;
     }

     public double getPreco() {
         return preco;
     }
 }

 class ItemCarrinho {
      Produto produto;
      int quantidade;

     public ItemCarrinho(Produto produto, int quantidade) {
         this.produto = produto;
         this.quantidade = quantidade;
     }

     public Produto getProduto() {
         return produto;
     }

     public int getQuantidade() {
         return quantidade;
     }
 }

 class Carrinho {
     List<ItemCarrinho> itens;

     public Carrinho() {
         this.itens = new ArrayList<>();
     }

     public void adicionarItem(Produto produto, int quantidade, double total) {
         for (ItemCarrinho item : itens) {
             if (item.getProduto().getId() == produto.getId()) {
                 item.quantidade += quantidade;
               produto.getPreco()*quantidade=total;
                 return;
             }
         }
         itens.add(new ItemCarrinho(produto, quantidade));
     }

     public void listarItens() {
         for (ItemCarrinho item : itens) {
             Produto produto = item.getProduto();
             System.out.println("ID: " + produto.getId() + " Nome: " + produto.getNome() + " Quantidade: " + item.getQuantidade() + " Preço: " + produto.getPreco());
         }
     }

     public void excluirItem(int produtoId) {
         itens.removeIf(item -> item.getProduto().getId() == produtoId);
     }

     public void alterarItem(int produtoId, int novaQuantidade) {
         for (ItemCarrinho item : itens) {
             if (item.getProduto().getId() == produtoId) {
                 item.quantidade = novaQuantidade;
                 return;
             }
         }
     }
 }

 public class Main {
     public static void main(String[] args) {
         Carrinho carrinho = new Carrinho();
         Produto produto1 = new Produto(1, "Produto 1", 10.0);
         Produto produto2 = new Produto(2, "Produto 2", 20.0);

         carrinho.adicionarItem(produto1, 3);
         carrinho.adicionarItem(produto2, 2);

         carrinho.listarItens();

         carrinho.excluirItem(1);
         System.out.println("Após excluir o Produto 1:");
         carrinho.listarItens();

         carrinho.alterarItem(2, 5);
         System.out.println("Após alterar a quantidade do Produto 2:");
         carrinho.listarItens();
     }
 }
