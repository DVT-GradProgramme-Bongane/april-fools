export interface CoffeeBase{
  id:string,
  name: string
}

export interface Milk {
  id: string,
  name: string,
}

export interface CupSize {
  id: string,
  name: string,
}

export interface Syrup{
  id: string,
  name: string,
}

export const COFFEE_BASE: CoffeeBase[] = [
  {id: "espresso" , name: "Espresso"}, 
  {id: "americano", name: "Americano"}, 
  {id: "filter", name: "Filter"}, 
  {id: "cold-brew", name: "Cold brew"},
  {id: "pour-over" ,name: "Pour-over"}
]

export const MILK : Milk []= [
  {id:"out", name:"Oat"},
  {id: "whole", name : "Whole"},
  {id: "almond", name : "Almond"},
  {id: "soy", name : "Soy"},
  {id: "none", name : "None"}
]

export const CUP_SIZE : CupSize[] = [
  {id: "short", name: "Short"},
  {id: "tall", name: "Tall"},
  {id: "grande", name: "Grande"},
  {id: "venti", name: "Venti"},
]

export const SYRUP_TYPES : Syrup[] =[
  {id : "vanila", name : "Vanilla Syrup"},
  {id: "chocolate", name: "Chocolate Syrup"},
  {id: "caramel", name: "Caramel Syrup"},
]