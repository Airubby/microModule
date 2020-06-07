import Vue from 'vue'
import * as THREE from 'three';
var OrbitControls = require('three-orbit-controls')(THREE)
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
export default class ThreeMap {
    constructor(props,jsonUrl) {
        this.props=props;
        this.data=new Array();
        this.jsonUrl=jsonUrl;
        this.labelRenderer;
        this.dom=document.getElementById(this.props.dom);
        this.init();
    }

    init() {
        this.initRenderer();
        this.initCamera();
        this.initScene();
        this.render();
        // this.setHelper();
        this.setControl();
        this.initLoader();
        this.drawbox();
       
        this.dom.addEventListener('click', this.mouseClickEvent.bind(this))
        // this.dom.addEventListener('mousemove', this.mouseHoverEvent.bind(this))
    }

    //初始化渲染场景
    initRenderer() {
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setSize(this.dom.offsetWidth,this.dom.offsetHeight);
        
        this.dom.appendChild(this.renderer.domElement);
    }
    //初始化相机
    initCamera() {
        this.camera = new THREE.PerspectiveCamera(45, this.dom.offsetWidth / this.dom.offsetHeight, 0.1, 1000);
        //向上的一个坐标系
        // this.camera.up.x = 0;
        // this.camera.up.y = 1;
        // this.camera.up.z = 0;
        this.camera.position.set(0.5, 2, 6);
        this.camera.lookAt(0, 0, 0)
    }
    //初始化场景
    initScene() {
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0xffffff);
        var ambientLight=new THREE.AmbientLight(0xffffff);
        ambientLight.position.set(0,10,0);
        var spotLight = new THREE.SpotLight(0xffffff);
        spotLight.position.set(0, 50, 0);
        this.scene.add(spotLight);
        this.scene.add(ambientLight);
    }
    //渲染
    render() {
        this.animate()
    }
    animate() {
        requestAnimationFrame(this.animate.bind(this));
        this.renderer.render(this.scene, this.camera);
        if(this.labelRenderer!=null){
            this.labelRenderer.render(this.scene, this.camera)
        }
    }
    setHelper() {
        //红色x,绿色y,蓝色z
        const axesHelper = new THREE.AxisHelper(5);
        this.scene.add(axesHelper);
    }
    setControl() {
        this.controls = new OrbitControls(this.camera,this.dom);
        this.controls.update();
    }
    initLoader(){

        var loader = new THREE.FileLoader();
        var _this=this;
        loader.load( this.jsonUrl, function ( text ) {
			
            let data = JSON.parse( text );
            console.log(data)
            if(data.metadata.type.toLowerCase()==='object'){
                var loaderObj = new THREE.ObjectLoader();
                loaderObj.parse( data, function ( result ) {
                    console.log(result)
                    
                    _this.scene=result;
                    var ambient = new THREE.AmbientLight( 0xffffff );
                    _this.scene.add( ambient );
                } );
            }

        } );
    }
    handleJSON( data ) {
		console.log(data)
        
	}
    drawbox(){
        
    }

    mouseClickEvent(event) {
        console.log(event)
        console.log(this.group)
        if (!this.raycaster)
            this.raycaster = new THREE.Raycaster();
        if (!this.mouse)
            this.mouse = new THREE.Vector2();

        // 将鼠标位置归一化为设备坐标。x 和 y 方向的取值范围是 (-1 to +1)
        this.mouse.x = (event.offsetX / this.dom.offsetWidth) * 2 - 1;
        this.mouse.y = -(event.offsetY / this.dom.offsetHeight) * 2 + 1;

        // 通过摄像机和鼠标位置更新射线
        this.raycaster.setFromCamera(this.mouse, this.camera);

        // 计算物体和射线的焦点
        // const intersects = this.raycaster.intersectObjects(this.group.children);
        // console.log(intersects)
        // if(intersects.length>0){
        //     intersects[0].object.position.y=0;
        //     intersects[0].object.scale.set(1 ,0.4, 1);
        //     let y=intersects[0].object.position.y;
        //     intersects[0].object.position.y = y-1.66*(1-0.4)/2;
        //     //intersects[0].object.material.color.set(0x66ff00,1);
        //     // intersects[0].object.material.color.set("#ff0000");
        // }
         
       
    }
    mouseHoverEvent(event){
        console.log(event)
        console.log(this.group)
        if (!this.raycaster)
            this.raycaster = new THREE.Raycaster();
        if (!this.mouse)
            this.mouse = new THREE.Vector2();

        // 将鼠标位置归一化为设备坐标。x 和 y 方向的取值范围是 (-1 to +1)
        this.mouse.x = (event.offsetX / this.dom.offsetWidth) * 2 - 1;
        this.mouse.y = -(event.offsetY / this.dom.offsetHeight) * 2 + 1;

        // 通过摄像机和鼠标位置更新射线
        this.raycaster.setFromCamera(this.mouse, this.camera);

        // 计算物体和射线的焦点
        const intersects = this.raycaster.intersectObjects(this.group.children);
    }
}