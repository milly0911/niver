function exibirMensagem(){document.getElementById("mensagem").innerText="Feliz Anivers\xE1rio!"}function alterarTema(){const a=document.querySelector("body");a.classList.toggle("tema-claro"),a.classList.toggle("tema-escuro")}document.getElementById("imagemInput").addEventListener("change",function(a){const b=document.getElementById("imagemSelecionada");b.innerHTML="";const c=a.target.files[0],d=new FileReader;d.onload=function(a){const c=document.createElement("img");c.src=a.target.result,c.alt="Imagem Selecionada",c.style.maxWidth="100%",c.style.marginTop="20px",b.appendChild(c)},d.readAsDataURL(c)});
  