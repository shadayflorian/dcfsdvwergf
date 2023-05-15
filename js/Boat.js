class Boat {
  constructor(x, y, width, height, boatPos) {
    var options = {
      restitution: 0.8,
      friction: 1.0,
      density: 1.0,
    };

    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;

    this.boatPosition = boatPos;
    this.image = loadImage("assets/boat.png");
    World.add(world, this.body);
  }


  display() {
    var angle = this.body.angle;
    var pos = this.body.position;
  
    //5. CODIGO QUE PERMITE AÑADIR CONFIGURACIONES

    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, this.boatPosition, this.width, this.height);
    noTint();
    //6. CODIGO QUE PERMITE ACTUALIZAR CONFIGURACIONES
  }
}
