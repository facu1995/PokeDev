export const obtenerClassType = (type) => {
    switch (type) {
        case 'fire': return 'type fas fa-fire';
        case 'water': return 'type fas fa-tint';
        case 'electric': return 'type fas fa-bolt';
        case 'ground': return 'type fas fa-mountain';
        case 'grass': return 'type fas fa-leaf';
        case 'ghost': return 'type fas fa-ghost';
        case 'flying': return 'type fas fa-feather-alt';
        case 'bug': return 'type fas fa-bug';
        case 'rock': return 'type fas fa-circle';
        case 'fighting': return 'type fas fa-hand-rock';
        case 'steel': return 'type fas fa-cog';
        case 'dragon': return 'type fas fa-dragon';
        case 'poison': return 'type fas fa-skull-crossbones';
        case 'ice': return 'type fas fa-snowflake';
        default: return "";
        //falta hada fairy psychic normal dark
    }
}
export default obtenerClassType;