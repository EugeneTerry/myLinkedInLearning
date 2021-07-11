/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */


const nightstand = {
  color: "brown",
  drawers: 3,
  topDrawer: "wires",
  middleDrawer: {
    aaaBatteries: 15,
    aaBatteries: 10
  },
  bottonDrawer: "hats",
  drawerOpen: false,
  toggleDrawer(drawerStatus) {
    this.drawerOpen = drawerStatus;
  }
}

