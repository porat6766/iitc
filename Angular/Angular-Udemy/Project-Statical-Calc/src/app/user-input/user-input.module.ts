import { NgModule } from "@angular/core";
import { UserInputComponent } from "./user-input.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({ declarations: [UserInputComponent], imports: [FormsModule, CommonModule], exports: [UserInputComponent] })

export class UserInputModule { }