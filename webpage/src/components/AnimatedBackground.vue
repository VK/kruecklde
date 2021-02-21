<template>
  <div id="animated-background"></div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { ResizeObserver } from "resize-observer";
import { GLTF, GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as Three from "three";
import StateMachine from "ts-javascript-state-machine";

@Component
export default class AnimatedBackground extends Vue {
  public camera?: Three.PerspectiveCamera = undefined;
  public scene: Three.Scene = new Three.Scene();
  public renderer = new Three.WebGLRenderer({ antialias: true });
  public model?: Three.Group = undefined;
  public mixer?: Three.AnimationMixer = undefined;
  public ground: Three.Mesh = new Three.Mesh();
  public clock = new Three.Clock();
  public fsm?: StateMachine = undefined;

  private initStateMachine() {
    console.log("initStateMachine");
    if (this.fsm) return;
    this.fsm = new StateMachine({
      init: "idle",
      transitions: [
        { name: "idle", from: "run", to: "idle" },
        { name: "walk", from: "idle", to: "walk" },
      ],
      methods: {
        onIdle: () => {
          console.log("start idle");
          console.log(this.animations);
          if ("Idle" in this.animations) this.animations["Idle"].play();
        },
        onWalk: () => {
          console.log("start Walk");
          if ("Walking" in this.animations) this.animations["Walking"].play();
        },
      },
    });
  }

  public animations: { [index: string]: Three.AnimationAction } = {};

  public height = 0;
  public width = 0;
  private container: HTMLElement | null = null;

  private resizeObserver: ResizeObserver = new ResizeObserver(this.resize);
  private resizeTimer?: number = undefined;

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
      this.scene.fog = new Three.Fog(0x111111, 20, 170);
      this.ground.material = new Three.MeshPhongMaterial({
        color: 0x333333,
        depthWrite: false,
        flatShading: true,
      });
    } else {
      this.scene.background = new Three.Color(0xffffff);
      this.scene.fog = new Three.Fog(0xffffff, 20, 100);
      this.ground.material = new Three.MeshPhongMaterial({
        color: 0x707270,
        depthWrite: false,
        flatShading: true,
      });
    }
  }

  public resize() {
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
    // if (this.model) {
    //   this.model.rotation.y += 0.01;
    // }

    if (this.fsm) {
      const t = this.fsm.transitions;

      //this.fsm.walk();
    }
    if (this.camera) {
      this.renderer.render(this.scene, this.camera);
    }
  }

  mounted() {
    this.container = document.getElementById("animated-background");

    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = Three.PCFSoftShadowMap; // default THREE.PCFShadowMap

    this.resize();

    this.initCamera();

    this.scene.fog = new Three.Fog(0xe0e0e0, 20, 100);

    // lights

    const hemiLight = new Three.HemisphereLight(0xffffff, 0x444444);
    hemiLight.position.set(-15, 10, 20);
    this.scene.add(hemiLight);

    const dirLight = new Three.DirectionalLight(0xffffff);
    dirLight.position.set(4, 10, 20);
    dirLight.target.position.set(0, 0, 0);
    dirLight.castShadow = true;

    this.scene.add(dirLight);

    // ground
    // const mesh = new Three.Mesh(
    //   new Three.PlaneGeometry(200, 200),
    //   new Three.MeshPhongMaterial({ color: 0x777777, depthWrite: true })
    // );
    this.ground.geometry = new Three.PlaneGeometry(200, 200);
    this.ground.receiveShadow = true;

    this.ground.rotation.x = -Math.PI / 2;
    this.scene.add(this.ground);

    this.updateBackground();

    const loader = new GLTFLoader();
    loader.load(
      "./RobotExpressive.glb",
      (gltf: GLTF) => {
        this.model = gltf.scene;
        if (this.model) {
          this.model.traverse((child) => {
            if (child.isObject3D) {
              child.castShadow = true;
              child.receiveShadow = true;
            }
          });

          this.scene.add(this.model);
          this.mixer = new Three.AnimationMixer(this.model);
        }

        gltf.animations.forEach((a: Three.AnimationClip) => {
          const action = this.mixer?.clipAction(a);
          if (action) this.animations[a.name] = action;
        });

        console.log(this.animations);

        // Play all animations
        // for (const key in this.animations) {
        //   this.animations[key].play();
        // }
        this.initStateMachine();
      },
      undefined,
      function (e) {
        console.error(e);
      }
    );

    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(this.height, this.width);
    this.container?.appendChild(this.renderer.domElement);

    this.animate();

    if (this.resizeObserver && this.container && this.container.parentElement)
      this.resizeObserver.observe(this.container?.parentElement);

    
  }

  /**
   * Remove the resize observer once the AnimatedBackround is removed
   */
  distroyed() {
    delete this.resizeObserver;
  }

  /**
   * Wathcher to switch the the background style once the user switches between
   * themes
   */
  @Watch("$vuetify.theme.dark")
  onPropertyChanged() {
    this.updateBackground();
  }
}
</script>


<style>
#animated-background {
  position: fixed;
}
</style>
