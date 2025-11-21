<script lang="ts">
  import { ItemTypes } from "$enums";
  import type { Character } from "$types";

    // first try
    const nox: Character = {
        id: 0,
        name: "Nox",
        age: 17,
        divineBlood: {
            id: 0,
            name: "Création",
            description: "Le sang d'un être divin vous habite et vous permet offre des capacités régénératives."
        },
        divineBlessing: {
            id: 0,
            name: "Tyran Bestial",
            description: "Le Tyran vous offre une partie de ses capacités."
        },
        inventory: {
            items: [],
            maxItems: 10,
            totalItems: 0,
        },
        skills: [],
        statistics: [],
        equipment: {
            // TODO items should have
            //  - "upgrade" information
            //  - "material" cuir, fer, acier, mithril, adamantium
            //  - "category" light, medium, heavy
            Helmet: {
                id: 0,
                name: "",
                description: "",
                stackable: false,
                type: ItemTypes.Equipment,
            },
            Chest: {
                id: 0,
                name: "",
                description: "",
                stackable: false,
                type: ItemTypes.Equipment,
            },
            Gloves: {
                id: 0,
                name: "",
                description: "",
                stackable: false,
                type: ItemTypes.Equipment,
            },
            Legs: {
                id: 0,
                name: "",
                description: "",
                stackable: false,
                type: ItemTypes.Equipment,
            },
            LeftHand: {
                id: 0,
                name: "",
                description: "",
                stackable: false,
                type: ItemTypes.Equipment,
            },
            RightHand: {
                id: 0,
                name: "",
                description: "",
                stackable: false,
                type: ItemTypes.Equipment,
            },
            Accessories: [
                {
                    id: 0,
                    name: "",
                    description: "",
                    stackable: false,
                    type: ItemTypes.Equipment,
                },
                {
                    id: 0,
                    name: "",
                    description: "",
                    stackable: false,
                    type: ItemTypes.Equipment,
                },
                {
                    id: 0,
                    name: "",
                    description: "",
                    stackable: false,
                    type: ItemTypes.Equipment,
                },
                {
                    id: 0,
                    name: "",
                    description: "",
                    stackable: false,
                    type: ItemTypes.Equipment,
                },
            ]
        }
    }
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
