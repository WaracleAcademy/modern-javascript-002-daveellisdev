function render(htmlContent) {
    const mainView = document.querySelector('#primaryView');
                              
    mainView.innerHTML = htmlContent;
}

render(`
<h2>Text</h2>
`)
render(`
<h1>Naaah</h1>
`)