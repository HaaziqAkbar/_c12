var marks = [35,38,42,45,43,34,46,41,48,32];
var sum1=0;
var sum2=0;



function setup() 
{
  createCanvas(400,400);

  for (var c=0;c<marks.length;c++){

    if (c%2==0){
     sum1=sum1+marks[c];
    
     console.log("index position  "+c+ " marks "+marks[c]+ " even sum : "+sum1);

      


    }
    else{
    sum2=sum2+marks[c];
    console.log("index position  "+c+ " marks "+marks[c]+ " odd sum : "+sum2);

    }
    }
    
}

function draw() 
{
  background(30);
}

 

