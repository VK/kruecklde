<template>
  <div id="animated-background"></div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import {
  Engine,
  Render,
  Bodies,
  World,
  Mouse,
  MouseConstraint,
} from "matter-js";
@Component
export default class NavBar extends Vue {
  public lang = "de";

  mounted() {
    console.log("hello");

    // Create an engine
    const engine = Engine.create();

    // Create a renderer
    const render = Render.create({
      element: document.getElementById("menubar") as HTMLElement,
      engine: engine,
      options: {
        width: window.innerWidth,
        height: window.innerHeight,
        wireframes: false,
      },
    });

    // Create two boxes and a ground
    const boxA = Bodies.rectangle(400, 200, 80, 80);
    const boxB = Bodies.rectangle(450, 50, 80, 80, {
      render: {
        fillStyle: "red",
        strokeStyle: "blue",
        lineWidth: 3,
      },
    });

    const ground = Bodies.rectangle(400, 410, 810, 60, { isStatic: true });

     

    World.add(engine.world, [boxA]);

    


    // Run the engine
    Engine.run(engine);

    // Run the renderer
    Render.run(render);
  }
}
</script>


<style>
#animated-background {
  position: relative;
  top: 0;
  left: 0;
  z-index: -200;
}
</style>