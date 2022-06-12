var cam = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 100);
cam.position.z = 50;
cam.position.y = 4;

var renderer = new THREE.WebGL1Renderer({
    powerPreference: "high-performance",
    antialias: true, // Should be true
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true; // Should be true
renderer.shadowMapSoft = true; // should be true
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
document.body.appendChild(renderer.domElement);

var scene = new THREE.Scene();
// fog
fogColor = new THREE.Color(0x000000);
scene.background = fogColor;
scene.fog = new THREE.FogExp2(fogColor, 0.02, 40);
// scene.background = new THREE.Color(0xa2967e);

// var controls = new THREE.OrbitControls(cam, renderer.domElement);

// Make use of the `TextureLoader` object to handle asynchronus loading and
// assignment of the texture to your material    
// var material = new THREE.MeshBasicMaterial();
// var loader = new THREE.TextureLoader();
// loader.load("./src/texture1.jpg", function (texture) {
//     // The texture has loaded, so assign it to your material object. In the 
//     // next render cycle, this material update will be shown on the plane 
//     // geometry
//     material.map = texture;
//     material.needsUpdate = true;
// });
// var geometry = new THREE.PlaneGeometry(window.innerWidth, window.innerHeight, 32);
// var mesh = new THREE.Mesh(geometry, material);
// scene.add(mesh);

// var loader = new THREE.TextureLoader();
// var texture = loader.load( 'myTexture.jpg', function ( texture ) {
//     texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
//     texture.offset.set( 0, 0 );
//     texture.repeat.set( 2, 2 );
// } );
// var material = new THREE.MeshPhongMaterial( {
//    color: 0xffffff,
//    specular:0x111111,
//    shininess: 10,
//    map: texture,
// } );

var textureLoader = new THREE.TextureLoader();
const tilesBaseColor = textureLoader.load("./dump/textures/Dirt_006_SD/Dirt_006_Base Color.jpg", (texture) => {
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    // texture.offset.set(0, 0);
    texture.repeat.set(20, 20);
});
const tilesAmbientMap = textureLoader.load("./dump/textures/Dirt_006_SD/Dirt_006_Ambient Occlusion.jpg", (texture) => {
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    // texture.offset.set(0, 0);
    texture.repeat.set(20, 20);
});
const tilesHeightMap = textureLoader.load("./dump/textures/Dirt_006_SD/Dirt_006_Height.png", (texture) => {
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    // texture.offset.set(0, 0);
    texture.repeat.set(20, 20);
});
const tilesNormalMap = textureLoader.load("./dump/textures/Dirt_006_SD/Dirt_006_Normal.jpg", (texture) => {
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    // texture.offset.set(0, 0);
    texture.repeat.set(20, 20);
});
const tilesRoughnessMap = textureLoader.load("./dump/textures/Dirt_006_SD/Dirt_006_Roughness.jpg", (texture) => {
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    // texture.offset.set(0, 0);
    texture.repeat.set(20, 20);
});

var plane = new THREE.PlaneGeometry(50, 100, 25, 25);
var planeMaterial = new THREE.MeshStandardMaterial({
    color: 0x957b56,
    map: tilesBaseColor,
    normalMap: tilesNormalMap,
    displacementMap: tilesHeightMap,
    displacementScale: 0.2,
    roughnessMap: tilesRoughnessMap,
    roughness: 1,
    aoMap: tilesAmbientMap,
});

// loader.load("./src/texture2.jpg", function (texture) {
//     // The texture has loaded, so assign it to your material object. In the 
//     // next render cycle, this material update will be shown on the plane 
//     // geometry
//     planeMaterial.map = texture;
//     planeMaterial.needsUpdate = true;
//     texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
//     texture.offset.set(0, 0);
//     texture.repeat.set(10, 10);
// });
var planeMesh = new THREE.Mesh(plane, planeMaterial);
planeMesh.receiveShadow = true;
planeMesh.position.set(0, 0, 0);
planeMesh.rotation.x -= Math.PI / 2;
scene.add(planeMesh);

var ambient = new THREE.AmbientLight(0x404040);
scene.add(ambient);

let lampu1 = new THREE.PointLight(0xdbdaaa, 1, 40);
lampu1.position.set(-3, 3, 40);
lampu1.castShadow = true;
lampu1.shadow.radius = 8;
scene.add(lampu1);
scene.add(new THREE.PointLightHelper(lampu1, 0.1, 0xff00ff));

let lampu2 = new THREE.PointLight(0xdbdaaa, 1, 40);
lampu2.position.set(4, 3, 40);
lampu2.castShadow = true;
lampu2.shadow.radius = 8;
scene.add(lampu2);
scene.add(new THREE.PointLightHelper(lampu2, 0.1, 0xff00ff));

let lampu3 = new THREE.PointLight(0xdbdaaa, 1, 40);
lampu3.position.set(-8, 3, 25);
lampu3.castShadow = true;
lampu3.shadow.radius = 8;
scene.add(lampu3);
scene.add(new THREE.PointLightHelper(lampu3, 0.1, 0xff00ff));

let lampu4 = new THREE.PointLight(0xdbdaaa, 1, 40);
lampu4.position.set(9, 3, 25);
lampu4.castShadow = true;
lampu4.shadow.radius = 8;
scene.add(lampu4);
scene.add(new THREE.PointLightHelper(lampu4, 0.1, 0xff00ff));

let lampu5 = new THREE.PointLight(0xdbdaaa, 1, 40);
lampu5.position.set(-17, 3, 15);
lampu5.castShadow = true;
lampu5.shadow.radius = 8;
scene.add(lampu5);
scene.add(new THREE.PointLightHelper(lampu5, 0.1, 0xff00ff));

let lampu6 = new THREE.PointLight(0xdbdaaa, 1, 40);
lampu6.position.set(18, 3, 15);
lampu6.castShadow = true;
lampu6.shadow.radius = 8;
scene.add(lampu6);
scene.add(new THREE.PointLightHelper(lampu6, 0.1, 0xff00ff));

let lampu7 = new THREE.PointLight(0xdbdaaa, 1, 40);
lampu7.position.set(-17, 3, 3);
lampu7.castShadow = true;
lampu7.shadow.radius = 8;
scene.add(lampu7);
scene.add(new THREE.PointLightHelper(lampu7, 0.1, 0xff00ff));

let lampu8 = new THREE.PointLight(0xdbdaaa, 1, 40);
lampu8.position.set(18, 3, 3);
lampu8.castShadow = true;
lampu8.shadow.radius = 8;
scene.add(lampu8);
scene.add(new THREE.PointLightHelper(lampu8, 0.1, 0xff00ff));

let lampu9 = new THREE.PointLight(0xdbdaaa, 1, 40);
lampu9.position.set(-22, 3, 5);
lampu9.castShadow = true;
lampu9.shadow.radius = 8;
scene.add(lampu9);
scene.add(new THREE.PointLightHelper(lampu9, 0.1, 0xff00ff));

let lampu10 = new THREE.PointLight(0xdbdaaa, 1, 40);
lampu10.position.set(23, 3, 5);
lampu10.castShadow = true;
lampu10.shadow.radius = 8;
scene.add(lampu10);
scene.add(new THREE.PointLightHelper(lampu10, 0.1, 0xff00ff));

let lampu11 = new THREE.PointLight(0xdbdaaa, 1, 40);
lampu11.position.set(-13, 3, 0);
// lampu11.castShadow = true;
lampu11.shadow.radius = 8;
scene.add(lampu11);
scene.add(new THREE.PointLightHelper(lampu11, 0.1, 0xff00ff));

// let pLigh1 = new THREE.PointLight(0xffffff, 1, 40);
// pLigh1.position.set(-5, 5, -13);
// pLigh1.castShadow = true;
// pLigh1.shadow.radius = 8;
// scene.add(pLigh1);
// scene.add(new THREE.PointLightHelper(pLigh1, 0.1, 0xff00ff));

// let pLigh2 = new THREE.PointLight(0xff0000, 1, 40);
// pLigh2.position.set(0, 5, -7);
// pLigh2.castShadow = true;
// pLigh2.shadow.radius = 8;
// scene.add(pLigh2);
// scene.add(new THREE.PointLightHelper(pLigh2, 0.1, 0xff00ff));
// f18430
// var directionalLight1 = new THREE.DirectionalLight(0x000000)a

var directionalLight2 = new THREE.DirectionalLight(0xf18430);
// var directionalLight2 = new THREE.DirectionalLight(0x000000);
directionalLight2.position.set(0, 40, 50);
directionalLight2.target.position.set(0, 0, 0);
directionalLight2.target.updateMatrixWorld();
directionalLight2.castShadow = true;
directionalLight2.shadowCameraVisible = true;
directionalLight2.shadowCameraNear = 0;
directionalLight2.shadowCameraFar = 15;
scene.add(directionalLight2);
scene.add(new THREE.DirectionalLightHelper(directionalLight2));

// adding resizing event listener
window.addEventListener("resize", () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    cam.aspect = window.innerWidth / window.innerHeight;
    cam.updateProjectionMatrix();
});

// First Person Controls
let fpsControls = new THREE.PointerLockControls(cam, renderer.domElement);

fpsControls.pointerSpeed = 0.5;

// event listener
let keyboard = [];

document.body.onkeydown = (evt) => {
    keyboard[evt.key] = true;
};

document.body.onkeyup = (evt) => {
    keyboard[evt.key] = false;
};

window.addEventListener("click", () => {
    fpsControls.lock();
});

let speed = 0.5;

function process_keyboard() {
    if (keyboard["a"]) {
        fpsControls.moveRight(-speed);
    }
    if (keyboard["d"]) {
        fpsControls.moveRight(speed);
    }
    if (keyboard["w"]) {
        fpsControls.moveForward(speed);
    }
    if (keyboard["s"]) {
        fpsControls.moveForward(-speed);
    }
}

// load gltf model
let loader1 = new THREE.GLTFLoader().load("./dump/models/shitennoji/scene.gltf", (result) => {
    result.scene.traverse((node) => {
        if (node.isMesh) {
            node.castShadow = true;
            node.receiveShadow = true;
        }
    });
    result.scene.position.set(0, -0.4, -18);
    result.scene.scale.set(0.0085, 0.0085, 0.0085);
    scene.add(result.scene);
});

let loader2 = new THREE.GLTFLoader().load("../dump/models/japanese_lowpoly_temple/scene.gltf", (result) => {
    result.scene.traverse((node) => {
        if (node.isMesh) {
            node.castShadow = true;
            node.receiveShadow = true;
        }
    });
    result.scene.position.set(0, 0, 10);
    result.scene.rotation.y = -Math.PI / 2 * -1;
    result.scene.scale.set(0.5, 0.5, 0.5);
    scene.add(result.scene);
});

let loader3 = new THREE.GLTFLoader();
const modelBee = new THREE.Object3D();
const modelBee1 = new THREE.Object3D();
const modelBee2 = new THREE.Object3D();
// loader3.load("./dump/models/japanese_wall/scene.gltf", processBee);

var wall = [];

function processBee(gltf) {
    const box = new THREE.Box3().setFromObject(gltf.scene);
    const c = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());
    gltf.scene.position.set(-c.x, size.y / 2 - c.y, -c.z); // center the gltf scene
    modelBee.add(gltf.scene);

    // for (let i = 0; i < 15; i++) {
    //     var model = new THREE.Object3D();
    //     wall.push(model.add(gltf.scene.clone()));
    // }
    modelBee1.add(gltf.scene.clone());
    modelBee2.add(gltf.scene.clone());
}

// modelBee.scale.set(0.0225, 0.0225, 0.0225); // because gltf.scene is very big
// modelBee.position.set(24.4, 0, 20);
// modelBee.rotation.y = Math.PI / 2;
// scene.add(modelBee);

// var tambah = 20;
// for (let i = 0; i < 15; i++) {
//     wall[i].scale.set(0.0225, 0.0225, 0.0225); // because gltf.scene is very big
//     tambah += 4.765;
//     wall[i].position.set(24.4, 0, tambah);
//     wall[i].rotation.y = Math.PI / 2;
//     scene.add(wall[i]);
// }

modelBee.scale.set(0.0225, 0.0225, 0.0225); // because gltf.scene is very big
modelBee.position.set(24.4, 0, 20);
modelBee.rotation.y = Math.PI / 2;
// scene.add(modelBee);

modelBee1.scale.set(0.0225, 0.0225, 0.0225); // because gltf.scene is very big
modelBee1.position.set(24.4, 0, 24.765);
modelBee1.rotation.y = Math.PI / 2 * 3; // radiant
// scene.add(modelBee1);

modelBee2.scale.set(0.0225, 0.0225, 0.0225); // because gltf.scene is very big
modelBee2.position.set(24.4, 0, 29.53);
modelBee2.rotation.y = Math.PI / 2; // radiant
// scene.add(modelBee2);

let loader4 = new THREE.GLTFLoader();
const wall1 = new THREE.Object3D();
const wall2 = new THREE.Object3D();
const wall3 = new THREE.Object3D();
loader4.load("../dump/models/modular_concrete_fence/scene3.gltf", processWall);

function processWall(gltf) {
    const box = new THREE.Box3().setFromObject(gltf.scene);
    const c = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());
    gltf.scene.position.set(-c.x, size.y / 2 - c.y, -c.z); // center the gltf scene
    wall1.add(gltf.scene);
    wall2.add(gltf.scene.clone());
    wall3.add(gltf.scene.clone());
}

let length1 = 4.3;
let length2 = 8.4615;
let length3 = length2 + (length2 - length1);

wall1.scale.set(0.02, 0.02, 0.02); // because gltf.scene is very big
wall1.position.set(4.3, 0, 24.7);
wall1.rotation.y = -Math.PI / 2;
scene.add(wall1);

wall2.scale.set(0.02, 0.02, 0.02); // because gltf.scene is very big
wall2.position.set(8.4615, 0, 24.7);
wall2.rotation.y = -Math.PI / 2; // radiant
scene.add(wall2);

wall3.scale.set(0.02, 0.02, 0.02); // because gltf.scene is very big
wall3.position.set(length3, 0, 24.7);
wall3.rotation.y = -Math.PI / 2; // radiant
scene.add(wall3);

// modelBee.scale.set(0.002, 0.002, 0.002); // because gltf.scene is very big
// modelBee.position.set(2.4, 0.2, 0.5);
// modelBee.rotation.y = Math.PI;
// scene.add(modelBee);

// modelBee1.scale.set(0.0025, 0.0025, 0.0025); // because gltf.scene is very big
// modelBee1.position.set(-2.4, 0.9, 1.8);
// modelBee1.rotation.x = 0.8; // radiant
// modelBee1.rotation.y = 1.2; // radiant
// scene.add(modelBee1);

// let loader3 = new THREE.GLTFLoader().load("./models/japanese_wall/scene.gltf", (result) => {
//     result.scene.traverse((node) => {
//         if (node.isMesh) {
//             node.castShadow = true;
//             node.receiveShadow = true;
//         }
//     });
//     result.scene.position.set(24.4, 0, 20);
//     result.scene.rotation.y = -Math.PI / 2;
//     result.scene.scale.set(0.025, 0.025, 0.025);
//     // scene.add(result.scene);

//     var source = result.scene;
//     var copy = THREE.SkeletonUtils.clone(source);
//     scene.add(source);
//     scene.add(copy);
// });

// let loader3 = new THREE.GLTFLoader();
// loader3.load("./models/japanese_wall/scene.gltf", function (gltf) {
//     let copy = gltf.clone();

//     // gltf.scene.position.z = 7;
//     // copy.scene.position.z = 1;
//     // copy.scene.position.x = 2;

//     gltf.scene.rotation.y = -Math.PI / 2;
//     copy.scene.rotation.y = -Math.PI / 2;

//     gltf.scene.scale.set(0.025, 0.025, 0.025);
//     copy.scene.scale.set(0.025, 0.025, 0.025);

//     gltf.scene.position.set(24.4, 0, 20);
//     copy.scene.position.set(24.4, 0, 40);

//     scene.add(gltf.scene);
//     scene.add(copy.scene);
// });

// var loader = new THREE.JSONLoader();
// loader.load("models/treehouse_logo.js", function (geometry) {
//     var material, mesh, i, j, instance;
//     material = new THREE.MeshLambertMaterial({
//         color: 0x55B663
//     });
//     mesh = new THREE.Mesh(geometry, material);
//     for (i = 0; i < 15; i += 3) {
//         for (j = 0; j < 15; j += 3) {
//             instance = mesh.clone();
//             instance.position.set(i, 0, j);
//             group.add(instance);
//         }
//     }
// });

// var loader = new THREE.GLTFLoader();
// for (let i = 0; i < resourceData.length; i++) {
//     let oResource = resourceData[i];
//     let sModelName = "resources/" + oResource.model3D + ".gltf";
//     loader.load(sModeName, function (gltf) {
//         // the same code as in your original post
//     }, undefined, function (error) {
//         console.error(error);
//     })
// }

// let loader4 = new THREE.GLTFLoader().load("model/model_4/building_3_ramen_restaurant/scene.gltf", (result) => {
//     result.scene.traverse( function( node ) {

//         if ( node.isMesh ) { 
//             node.castShadow = true; 
//             node.receiveShadow = true; 
//         }

//     } );
//     result.scene.scale.set(0.025, 0.025, 0.025);
//     result.scene.position.set(5, -0.1, -20);
//     // result.scene.rotation.y = -Math.PI / 2;
//     scene.add( result.scene );
// });

// let loader5 = new THREE.GLTFLoader().load("model/model_5/japan_house_restaurant_by_night/scene.gltf", (result) => {
//     result.scene.traverse( function( node ) {

//         if ( node.isMesh ) { 
//             node.castShadow = true; 
//             node.receiveShadow = true; 
//         }

//     } );
//     result.scene.scale.set(0.013, 0.013, 0.013);
//     result.scene.position.set(13, -0.1, -17);
//     // result.scene.rotation.y = -Math.PI / 2;
//     scene.add( result.scene );
// });

// let loader6 = new THREE.GLTFLoader().load("model/model_6/quick_texture_building/scene.gltf", (result) => {
//     result.scene.traverse( function( node ) {

//         if ( node.isMesh ) { 
//             node.castShadow = true; 
//             node.receiveShadow = true; 
//         }

//     } );
//     result.scene.position.set(-15, -0.1, -17);
//     // result.scene.rotation.y = -Math.PI / 2;
//     scene.add( result.scene );
// });

// let loader7 = new THREE.GLTFLoader().load("model/model_7/ramen_shop/scene.gltf", (result) => {
//     result.scene.traverse( function( node ) {

//         if ( node.isMesh ) { 
//             node.castShadow = true; 
//             node.receiveShadow = true; 
//         }

//     } );
//     result.scene.position.set(-5, 0, -17);
//     // result.scene.rotation.y = -Math.PI / 2;
//     scene.add( result.scene );
// });

// let loader8 = new THREE.GLTFLoader().load("model/model_8/ramen-yatai/scene.gltf", (result) => {
//     result.scene.traverse( function( node ) {

//         if ( node.isMesh ) { 
//             node.castShadow = true; 
//             node.receiveShadow = true; 
//         }

//     } );
//     result.scene.scale.set(0.5, 0.5, 0.5);
//     result.scene.position.set(-5, 0, 15);
//     result.scene.rotation.y = Math.PI / 2;
//     scene.add( result.scene );
// });

// let loader9 = new THREE.GLTFLoader().load("model/model_9/simple_textures/scene.gltf", (result) => {
//     result.scene.traverse( function( node ) {

//         if ( node.isMesh ) { 
//             node.castShadow = true; 
//             node.receiveShadow = true; 
//         }

//     } );
//     result.scene.position.set(-20, -0.4, -10);
//     // result.scene.rotation.y = Math.PI / 2;
//     scene.add( result.scene );
// });

// let loader10 = new THREE.GLTFLoader().load("model/model_10/japanese_residential_home_02/scene.gltf", (result) => {
//     result.scene.traverse( function( node ) {

//         if ( node.isMesh ) { 
//             node.castShadow = true; 
//             node.receiveShadow = true; 
//         }

//     } );
//     result.scene.scale.set(0.01, 0.01, 0.01);
//     result.scene.position.set(-22, -0.4, -4.5);
//     // result.scene.rotation.y = Math.PI / 2;
//     scene.add( result.scene );
// });

// let loader11 = new THREE.GLTFLoader().load("model/model_11/japan_book_store_low_poly/scene.gltf", (result) => {
//     result.scene.traverse( function( node ) {

//         if ( node.isMesh ) { 
//             node.castShadow = true; 
//             node.receiveShadow = true; 
//         }

//     } );
//     result.scene.scale.set(4, 4, 4);
//     result.scene.position.set(-20, -0.4, 5);
//     result.scene.rotation.y = Math.PI / 2;
//     scene.add( result.scene );
// });

// let loader12 = new THREE.GLTFLoader().load("model/model_12/ichiraku_ramen/scene.gltf", (result) => {
//     result.scene.traverse( function( node ) {

//         if ( node.isMesh ) { 
//             node.castShadow = true; 
//             node.receiveShadow = true; 
//         }

//     } );
//     result.scene.scale.set(1.5, 1.5, 1.5);
//     result.scene.position.set(-20, -0.4, 15);
//     result.scene.rotation.y = Math.PI / 2;
//     scene.add( result.scene );
// });

// let loader13 = new THREE.GLTFLoader().load("model/model_13/cornet_hut/scene.gltf", (result) => {
//     result.scene.traverse( function( node ) {

//         if ( node.isMesh ) { 
//             node.castShadow = true; 
//             node.receiveShadow = true; 
//         }

//     } );
//     result.scene.scale.set(1.5, 1.5, 1.5);
//     result.scene.position.set(15, 3, 15);
//     result.scene.rotation.y = Math.PI / 2;
//     scene.add( result.scene );
// });

// let loader14 = new THREE.GLTFLoader().load("model/model_14/building_1_flower_shop/scene.gltf", (result) => {
//     result.scene.traverse( function( node ) {

//         if ( node.isMesh ) { 
//             node.castShadow = true; 
//             node.receiveShadow = true; 
//         }

//     } );
//     result.scene.scale.set(0.065, 0.065, 0.065);
//     result.scene.position.set(15, -0.1, 5);
//     result.scene.rotation.y = -Math.PI/2;
//     scene.add( result.scene );
// });

// let loader15 = new THREE.GLTFLoader().load("model/model_15/lesson_8/scene.gltf", (result) => {
//     result.scene.traverse( function( node ) {

//         if ( node.isMesh ) { 
//             node.castShadow = true; 
//             node.receiveShadow = true; 
//         }

//     } );
//     result.scene.scale.set(0.008, 0.008, 0.008);
//     result.scene.position.set(5, 1.5, 5);
//     result.scene.rotation.y = -Math.PI/2;
//     scene.add( result.scene );
// });

// let loader16 = new THREE.GLTFLoader().load("model/model_17/sushi__ramen_booth/scene.gltf", (result) => {
//     result.scene.traverse( function( node ) {

//         if ( node.isMesh ) { 
//             node.castShadow = true; 
//             node.receiveShadow = true; 
//         }

//     } );
//     result.scene.scale.set(0.5, 0.5, 0.5);
//     result.scene.position.set(-15, -0.7, 25);
//     result.scene.rotation.y = -Math.PI/2;
//     scene.add( result.scene );
// });

function animate() {
    process_keyboard();
    requestAnimationFrame(animate);
    renderer.render(scene, cam);
}

animate();