var nav = document.querySelector(".nav")
var navimg = document.querySelector('.navimg img[src="imgs/LOGO2.svg"]')
var navbuttons = document.querySelectorAll('.navbuttons a')
var logo = document.getElementById('logo-svg')
var header = document.querySelector(".header")
var canvas = document.querySelector('.btn-primary')
var myOffcanvas = document.getElementById('myOffcanvas')

//QUEMSOMOS
var quemsomos = document.getElementById('quemsomos');
function rolarQuemsomos() {
    if (window.getComputedStyle(header).display === 'none') {
        if (quemsomos) {
            var posicao = quemsomos.offsetTop;
            window.scrollTo({
                top: posicao,
            });
        }
    } else {
        header.style.display = 'none';
        if (quemsomos) {
            var posicao = quemsomos.offsetTop;
            window.setTimeout(() => {
                window.scrollTo({
                    top: posicao - 100,
                });
            },);
        }
    }
}

function rolarQuemsomosMobile() {
    if (window.scrollY > 0.1) {
        if (quemsomos) {
            var posicao = quemsomos.offsetTop;
            window.scrollTo({
                top: posicao,
            });
        }
    } else {
        header.style.display = 'none';
        if (quemsomos) {
            var posicao = quemsomos.offsetTop;
            window.setTimeout(() => {
                window.scrollTo({
                    top: posicao - 100,
                });
            },);
        }
    }  
}

//PRODUTOS
var produtos = document.getElementById('produtos');
function rolarProdutos() {
    if (window.getComputedStyle(header).display === 'none') {
        if (produtos) {
            var posicao = produtos.offsetTop;
            window.scrollTo({
                top: posicao,
            });
        }
    } else {
        header.style.display = 'none';
        if (produtos) {
            var posicao = produtos.offsetTop;
            window.setTimeout(() => {
                window.scrollTo({
                    top: posicao - 100,
                });
            },);
        }
    }
}

function rolarProdutosMobile() {
    if (window.scrollY > 0.1) {
        if (produtos) {
            var posicao = produtos.offsetTop;
            window.scrollTo({
                top: posicao,
            });
        }
    } else {
        header.style.display = 'none';
        if (produtos) {
            var posicao = produtos.offsetTop;
            window.setTimeout(() => {
                window.scrollTo({
                    top: posicao - 100,
                });
            },);
        }
    }
}

//MERCADO DE ATUAÇÃO
var mercado = document.getElementById('mercado');
function rolarMercado() {
    if (window.getComputedStyle(header).display === 'none') {
        if (mercado) {
            var posicao = mercado.offsetTop;
            window.scrollTo({
                top: posicao,
            });
        }
    } else {
        header.style.display = 'none';
        if (mercado) {
            var posicao = mercado.offsetTop;
            window.setTimeout(() => {
                window.scrollTo({
                    top: posicao - 100,
                });
            },);
        }
    }
}

function rolarMercadoMobile() {
    if (window.scrollY > 0.1) {
        if (mercado) {
            var posicao = mercado.offsetTop;
            window.scrollTo({
                top: posicao,
            });
        }
    } else {
        header.style.display = 'none';
        if (mercado) {
            var posicao = mercado.offsetTop;
            window.setTimeout(() => {
                window.scrollTo({
                    top: posicao - 100,
                });
            },);
        }
    }
}

//CONTATO
var contato = document.getElementById('contato');
function rolarContato() {
    if (window.getComputedStyle(header).display === 'none') {
        if (contato) {
            var posicao = contato.offsetTop;
            window.scrollTo({
                top: posicao,
            });
        }
    } else {
        header.style.display = 'none';
        if (contato) {
            var posicao = contato.offsetTop;
            window.setTimeout(() => {
                window.scrollTo({
                    top: posicao - 100,
                });
            },);
        }
    }
}

function rolarContatoMobile() {
    if (window.scrollY > 0.1) {
        if (contato) {
            var posicao = contato.offsetTop;
            window.scrollTo({
                top: posicao,
            });
        }
    } else {
        header.style.display = 'none';
        if (contato) {
            var posicao = contato.offsetTop;
            window.setTimeout(() => {
                window.scrollTo({
                    top: posicao - 100,
                });
            },);
        }
    }
}

// Window Scroll

window.addEventListener('scroll', function () {
    if (window.scrollY > 0.1) {
        nav.style.transition = "background-color 0.3s ease"
        nav.style.position = "fixed"
        nav.style.backgroundColor = "rgba(0, 0, 0, 0.4)"
        nav.style.height = "100px"
        header.style.transition = "display 0.3s"
        header.style.display = 'none'
        navimg.style.width = "100px"
        canvas.style.color = "white"
        document.querySelector('.navbuttons').classList.add('scrolled');
        logo.src = "imgs/LOGO3.svg";
        logo.addEventListener('mouseover', function () {
            logo.src = "imgs/LOGO3.svg";
        });
        logo.addEventListener('mouseout', function () {
            logo.src = "imgs/LOGO3.svg";
        });
    } else {
        nav.style.transition = "background-color 0.3s ease"
        nav.style.position = ""
        nav.style.backgroundColor = ""
        nav.style.height = ""
        header.style.transition = "display 0.3s"
        header.style.display = ""
        navimg.style.width = ""
        canvas.style.color = ""
        document.querySelector('.navbuttons').classList.remove('scrolled');
        logo.src = 'imgs/LOGO2.svg';
        logo.addEventListener('mouseover', function () {
            logo.src = "imgs/LOGO2.svg";
        });
        logo.addEventListener('mouseout', function () {
            logo.src = "imgs/LOGO2.svg";
        });
    }
})