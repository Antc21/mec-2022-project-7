import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Copyright from './Copyright'


function Display({type, level, name, description, image}){

    return(<Card>
        
        <CardContent>
        <h4>{type}</h4>

        </CardContent>
        <CardMedia component= 'img' height= '320' image={image} alt= 'no image loaded' />
        <CardContent>
            <h2>{name}</h2>
            <h2>{level}</h2>
            <p>{description}</p>
            <Copyright />
        </CardContent>
    </Card>




    );




}
export default Display;