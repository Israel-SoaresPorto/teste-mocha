const assert = require("assert");

describe("Teste da interface de lista de itens", function() {
    beforeEach(function() {
        itemInput.value = "";
        itemList.innerHTML = "";
    });

    it("Deve adicionar um item à lista", function() {
        itemInput.value = "Novo Item";
        adicionarItem();
        assert.equal(itemList.children.length, 1);
        assert.equal(itemList.children[0].textContent, "Novo Item");
    });

    it("Deve remover um item da lista", function() {
        itemInput.value = "Item a remover";
        adicionarItem();
        const item = itemList.children[0];
        removerItem(item);
        assert.equal(itemList.children.length, 0);
    });

    it("Não deve adicionar um item vazio", function() {
        itemInput.value = "";
        adicionarItem();
        assert.equal(itemList.children.length, 0);
    });

    it("Não deve adicionar caracteres especiais(exceto hifen)", () => {
        itemInput.value = "pao de queijo";
        const regex = /[^a-zA-Z 0-9-_]+/g;
        adicionarItem();
        assert.equal(regex.test(itemList.children.textContent), regex.test("pao de queijo"));
    });
});
