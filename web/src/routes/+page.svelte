<script lang="ts">
  import { ItemCategories, ItemTypes, Materials } from '$enums';
  import type { Character } from '$types';

  // first try
  const nox: Character = {
    id: 0,
    name: 'Nox',
    age: 17,
    divineBlood: {
      id: 0,
      name: 'Création',
      description:
        "Le sang d'un être divin vous habite et vous permet offre des capacités régénératives."
    },
    divineBlessing: {
      id: 0,
      name: 'Tyran Bestial',
      description: 'Le Tyran vous offre une partie de ses capacités.'
    },
    moneys: {
        bronze: 0,
        argent: 0,
        or: 0,
        mithril: 1000,
    },
    inventory: {
      items: [
        {
          item: {
            id: 666,
            name: 'Potion de vie',
            description: 'Redonne 1d8 de vie au joueur',
            rarety: 1,
            stackable: true,
            type: ItemTypes.Consommable
          },
          quantity: 10,
          maxQuantity: 100,
        },
        {
          item: {
            id: 2,
            name: "lingot d'or",
            description: "un lingot d'or",
            rarety: 1,
            stackable: true,
            type: ItemTypes.Consommable,            
          },
          quantity: 2,
          maxQuantity: 2,
        },
        {
          item: {
            id: 2,
            name: "lingot d'or",
            description: "un lingot d'or",
            rarety: 1,
            stackable: true,
            type: ItemTypes.Consommable,            
          },
          quantity: 1,
          maxQuantity: 2,
        },
        {
          item: {
            id: 555,
            name: 'Dague',
            description: 'tue son opposant',
            rarety: 5,
            stackable: false,
            type: ItemTypes.Equipment,
            material: Materials.Adamantium,
            upgraded: true,
            weightCategory: ItemCategories.Light
          },
          quantity: 1,
          maxQuantity: 1,
        }
      ],
      maxItems: 10,
      totalItems: 2
    },
    skills: [],
    statistics: [],
    equipment: {
      Helmet: {
        id: 0,
        name: '',
        description: '',
        stackable: false,
        type: ItemTypes.Equipment,
        material: Materials.Adamantium,
        upgraded: false,
        rarety: 1
      },
      Chest: {
        id: 0,
        name: '',
        description: '',
        stackable: false,
        type: ItemTypes.Equipment,
        upgraded: false,
        rarety: 1
      },
      Gloves: {
        id: 0,
        name: '',
        description: '',
        stackable: false,
        type: ItemTypes.Equipment,
        upgraded: false,
        rarety: 1
      },
      Legs: {
        id: 0,
        name: '',
        description: '',
        stackable: false,
        type: ItemTypes.Equipment,
        upgraded: false,
        rarety: 1
      },
      LeftHand: {
        id: 0,
        name: '',
        description: '',
        stackable: false,
        type: ItemTypes.Equipment,
        upgraded: false,
        rarety: 1
      },
      RightHand: {
        id: 0,
        name: '',
        description: '',
        stackable: false,
        type: ItemTypes.Equipment,
        upgraded: false,
        rarety: 1
      },
      secondaryWeapon: undefined,
      Accessories: [
        {
          id: 0,
          name: '',
          description: '',
          stackable: false,
          type: ItemTypes.Equipment
        },
        {
          id: 0,
          name: '',
          description: '',
          stackable: false,
          type: ItemTypes.Equipment
        },
        {
          id: 0,
          name: '',
          description: '',
          stackable: false,
          type: ItemTypes.Equipment
        },
        {
          id: 0,
          name: '',
          description: '',
          stackable: false,
          type: ItemTypes.Equipment
        }
      ]
    }
  };
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
