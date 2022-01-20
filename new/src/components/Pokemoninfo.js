import Grid from '@mui/material/Grid';
import Display from './Display';
function Pokemon(){
const Pokemoninfo=[ {
    type:'Steel',
    level:'(Lvl 45)',
    name:'Metagross',
    description:'Metagross is a massive robotic Pokémon with a turquoise, disc-shaped body and four legs',
    image:'https://www.serebii.net/swordshield/pokemon/376.png',
},
{
    type:'Dragon',
    level:'(Lvl 55)',
    name:'Dragonite',
    description:'Dragonite is a draconic, bipedal Pokémon with light orange skin. It has large, grayish-green eyes and a round snout with small nostrils.',
    image:'https://assets.pokemon.com/assets/cms2/img/pokedex/full/149.png',
},
{
    type:'Psychic',
    level:'(Lvl 10)',
    name:'Mew',
    description:'A pink bipedal Pokémon with mammalian features.It has a rounded, wide snout; triangular ears; and large blue eyes',
    image:'https://www.wepc.com/wp-content/uploads/2021/11/MEw.jpg',
}
]
    return(<Grid container spacing={2}>
        {Pokemoninfo.map((Pokemon) =>{
            return <Grid item xs={4}>
                <Display type={Pokemon.type} level={Pokemon.level} name={Pokemon.name}
                description={Pokemon.description}
                image={Pokemon.image} />

 
            </Grid>

        

        })
    }

    </Grid>


    );



}
export default Pokemon;