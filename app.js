// 1. Sélectionner un élément par son ID
const titrePrincipal = document.getElementById('titrePrincipal');
console.log('Élément h1 :', titrePrincipal);

// 2. Sélectionner des éléments par leur classe
const paragraphes = document.getElementsByClassName('paragraphe');
console.log('Nombre de paragraphes :', paragraphes.length);
for (let i = 0; i < paragraphes.length; i++) {
    console.log('Paragraphe', i + 1, ':', paragraphes[i]);
}

// 3. Sélectionner un élément par son nom de balise
const elementsLi = document.getElementsByTagName('li');
console.log('Premier élément li :', elementsLi[0]);

// 4. Sélectionner un élément en utilisant un sélecteur CSS
const liste = document.querySelector('#listeElements');
const tousLesLi = document.querySelectorAll('#listeElements li');
console.log('Liste ul :', liste);
console.log('Tous les éléments li :', tousLesLi);

// 5. Modifier le texte d'un élément
titrePrincipal.textContent = 'Bienvenue sur ma page !';

// 6. Modifier le contenu HTML d'un élément
const zoneTexte = document.getElementById('zoneTexte');
zoneTexte.innerHTML = '<p>Ceci est un nouveau paragraphe ajouté par JavaScript.</p>';

// 7. Modifier les styles CSS d'un élément
const bouton = document.getElementById('monBouton');
bouton.style.backgroundColor = 'lightblue';
bouton.style.color = 'white';
bouton.style.border = '2px solid green';

// 8. Ajouter et supprimer des classes CSS
const premierParagraphe = paragraphes[0];
premierParagraphe.classList.add('important');
// Après un délai de 2 secondes, on retire la classe
setTimeout(() => {
    premierParagraphe.classList.remove('important');
}, 2000);

// 9. Écouter un clic sur un bouton
bouton.addEventListener('click', () => {
    console.log('Le bouton a été cliqué !');
});

// 10. Modifier le texte d'un autre élément au clic
bouton.addEventListener('click', () => {
    titrePrincipal.textContent = 'Bonjour !';
});

// 11. Ajouter un nouvel élément à la liste
const nouvelElement = document.createElement('li');
nouvelElement.textContent = 'Nouvel élément ajouté';
liste.appendChild(nouvelElement);

// 12. Supprimer un élément de la liste (facultatif)
liste.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        event.target.remove();
    }
}); 