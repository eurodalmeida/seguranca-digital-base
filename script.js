function correta(){

    document.getElementById("resultado").innerHTML =
    "✅ Correto! A autenticação em dois fatores aumenta significativamente a segurança das suas contas.";

    document.getElementById("resultado").style.color = "green";
}

function errada(){

    document.getElementById("resultado").innerHTML =
    "❌ Incorreto! Nunca reutilize a mesma senha em diferentes serviços.";

    document.getElementById("resultado").style.color = "red";
}