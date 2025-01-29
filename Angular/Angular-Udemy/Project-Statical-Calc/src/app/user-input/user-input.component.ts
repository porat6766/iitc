import { Component, signal } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  enteredInitialInvestment = signal("0")
  enteredAnnualInvestment = signal("0")
  enteredExpectedReturn = signal("5")
  enteredDuration = signal("10")

  constructor(private investmentServise: InvestmentService) { }

  onSubmit() {
    this.investmentServise.calculateInvestmentResults({
      initialInvestment: +this.enteredInitialInvestment(),
      duration: +this.enteredAnnualInvestment(),
      expectedReturn: +this.enteredExpectedReturn(),
      annualInvestment: +this.enteredDuration(),
    })
    this.enteredInitialInvestment.set("0"),
      this.enteredAnnualInvestment.set("0"),
      this.enteredExpectedReturn.set("0"),
      this.enteredDuration.set("0")
  }
}