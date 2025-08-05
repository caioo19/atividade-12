console.log("Oiii, mundooo!");

let caixa = document.createElement("div");
document.body.appendChild(caixa);
caixa.style.width = "400px";
caixa.style.margin = "150px auto 0 auto";
caixa.style.border = "5px solid black";
caixa.style.boxShadow = "0 4px 10px rgba(0,0,0,0.4)";
caixa.style.padding = "40px";
caixa.style.textAlign = "center";
caixa.style.position = "relative";

let e = document.createElement("h1");
e.innerText = "Hellooo, World! Aqui eh bilíngue gente ฅ^•ﻌ•^ฅ! fala aew..num tem gatin mais brunitin q eu né ฅ^•ﻌ•^ฅ✌🏽";
caixa.appendChild(e);

e.style.backgroundColor = "blue";
e.style.color = "yellow";
e.style.padding = "20px";

let t = document.createElement("button");
t.innerText = "Mudar cor aleatória";
t.style.marginTop = "40px";
t.style.padding = "12px 18px";
t.style.fontSize = "16px";
t.style.cursor = "pointer";
t.style.borderRadius = "4px";
t.style.border = "2px solid #333";
t.style.background = "#444";
t.style.color = "#fff";
t.style.fontWeight = "bold";
t.style.display = "block";
t.style.marginLeft = "auto";
t.style.marginRight = "auto";
document.body.appendChild(t);

t.addEventListener("click", () => {
  let cores = ["red", "green", "purple", "orange", "pink", "cyan"];
  e.style.backgroundColor = cores[Math.floor(Math.random() * cores.length)];
});

const simbolo = "ฅ^•ﻌ•^ฅ";

function criarDecoracao(x, y, rotacao = 0) {
  let deco = document.createElement("span");
  deco.innerText = simbolo;
  deco.style.position = "absolute";
  deco.style.left = x;
  deco.style.top = y;
  deco.style.transform = `rotate(${rotacao}deg)`;
  deco.style.fontSize = "20px";
  caixa.appendChild(deco);
}

criarDecoracao("10px", "-30px");
criarDecoracao("320px", "-30px", 15);

criarDecoracao("-60px", "20px", -90);
criarDecoracao("380px", "20px", 90);

criarDecoracao("10px", "150px", 180);
criarDecoracao("320px", "150px", 200);
