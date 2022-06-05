class Character {


    soma(...valores){
        let soma = 0;
        for(var i = valores.length - 1; i>= 0 ; i-- ){
            soma += Number(valores[i])
        }
        return console.log("Total do Poder " + soma)
    }

    character(life, atk, luck){
        
        var currentLife = {
            profile: {hp: Number(life), attack: Number(atk), luck: Number(luck)}
        }

       console.log(`HP:${currentLife.profile.hp}, ATK:${currentLife.profile.attack}, LUCK:${currentLife.profile.luck}`)


        return this.soma(currentLife.profile.hp, currentLife.profile.attack, currentLife.profile.luck)
    }

   
}

module.exports = Character
