nekoArray = ["white", "black", "gray", "calico", "robot", "peach", "colourful", "earth", "air", "water", "fire", "spirit", "rainbow", "silversky", "orange", "ghetto", "neon", "pink", "ghost", "lucky", "moka", "usa", "rose", "blue", "silver", "kuramecha", "kina", "ace", "spooky", "holiday", "valentine", "marmalade", "royal", "mermaid", "socks", "dave", "jess", "mike", "lucy", "fancy"];//40 cats

activeNeko = nekoArray[30];

function changeNeko() {
    document.getElementById("neko").innerHTML += "<script>NekoType=\"" + activeNeko + "\"</script><h1 id=nl><script src='https://webneko.net/n20171213.js'></script><a href='https://webneko.net'>Neko</a></h1>";
    console.log('neko changed');
}