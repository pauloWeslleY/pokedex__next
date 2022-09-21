export interface Menu {
   id?: number;
   name: string;
   path: string;
}

const MenuProps: Menu[] = [
   {
      id: 1,
      name: "Pokemon List",
      path: "/pokelist"
   },
   {
      id: 2,
      name: "Pokemon Details",
      path: "/pokedetails"
   },
   {
      id: 3,
      name: "Pokemon Card",
      path: "/"
   },
   {
      id: 4,
      name: "Pokemon Region",
      path: "/pokeregion"
   },
   {
      id: 5,
      name: "About",
      path: "/about"
   },
]

export {MenuProps}
