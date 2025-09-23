<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>To do or not to do</title>
<style>
  #ft_list div{background:#eee;padding:8px;margin:4px 0;cursor:pointer;border-radius:5px}
</style>
</head>
<body>
<button onclick="newTodo()">New</button>
<div id="ft_list"></div>

<script>
function save(){document.cookie="todos="+JSON.stringify([...ft_list.children].map(e=>e.innerText))}
function load(){let m=document.cookie.match(/(^| )todos=([^;]+)/);if(m)JSON.parse(m[2]).forEach(t=>add(t))}
function add(t,s=true){let d=document.createElement("div");d.innerText=t;d.onclick=()=>{if(confirm("Remove?")){d.remove();save()}};ft_list.prepend(d);if(s)save()}
function newTodo(){let t=prompt("Enter a TO DO:");if(t)add(t)}
load();
</script>
</body>
</html>
