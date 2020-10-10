// var THREE = require('three') //正确
import * as THREE from 'three';
import * as d3 from 'd3-geo';
var OrbitControls = require('three-orbit-controls')(THREE)
import air from './kongtiao.png';
import cabinet from './cabinet.png';
export default class ThreeMap {
    constructor(props,mapData) {
        this.props=props;
        this.data=new Array();
        this.mapData=mapData;
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
        // this.drawMultiPolygon(); //引用test1.json
        this.drawbox();
        //引用china.json
        // this.drawMap(); 
        // this.drawLines();
        
        this.dom.addEventListener('click', this.mouseClickEvent.bind(this))
        // this.dom.addEventListener('mousemove', this.mouseHoverEvent.bind(this))
    }

    //初始化渲染场景
    initRenderer() {
        console.log(this.props)
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
        this.camera.position.set(0, 6, 4);
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
    }
     guid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0,
                v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
   
    setHelper() {
        //红色x,绿色y,蓝色z
        const axesHelper = new THREE.AxisHelper(5);
        this.scene.add(axesHelper);
    }
    setControl() {
        this.controls = new OrbitControls(this.camera);
        this.controls.update();
    }
    drawbox(){
        const tgroup = new THREE.Group();
        let loader = new THREE.ObjectLoader();
        // let obj = loader.parse(this.mapData);
        // console.log(obj)
        // this.group = obj;
        // this.scene.add(obj)

        let _this=this;
        var textureLoader=new THREE.TextureLoader();
        this.textures = {};
        this.textures["air"]=new THREE.TextureLoader().load(air);
        this.textures["cabinet"]=new THREE.TextureLoader().load(cabinet);
        let mapData=this.mapData;
        let data=this.mapData.object.children[0].children;
        for(let i=0;i<data.length;i++){
            for(let j=0;j<mapData.materials.length;j++){
                if(data[i].material==mapData.materials[j].uuid){
                    textureLoader.load(mapData.materials[j].map,function(texture){
                        for(let n=0;n<mapData.geometries.length;n++){
                            if(data[i].geometry==mapData.geometries[n].uuid){
                                if(mapData.geometries[n].type=="PlaneBufferGeometry"){
                                  
                                    var geometry=new THREE.PlaneBufferGeometry(mapData.geometries[n].width,mapData.geometries[n].height);  
                                    mapData.materials[j].map=mapData.materials[j].map?texture:"";
                                    var materail=new THREE.MeshBasicMaterial(mapData.materials[j]);
                                    var mesh=new THREE.Mesh(geometry,materail);
                                    var mirrorMatrix = new THREE.Matrix4().fromArray(data[i].matrix);
                                    mesh.applyMatrix(mirrorMatrix);

                                    _this.scene.add(mesh);
                                }
                            }
                        }
                    });
                }
            }
        }
        var json=[{type:"cabinet"},{type:"cabinet"},{type:"air"},{type:"cabinet"},{type:"air"},{type:"cabinet"}]
        let model=10;//机柜总数
        let left=0.03//间距
        let cwidth=5.76-(left*(model-1));//计算总宽
        let width=cwidth/(model);//计算机柜宽度
        let y=(5.76/2)-(width/2);//Y轴移位
        let z=1.55;//z轴
        let z1=1.54;//z轴
           for(let j=0;j<2;j++){
            y=(5.76/2)-(width/2);//Y轴移位
                for(let i=0;i<json.length;i++){
                    var xxxx=width;
                      if(json[i].type=="cabinet"){
                          xxxx=(width*2)+(left);
                      }
                      if(i==0){
                        if(json[i].type=="cabinet"){
                            y=y-(width/2)-(left/2);
                        }else{
                            y=y;
                        }
                      }else{
                        if(json[i].type=="cabinet"){
                            if(json[i-1].type=="cabinet"){
                                y=y-(width*2+left+(left/2))-(left/2);
                            }else{
                                y=y-width-((width+left)/2)-left;
                            }
                        }else{
                            if(json[i-1].type=="cabinet"){
                            y=y-width-((width+left)/2)-left;
                           }else{
                            y=y-width-left;
                           }
                        }
                      }
                   var geometry=new THREE.BoxGeometry(
                    xxxx ,
                    1.66,
                    1); 
                var materail=new THREE.MeshBasicMaterial(_this.mapData.materials[_this.mapData.materials.length-1]);
                var mesh=new THREE.Mesh(geometry,materail);
                var mirrorMatrix = new THREE.Matrix4().fromArray([1,0,0,0,0,1,0,0,0,0,1,0,y,0,j==0?z-(z*2):z,1]);
                mesh.material.type="MeshBasicMaterial";
                mesh.material.color.set(0xfffffff);
            // mesh.material.side=1;
                mesh.material.map=this.textures[json[i].type];
                mesh.material.transparent=true;
                mesh.applyMatrix(mirrorMatrix);
                tgroup.children.push(mesh);
                _this.data.push(mesh.uuid);
                var xxxcc=geometry.clone();
               var mesh2=new THREE.Mesh(xxxcc,materail.clone());//创建新的网格对象
               mesh2.applyMatrix(mirrorMatrix);
               mesh2.position.z=j==0?z1-(z1*2):z1;//移动克隆的网格对象
                _this.scene.add(mesh);
                 _this.scene.add(mesh2);
            }
    }
    
        this.group=tgroup;

        // let _this=this;
        // var textureLoader=new THREE.TextureLoader();
        // textureLoader.load("/three/1a.png",function(texture){
        //     console.log(texture)
        //     var geometry=new THREE.PlaneBufferGeometry(6,6);
        //     var materail=new THREE.MeshBasicMaterial({
        //         map:"",
        //         color:"#000000",
        //         transparent: true,
        //         opacity: 1,
        //         "depthFunc": 3,
        //         "depthTest": true,
        //         "depthWrite": true,
        //         "stencilWrite": false,
        //         side: THREE.DoubleSide
        //     });
        //     var mesh=new THREE.Mesh(geometry,materail);
        //     _this.scene.add(mesh);

        // });
       


    }
    
    //绘制网格
    getAreaMesh(points) {
        // console.log('---' + points);
        const shape = new THREE.Shape(); //实例一个形状

        //const [x0, y0] = points[0];
        points.forEach((p, i) => {
                //console.log(p);
                const [x, y] = p;
                if (i === 0) {
                    shape.moveTo(x, y);
                } else if (i === points.length - 1) {
                    shape.quadraticCurveTo(x, y, x, y) //二次曲线
                } else {
                    shape.lineTo(x, y, x, y);
                }
            })
            //几何体
        const geometry = new THREE.ExtrudeGeometry(
            shape, { depth: 10, bevelEnabled: false } //启用斜角
        );
        //材质
        const material = new THREE.MeshBasicMaterial({
            color: '#007cff',
            transparent: true,
            opacity: 0.5,
        });

        //合并成一个网格模型

        const mesh = new THREE.Mesh(geometry, material)
        console.log(mesh)
        return mesh;
    }

    //经纬度转三维坐标
    lnglatToVector(lnglat) {
        if (!this.projection) {
            this.projection = d3
                .geoMercator() //获取墨卡托坐标方法
                .center([112.946332, 28.236672])
                .scale(400)
                //.rotate(Math.PI / 4)
                .translate([0, 0]);
        }
        //const projection = d3.geoMercator().center([108.904496, 32.668849]).scale(80);
        const [y, x] = this.projection([...lnglat]);
        let z = 0;
        return [y, x, z];
    }
    change(uuid,flag){
        console.log(this.group)
        console.log(uuid)

        for(let i=0;i<this.group.children.length;i++){
            console.log(this.group.children[i].uuid)
            if(uuid==this.group.children[i].uuid){
                console.log(11111111111111)
                if(flag){
                    this.group.children[i].material.color.set("#ff0000");
                }else{
                    this.group.children[i].material.color.set("#333333");
                }
                
            }
        }
    }
    updatedata(uuid,flag){
        console.log(this.group)
        console.log(uuid)

        for(let i=0;i<this.group.children.length;i++){
            console.log(this.group.children[i].uuid)
            if(uuid==this.group.children[i].uuid){
                this.group.children[i].material.color.set("#ff0000");
                this.group.children[i].position.y=0;
                this.group.children[i].scale.set(1,0.5,1);
               var y= this.group.children[i].position.y;
               this.group.children[i].position.y=y-1.66*(1-0.5)/2;
                
            }
        }
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
        const intersects = this.raycaster.intersectObjects(this.group.children);
        console.log(intersects)
        // if(intersects.length>0){
        //     intersects[0].object.position.y=0;
        //     intersects[0].object.scale.set(1 ,0.4, 1);
        //     let y=intersects[0].object.position.y;
        //     intersects[0].object.position.y = y-1.66*(1-0.4)/2;
        //     //intersects[0].object.material.color.set(0x66ff00,1);
        //     // intersects[0].object.material.color.set("#ff0000");
        // }
         
        if(intersects.length>0){
            for(var i=0;i<this.group.children.length;i++) {
               if(intersects[0].object.uuid==this.group.children[i].uuid){
                   intersects[0].object.material.color.set(0x66ff00,1);
                   //intersects[0].object.visible=false;
                   intersects[0].object.geometry.parameters.height=1;
                  // this.render();
                 console.log(intersects[0].object.geometry.parameters.height);
                //  intersects[0].object.position.y=0;
                //  intersects[0].object.scale.set(1,0.5,1);
                // var y= intersects[0].object.position.y;
                // intersects[0].object.position.y=y-1.66*(1-0.5)/2;
               
           
                   continue;
               }
               console.log( this.group.children[i].uuid);
               this.group.children[i].material.color.set(0xfffffff);
            }
           }
        // this.group.children.forEach(mesh => {
        //     // mesh.material.color.set('#005fc3');
        //     // mesh.material.color.set('#005fc3');
        // })
        // for (var i = 0; i < intersects.length; i++) {
        //     console.log(intersects[i])
        //     intersects[i].object.material.color.set(0xff0000);
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
        console.log(intersects)
    }
}