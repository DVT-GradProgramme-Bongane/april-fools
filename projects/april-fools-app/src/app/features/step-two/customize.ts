import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatCard, MatCardModule } from "@angular/material/card";
import { MatDivider } from "@angular/material/divider";
import { MatSliderModule } from "@angular/material/slider";
import { Syrup, SYRUP_TYPES } from "../../core/constants/ingredients";
import { MatChipsModule } from "@angular/material/chips";
import { MatIcon } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";

@Component({
  selector: 'app-customize',
  imports: [MatSliderModule, FormsModule, MatCardModule, MatDivider, MatChipsModule, MatIcon, MatListModule],
  templateUrl : './customize.html',
  styleUrl : './customize.css'
})
export class Customize{
  temperatureValue = 79;
  foamDensityValue = 7;
  availableSyrups : Syrup[] = SYRUP_TYPES;
  selectedSyrups :Syrup[] = []; 

  selectSyrup(selectedSyrup: Syrup){
    this.selectedSyrups.push(selectedSyrup);
    
    this.availableSyrups = this.availableSyrups.filter((syrup) => syrup.id !== selectedSyrup.id)
  }
}