AFRAME.registerComponent("comic", {
    init: function () {
      this.placesContainer = this.el;
      this.comics()
    },
  
    comics: function () {
      const thumbNailsRef = [
        {
          id: "bluebeetle",
          title: "Blue Beetle Vol 1",
          url: "./assets/bloobeetle.jpeg",
        },
        {
          id: "ironman",
          title: "Iron Man",
          url: "./assets/iron_man.jpeg",
        },
  
        {
          id: "spiderman",
          title: "Spiderman",
          url: "./assets/spiderman.jpeg",
        },
        {
          id: "x-men",
          title: "X Men",
          url: "./assets/x_men.webp",
        },
      ];
      let prevoiusXPosition = -60;
  
      for (var item of thumbNailsRef) {
        const posX = prevoiusXPosition + 25;
        const posY = 10;
        const posZ = -40;
        const position = { x: posX, y: posY, z: posZ };
        prevoiusXPosition = posX;

        // Thumbnail Element
        // Title Text Element
        // Border Element
        const borderE1 = this.createBorder(position, item.id)
        const thumbNail = this.createThumbNail(item)
        borderE1.appendChild(thumbNail)
        const titleE1 = this.createTitleE1(position, item)
        borderE1.appendChild(titleE1)

        
        this.placesContainer.appendChild(borderE1);
      }
    },
    createBorder: function (position, id){
      const entityE1 = document.createElement("a-entity")
      entityE1.setAttribute("id", id)
      entityE1.setAttribute("visible", true)
      entityE1.setAttribute("geometry", {
        primitive: "ring",
        radiusInner: 9,
        radiusOuter: 10,
      })
      entityE1.setAttribute("position", position)
      entityE1.setAttribute("material", {
        color: "#0077cc",
        opacity: 1,
      })
      return entityE1
    },
    createThumbNail: function(item){
      const entityE1 = document.createElement("a-entity")
      entityE1.setAttribute("visible", true)
      entityE1.setAttribute("geometry", {
        primitive: "circle",
        radius: 9,
      })
      entityE1.setAttribute("material", {
        src:item.url
      })
      return entityE1
    },
    createTitleE1: function(position, item){
      const entityE1 = document.createElement("a-entity")
      entityE1.setAttribute("text", {
        font: "exo2bold",
        align: "center",
        width: 70,
        color:"#e5100",
        value: item.title
      })
      const e1Position = position
      e1Position.y = -20
      entityE1.setAttribute("position", e1Position)
      entityE1.setAttribute("visible", true)
      return entityE1
    },
    
  });
  