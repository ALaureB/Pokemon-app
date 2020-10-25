export class PokemonFull {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;

  constructor({ id, name, base_experience, height, is_default, order, weight }: { id: number; name: string; base_experience: number; height: number; is_default: boolean; order: number; weight: number; }) {
    this.id = id;
    this.name = name;
    this.base_experience = base_experience;
    this.height = height;
    this.is_default = is_default;
    this.order = order;
    this.weight = weight;
  }
}
