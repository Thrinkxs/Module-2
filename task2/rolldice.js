document.getElementById('rollButton').addEventListener('click', GameStart);
function GameStart(){
    var WinningCategories = [
        "Best Financial Solution",
        "Best Consumer Solution",
        "Best Enterprise Solution",
        "Best Health Solution",
        "Best Educational Solution",
        "Best Hackaton Solution",
    ]
    let Catergories = WinningCategories[Math.floor(Math.random()*WinningCategories.length)]
    console.log(Catergories)
}