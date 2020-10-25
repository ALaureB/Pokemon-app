export class PokemonFull {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: any[];

  constructor({
    id,
    name,
    base_experience,
    height,
    is_default,
    order,
    weight,
    abilities,
  }: {
    id: number;
    name: string;
    base_experience: number;
    height: number;
    is_default: boolean;
    order: number;
    weight: number;
    abilities: any[];
  }) {
    this.id = id;
    this.name = name;
    this.base_experience = base_experience;
    this.height = height;
    this.is_default = is_default;
    this.order = order;
    this.weight = weight;
    this.abilities = abilities;
  }
}
