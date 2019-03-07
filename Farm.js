class FarmAnimal{
    constructor(name,image){
this.name=name
this.image=image


    }

    talk(){
        alert("talk function")
    }
}


/////1////////
class Cow extends FarmAnimal{
    constructor(name,image){
    super(name,image)
    }
    talk(){
        super.talk()
        alert("moo")
    }
    
}

class Angus extends cow{
    constructor(name,image){
    super(name,image)
    }
    talk(){
        super.talk()
        alert("moo")
    }
    
}

class TexasLonghorn extends cow{
    constructor(name,image){
    super(name,image)
    }
    talk(){
        super.talk()
        alert("moo")
    }
    
}

 

////////2////////
class pig extends FarmAnimal{
    constructor(name,image){
    super(name,image)
    }
    talk(){
        super.talk()
        alert("oink")
    }
    
}

////////3////////
class chicken extends FarmAnimal{
    constructor(name,image){
    super(name,image)
    }
    talk(){
        super.talk()
        alert("cluck")
    }
    
}

///////4////////
class sheep extends FarmAnimal{
    constructor(name,image){
    super(name,image)
    }
    talk(){
        super.talk()
        alert("baa")
    }
    
}

///////5////////
class dog extends FarmAnimal{
    constructor(name,image){
    super(name,image)
    }
    talk(){
        super.talk()
        alert("ruff")
    }
    
}

    function myFunction() {
        var popup = document.getElementById("myPopup");
        popup.classList.toggle("show");

        var Anitext=document.getElementById("myPopup");
        Anitext.innerText="moo"

        var moving =document.getElementById("Angusid");
        moving.style.left=100
        
        var xyzStyles = {'left':'100px'}
        setStyle('Angus', xyzStyles);
      } 

  

