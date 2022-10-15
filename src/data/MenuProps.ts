export interface Menu {
   id?: number;
   name: string;
   path: string;
}

const MenuProps: Array<Menu> = [
   {
      id: 1,
      name: "Poke List",
      path: "/pokelist"
   },
   {
      id: 2,
      name: "Poke Details",
      path: "/pokedetails"
   },
   {
      id: 3,
      name: "Poke Card",
      path: "/"
   },
   {
      id: 4,
      name: "Poke Region",
      path: "/pokeregion"
   },
   {
      id: 5,
      name: "About",
      path: "/about"
   },
]

export {MenuProps}
