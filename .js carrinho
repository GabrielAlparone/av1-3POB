public class Produto {
    private int id;
    private String nome;
    private double preco;

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

public class ItensCarrinho {
    private Produto produto;
    private int quantidade;

    public ItensCarrinho(Produto produto, int quantidade) {
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

import java.util.ArrayList;
import java.util.Scanner;

public class Carrinho {
    private ArrayList<ItensCarrinho> itens;
    private double valorTotal;

    public Carrinho() {
        itens = new ArrayList<ItensCarrinho>();
        valorTotal = 0.0;
    }

    public void adicionarItem(Produto produto, int quantidade) {
        ItensCarrinho item = new ItensCarrinho(produto, quantidade);
        itens.add(item);
        valorTotal += (produto.getPreco() * quantidade);
    }

    public void listarItens() {
        for (ItensCarrinho item : itens) {
            System.out.println("ID: " + item.getProduto().getId());
            System.out.println("Nome: " + item.getProduto().getNome());
            System.out.println("Preço: " + item.getProduto().getPreco());
            System.out.println("Quantidade: " + item.getQuantidade());
            System.out.println();
        }
    }

    public void excluirItem(int id) {
        for (int i = 0; i < itens.size(); i++) {
            if (itens.get(i).getProduto().getId() == id) {
                valorTotal -= (itens.get(i).getProduto().getPreco() * itens.get(i).getQuantidade());
                itens.remove(i);
                break;
            }
        }
    }

    public void alterarQuantidade(int id, int quantidade) {
        for (int i = 0; i < itens.size(); i++) {
            if (itens.get(i).getProduto().getId() == id) {
                valorTotal -= (itens.get(i).getProduto().getPreco() * itens.get(i).getQuantidade());
                itens.get(i).setQuantidade(quantidade);
                valorTotal += (itens.get(i).getProduto().getPreco() * itens.get(i).getQuantidade());
                break;
            }
        }
    }

    public void listarCarrinho() {
        for (ItensCarrinho item : itens) {
            System.out.println("ID: " + item.getProduto().getId());
            System.out.println("Nome: " + item.getProduto().getNome());
            System.out.println("Preço: " + item.getProduto().getPreco());
            System.out.println("Quantidade: " + item.getQuantidade());
            System.out.println();
        }
        System.out.println("Valor Total: " + valorTotal);
    }
                               }
