import css from './default.css';

document.addEventListener('DOMContentLoaded', function(){
    let container = document.querySelector('div.indeprods')
    if(container) {
        container.innerHTML = 
            buildHeader() + 
            buildBody() + 
            buildFooter()
    } else {
        console.error("ERR: Please set a div with class .indeprods selector!")
    }
})

function buildALink(name, link) {
    return `<a href="${link}" target="_blank">${name}</a>`
}

function buildHeader() {
    return `<div class="indeprods-header">
                <h3>友链</h3>
            </div>`
}

function buildFooter() {
    return `<div class="indeprods-footer">
                <a href="https://github.com/cmlanche/indeprods-js" target="_blank">©&nbsp;独立开发者友链联盟 v1.0</a>
            </div>`
}

function buildBody() {
    let links = [
        {
            name: 'cmlanche',
            link: 'https://cmlanche.com'
        },
        {
            name: 'boseny',
            link: 'http://bosenythink.com/',
        },
        {
            name: 'taizizz',
            link: 'https://laogen.site/',
        },
        {
            name: '梦瑶奇缘',
            link: 'https://www.idiot6.com/'
        },
        {
            name: 'foolish1024',
            link: 'https://foolish1024.github.io/'
        },
        {
            name: '没有如果',
            link: 'https://blog.r136.dev'
        },
        {
            name: 'Northernlights',
            link: 'https://northernlights.ink/'
        },
        {
            name: 'hugo',
            link: 'https://blog.hugoxia.com/'
        },
        {
            name: 'w.im',
            link: 'https://w.im/'
        },
        {
            name: '888.dev',
            link: 'https://888.dev'
        }
    ]

    let bodyHtml = '<div class="indeprods-body">';
    bodyHtml += '<ul>'
    for(let link of links) {
        bodyHtml += `<li>${buildALink(link.name, link.link)}</li>`
    }
    bodyHtml += '</ul>'
    bodyHtml += '</div>'

    return bodyHtml
}