class App{
    constructor(){
        this.repositories = [];
        this.formEl = document.getElementById('repo-form');
        this.listEl = document.getElementById('repo-list');

        this.registerHandlers();
    }

    registerHandlers(){
        this.formEl.onsubmit= event => this.addRespository(event);
    }

    addRespository(event){

        event.preventDefault();

        this.repositories.push({
            name:'rocketseat.com.br',
            description:'Tire a sua ideia do papel e de vida a sua startup',
            avatar_url:'https://avatars0.githubusercontent.com/u/28929274?v=4',
            html_url:'https://github.com/rocketseat/rocketseat.com.br',
        });
        this.render();
    }
    render(){
        this.listEl.innerHTML = '';

        this.repositories.forEach(respo =>{
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', repo.avatar_url);

            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createTextNode(repo.name));

            let descriptionEl = document.createElement('p');
            descriptionEl.appendChild(document.createTextNode(this.description));


            let linkEl = document.createElement('a');
            linkEl.setAttribute('target','_blanck');
            linkEl.appendChild(document.createTextNode('Acessar'));

            let listItemEl = document.createElement('li');
            listItemEl.appendChild(imgEl);
            listItemEl.appendChild(titleEl);
            listItemEl.appendChild(descriptionEl);
            listItemEl.appendChild(linkEl);

            this.listEl.appendChild(listItemEl);

        });
    
    }

    
}

new App();

