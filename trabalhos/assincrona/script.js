let img = 0 //contador de imagens;
const max = 14 //número da última imagem+1;

function proxImagem( img ){
	fetch("img/"+img+".jpg")
		.then(resp => resp.blob())
		.then(blob => {	 //https://stackoverflow.com/questions/50248329/fetch-image-from-api
			const imageObjectURL = URL.createObjectURL(blob);	
			console.log(imageObjectURL);
			const proxImg = document.createElement("img");
			proxImg.src = imageObjectURL;
			document.getElementById("placeholder").appendChild(proxImg);
		})
}

window.onload = setInterval(function(){
    proxImagem(img++ %14);
    let scrollPoint = window.scrollX + window.innerWidth;
    window.scrollTo({left: scrollPoint, behavior: 'smooth'})
}, 2000);

window.onload = function(){
    for(let img=0; img<5; img++)  proxImagem(img);
}
