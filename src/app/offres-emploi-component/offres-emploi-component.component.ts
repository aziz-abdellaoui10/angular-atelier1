import { Component } from '@angular/core';
import {Article} from "../core/model/emploi"
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-offres-emploi-component',
  templateUrl: './offres-emploi-component.component.html',
  styleUrls: ['./offres-emploi-component.component.css']
})
export class OffresEmploiComponentComponent {
  listeEmploi: Article[]=[
    {
      titre: "Titre 1",
      reference: "reference 1",
      entreprise: "Entreprise 1",
      etat: false
    },
    {
      titre: "Titre 2",
      reference: "Description 2",
      entreprise: "Entreprise 2",
      etat: true
    },
  ]
  entrepriseRecherchee: string = '';


  calculerBilan() {
    const offresNonCloturees = this.listeEmploi.filter(emploi => emploi.etat === true);
    const nombreOffresNonCloturees = offresNonCloturees.length;
    console.log("Nombre d'offres d'emploi non clôturées :", nombreOffresNonCloturees);
  }


  rechercherOffresEmploi() {
    // Effectuer l'action de recherche en utilisant la valeur de "entrepriseRecherchee"
    console.log("Recherche d'offres d'emploi pour l'entreprise :", this.entrepriseRecherchee);
  }
  
  
}
