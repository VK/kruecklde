<template>
  <div id="animated-background-two"></div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { ResizeObserver } from "resize-observer";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import * as Three from "three";
import { AnimationAction, AnimationClip } from "three";

@Component
export default class AnimatedBackgroundTwo extends Vue {
  public camera: any = undefined;
  public scene: any = undefined;
  public renderer: any = undefined;
  public model: any = undefined;
  public mixer: any = undefined;
  public ground: Three.Mesh = new Three.Mesh();
  public clock = new Three.Clock();

  public animations: { [index: string]: AnimationAction } = {};

  public height = 0;
  public width = 0;
  private container: HTMLElement | any = undefined;

  private resizeObserver: ResizeObserver = new ResizeObserver(this.resize);
  private resizeTimer: any = undefined;

  private initCamera() {
    this.camera = new Three.PerspectiveCamera(
      45,
      this.height / this.width,
      0.25,
      100
    );
    this.camera.position.set(-2, 2, 20);
    this.camera.lookAt(new Three.Vector3(0, 8, 0));
  }

  private updateBackground() {

    if (this.$vuetify.theme.dark) {
      this.scene.background = new Three.Color(0x21272c);
      this.scene.fog = new Three.Fog( 0x111111, 20, 140 );
          this.ground.material = new Three.MeshPhongMaterial({ color: 0x333333, depthWrite: false });
    } else {
      this.scene.background = new Three.Color(0xffffff);
      this.scene.fog = new Three.Fog( 0xffffff, 20, 100 );
          this.ground.material = new Three.MeshPhongMaterial({ color: 0x707270, depthWrite: false });
    }

  }

  public resize() {
    console.log("resize");
    const newWidth = this.container?.parentElement?.clientWidth;
    const newHeight = this.container?.parentElement?.clientHeight;

    if (
      newHeight &&
      newWidth &&
      (this.height != newHeight || this.width != newWidth)
    ) {
      this.height = newWidth;
      this.width = newHeight;

      clearTimeout(this.resizeTimer);
      this.resizeTimer = setTimeout(() => {
        //update canvas and camera and ...
        this.initCamera();
        if (this.renderer) {
          this.renderer.setSize(this.height, this.width);
        }
      }, 100);
    }
  }

  public animate() {
    const dt = this.clock.getDelta();

    if (this.mixer) this.mixer.update(dt);

    requestAnimationFrame(this.animate);
    if (this.model) {
      this.model.rotation.y += 0.01;
    }

    this.renderer.render(this.scene, this.camera);
  }

  mounted() {
    console.log("init");

    this.container = document.getElementById("animated-background-two");

    this.resize();

    this.initCamera();

    this.scene = new Three.Scene();
    this.scene.fog = new Three.Fog( 0xe0e0e0, 20, 100 );


    // lights

    const hemiLight = new Three.HemisphereLight(0xffffff, 0x444444);
    hemiLight.position.set(0, 10, 0);
    this.scene.add(hemiLight);

    const dirLight = new Three.DirectionalLight(0xffffff);
    dirLight.position.set(0, 20, 10);
    this.scene.add(dirLight);

    // ground
    // const mesh = new Three.Mesh(
    //   new Three.PlaneGeometry(200, 200),
    //   new Three.MeshPhongMaterial({ color: 0x777777, depthWrite: true })
    // );
    this.ground.geometry = new Three.PlaneGeometry(200, 200);

    this.ground.rotation.x = -Math.PI / 2;
    this.scene.add(this.ground);



    this.updateBackground();

    const loader = new GLTFLoader();
    loader.load(
      "./RobotExpressive.glb",
      (gltf: any) => {
        console.log(gltf);
        this.model = gltf.scene;
        this.scene.add(this.model);

        this.mixer = new Three.AnimationMixer(this.model);

        gltf.animations.forEach((a: AnimationClip) => {
          const action = this.mixer.clipAction(a);
          this.animations[a.name] = action;
        });

        console.log(this.animations);

        this.animations["Walking"].play();

        // Play all animations
        // for (const key in this.animations) {
        //   this.animations[key].play();
        // }
      },
      undefined,
      function (e) {
        console.error(e);
      }
    );

    this.renderer = new Three.WebGLRenderer({ antialias: true });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(this.height, this.width);
    this.container.appendChild(this.renderer.domElement);

    this.animate();

    this.resizeObserver.observe(this.container?.parentElement);
  }

  distroyed() {
    delete this.resizeObserver;
  }

  @Watch("$vuetify.theme.dark")
  onPropertyChanged(value: boolean, oldValue: boolean) {
    this.updateBackground();


  }
}
</script>


<style>
#animated-background-two {
  position: fixed;
}
</style>
