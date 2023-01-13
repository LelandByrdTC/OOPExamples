class Musician{
    constructor(name, instrument){
        this.name = name;
        this.instrument = instrument;
    }
    log(){
        console.log(`${this.name} plays the ${this.instrument}`);
    }
}

class Bassist extends Musician{
    constructor(name, instrument){
        super(name, instrument);
    }
    //method overidding
    log(){
        console.log(`${this.name} is the most important member of the band`);
    }
}

const byrd = new Musician('byrdman', 'cello');
byrd.log();
const jim = new Bassist('jim', 'bass');
jim.log();