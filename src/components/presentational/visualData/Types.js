export const obtenerClassType = (type) => {
    console.log(type);
    switch (type) {
        case 'fire': return 'fas fa-fire';
        case 'water': return 'fas fa-tint';
        case 'electric': return 'fas fa-bolt';
        case 'ground': return 'fas fa-mountain';
        case 'grass': return 'fas fa-leaf';
        case 'ghost': return 'fas fa-ghost';
        case 'flying': return 'fas fa-feather-alt';
        case 'bug': return 'fas fa-bug';
        case 'rock': return 'fas fa-circle';
        case 'fighting': return 'fas fa-hand-rock';
        case 'steel': return 'fas fa-cog';
        case 'dragon': return 'fas fa-dragon';
        case 'poison': return 'fas fa-skull-crossbones';
        case 'ice': return 'fas fa-snowflake';
        default: return "";
        //falta hada fairy psychic normal dark
    }
}
export default obtenerClassType;