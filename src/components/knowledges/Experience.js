import React from 'react';
import bakery from '../../media/bakery.jpg'

const Experience = () => {
    return (
        <div className="experience">
            <h3>Expérience</h3>
            <div className="exp-1">
                <h4>Responsable en boulangerie</h4>
                <h5>2010-2018</h5>
                <p>
                    Après obtention de mon diplome de BEP VENTES ACTIONS MARCHANDES, j'ai décidé d'intégrer pour un contrat en CDI l'entreprise dans laquelle 
                    j'ai efféctué mon alternance. <br/>
                    Mon poste principal consisté à la vente des produits de l'enseigne.
                    J'ai acquis d'autres compétence en lien avec le metier de boulanger patissier artisanale.<br/>
                    J'ai appris à :<br/><br/>
                        - gerer une équipe de vente<br/>
                        - organiser son espace de travail<br/>
                        - préparation des sandwiches et salades & aide à la création de nouvelles recettes<br/>
                        - controller le réaprovisonnement des produits<br/>
                        - assurer la qualité en respectant les régles d'hygiènes<br/>
                        - préparation des baguettes destiné à la cuisson<br/>
                        - préparation des pâtisseries
                </p>
                <img src={bakery} alt="bakery" />
            </div>
            <div className="exp-2">
                <h4>Responsable en boulangerie</h4>
                <h5>2010-2018</h5>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Explicabo odit in vel dolorum nesciunt quasi, deleniti 
                    consequuntur nemo aliquam adipisci voluptatum, debitis ipsam voluptate, 
                    minus perspiciatis dolor alias est doloremque?
                    Omnis amet nam natus architecto. Consequuntur 
                    nostrum officia mollitia qui vitae ipsum aliquid voluptas deleniti, 
                    commodi quisquam itaque a quae magni delectus nulla doloremque tempore 
                    veritatis illo. Corporis, assumenda odit.
                </p>
            </div>
        </div>
    );
};

export default Experience;