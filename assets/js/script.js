//dbRecord

// let backArea = createArea({x: 0.142, y: 0.04, z: 0.1}, {x: 0.12999999999999998, y: -0.030000000000000006, z: 0.060000000000000005});

const records = {
  objects: [
    {
      modelName: '1031-0011-A02--ASSY_LM-10G-PxC-20191025.glb',
      image: 'FL SWITCH EP7400 M4TGSFP 1.png',
      title: 'FL SWITCH EP7400-M4TGSFP',
      text: 'Текст',
      articule: '1144388',
      dataUrl: '',
      id: 2,
      materialName: 'optica_materials.mtl',
      errorRate: { x: 29, y: -34, z: 50 },
      connector_type: 3,
      connectors: [     //шаг отступа портов 15
        {
          id: 1,
          name: 'back_left_top',
          scale: { x: 15, y: 12, z: 20 },
          errorRate: { x: 0, y: 0, z: 0 },
          errorRatePort: { x: -67, y: 34, z: -10 },
          connector_type: 4
        },
        {
          id: 2,
          name: 'back_left_bot',
          scale: { x: 15, y: 12, z: 20 },
          errorRate: { x: 0, y: 0, z: 0 },
          errorRatePort: { x: -39, y: 34, z: -10 },
          connector_type: 4
        },
        {
          id: 3,
          name: 'back_left_bot',
          scale: { x: 15, y: 12, z: 20 },
          errorRate: { x: 0, y: 0, z: 0 },
          errorRatePort: { x: -10, y: 34, z: -10 },
          connector_type: 4
        },
        {
          id: 4,
          name: 'back_left_bot',
          scale: { x: 15, y: 12, z: 20 },
          errorRate: { x: 0, y: 0, z: 0 },
          errorRatePort: { x: 17, y: 34, z: -10 },
          connector_type: 4
        }
      ],
    },
    {
      id: 1,
      modelName: 'model_test.glb',
      materialName: 'materials.mtl',
      image: "EP7400-Chassis_Back_2.png",
      title: 'Шасси',
      position: { x: 0, y: 50, z: 0 },
      articule: 'Артикул 2',
      dataUrl: '',
      text: 'Текст',

      connectors: [
        {
          id: 1,
          name: 'back_left_top',
          scale: { x: 140, y: 20, z: 100 },
          position: { x: 5, y: 10, z: 130 },
          errorRate: { x: 0, y: 0, z: 0 },
          errorRatePort: { x: 5, y: 10, z: 140 },
          connector_type: 1,
          connectorLevel: 1,
          modelName: 'Заглушка EP 7400.glb',
          materialName: 'materials.mtl'
        },
        {
          id: 2,
          name: 'back_left_bot',
          scale: { x: 140, y: 20, z: 100 },
          errorRate: { x: 0, y: 0, z: 0 },
          errorRatePort: { x: 4, y: -10, z: 140 },
          connector_type: 1,
          connectorLevel: 1,
          modelName: 'Заглушка EP 7400.glb',
          materialName: 'materials.mtl'
        },
        {
          id: 3,
          name: 'back_right_top',
          scale: { x: 140, y: 20, z: 100 },
          errorRate: { x: -8, y: 0, z: 0 },
          errorRatePort: { x: 150, y: 10, z: 140 },
          connector_type: 3,
          connectorLevel: 1,
          modelName: 'Заглушка EP 7400.glb',
          materialName: 'materials.mtl'
        },
        {
          id: 4,
          name: 'back_right_bot',
          scale: { x: 140, y: 20, z: 100 },
          position: { x: 150, y: -10, z: 130 },
          errorRate: { x: -8, y: 0, z: 0 },
          errorRatePort: { x: 150, y: -10, z: 140 },
          connector_type: 1,
          connectorLevel: 1,
          modelName: 'Заглушка EP 7400.glb',
          materialName: 'materials.mtl'
        },
        {
          id: 5,
          name: 'front_left',
          scale: { x: 90, y: 40, z: 100 },
          position: { x: -75, y: 0, z: -150 },
          errorRatePort: { x: -78, y: -2, z: -120 },
          errorRate: { x: -10, y: -15, z: -140 },
          connector_type: 2,
        },
        // {
        //   name: 'back_right_bot',
        //   scale: {x: 0.095, y: 0.021, z: 0.001},
        //   position: {x: -0.074, y:-0.01, z: -0.155000000000000005}
        // },
        // {
        //   name: 'back_right_bot',
        //   scale: {x: 0.095, y: 0.021, z: 0.001},
        //   position: {x: -0.169, y:-0.01, z: -0.155000000000000005}
        // },
        {
          id: 6,
          name: 'front_right',
          scale: { x: 90, y: 40, z: 100 },
          position: { x: -170, y: 0, z: -150 },
          errorRate: { x: -10, y: -15, z: -140 },
          errorRatePort: { x: -170, y: -2, z: -120 },
          connector_type: 2
        }
      ]
    },
    {
      modelName: '1031-0010-A03-ASSY_LM-8SFP-PxC-20191025.glb',
      materialName: 'optica_materials.mtl',
      image: 'FL SWITCH EP7400 M8GRJ45 1 .png',
      title: 'FL SWITCH EP7400 M8GRJ45',
      text: 'Подробный текст',
      articule: '1144375',
      dataUrl: '',
      id: 3,
      position: { x: 0, y: 0, z: 0 },
      errorRate: { x: 90, y: 8, z: 55 },
      connectors: [     //шаг отступа портов 14.5
        {
          id: 1,
          name: 'back_left_top',
          scale: { x: 14, y: 10, z: 20 },
          errorRate: { x: 0, y: 0, z: 0 },
          errorRatePort: { x: -137, y: -8, z: -15 },
          connector_type: 4,


        },
        {
          id: 2,
          name: 'back_left_bot',
          scale: { x: 14, y: 10, z: 20 },
          errorRate: { x: 0, y: 0, z: 0 },
          errorRatePort: { x: -122.5, y: -8, z: -15 },
          connector_type: 4,

        },
        {
          id: 3,
          name: 'back_left_bot',
          scale: { x: 14, y: 10, z: 20 },
          errorRate: { x: 0, y: 0, z: 0 },
          errorRatePort: { x: -108.5, y: -8, z: -15 },
          connector_type: 4,

        },
        {
          id: 4,
          name: 'back_left_bot',
          scale: { x: 14, y: 10, z: 20 },
          errorRate: { x: 0, y: 0, z: 0 },
          errorRatePort: { x: -94, y: -8, z: -15 },
          connector_type: 4,

        },
        {
          id: 5,
          name: 'back_left_bot',
          scale: { x: 14, y: 10, z: 20 },
          errorRate: { x: 0, y: 0, z: 0 },
          errorRatePort: { x: -78, y: -8, z: -15 },
          connector_type: 4,

        },
        {
          id: 6,
          name: 'back_left_bot',
          scale: { x: 14, y: 10, z: 20 },
          errorRate: { x: 0, y: 0, z: 0 },
          errorRatePort: { x: -64, y: -8, z: -15 },
          connector_type: 4,

        },
        {
          id: 7,
          name: 'back_left_bot',
          scale: { x: 14, y: 10, z: 20 },
          errorRate: { x: 0, y: 0, z: 0 },
          errorRatePort: { x: -49.5, y: -8, z: -15 },
          connector_type: 4,
          // connectorLevel = 2,
        },
        {
          id: 8,
          name: 'back_left_bot',
          scale: { x: 14, y: 10, z: 20 },
          errorRate: { x: 0, y: 0, z: 0 },
          errorRatePort: { x: -35, y: -8, z: -15 },
          connector_type: 4,
          // connectorLevel = 2,
        },

      ],
      connector_type: 1,
    },
    {
      modelName: '1031-0017-A02--iRM-L3-LM-8RJ45-ASSY-iMX-PxC-20191025.glb',
      materialName: 'optica_materials.mtl',
      image: 'FL SWITCH EP7400 M8GSFP 2.png',
      title: 'FL SWITCH EP7400-M8GSFP',
      text: 'Подробный текст',
      articule: '1144383',
      dataUrl: '',
      id: 4,
      position: { x: 0, y: 0, z: 0 },
      errorRate: { x: 78, y: -10, z: 60 },
      connectors: [     //шаг отступа портов 15
        {
          id: 1,
          name: 'back_left_top',
          scale: { x: 10, y: 10, z: 20 },
          errorRate: { x: 0, y: 0, z: 0 },
          errorRatePort: { x: -122, y: 10, z: -15 },
          connector_type: 4,


        },
        {
          id: 2,
          name: 'back_left_bot',
          scale: { x: 10, y: 10, z: 20 },
          errorRate: { x: 0, y: 0, z: 0 },
          errorRatePort: { x: -108, y: 10, z: -15 },
          connector_type: 4,

        },
        {
          id: 3,
          name: 'back_left_bot',
          scale: { x: 10, y: 10, z: 20 },
          errorRate: { x: 0, y: 0, z: 0 },
          errorRatePort: { x: -95, y: 10, z: -15 },
          connector_type: 4,

        },
        {
          id: 4,
          name: 'back_left_bot',
          scale: { x: 10, y: 10, z: 20 },
          errorRate: { x: 0, y: 0, z: 0 },
          errorRatePort: { x: -80, y: 10, z: -15 },
          connector_type: 4,

        },
        {
          id: 5,
          name: 'back_left_bot',
          scale: { x: 10, y: 10, z: 20 },
          errorRate: { x: 0, y: 0, z: 0 },
          errorRatePort: { x: -65, y: 10, z: -15 },
          connector_type: 4,

        },
        {
          id: 6,
          name: 'back_left_bot',
          scale: { x: 10, y: 10, z: 20 },
          errorRate: { x: 0, y: 0, z: 0 },
          errorRatePort: { x: -50, y: 10, z: -15 },
          connector_type: 4,

        },
        {
          id: 7,
          name: 'back_left_bot',
          scale: { x: 10, y: 10, z: 20 },
          errorRate: { x: 0, y: 0, z: 0 },
          errorRatePort: { x: -35, y: 10, z: -15 },
          connector_type: 4,
          // connectorLevel = 2,
        },
        {
          id: 8,
          name: 'back_left_bot',
          scale: { x: 10, y: 10, z: 20 },
          errorRate: { x: 0, y: 0, z: 0 },
          errorRatePort: { x: -20, y: 10, z: -15 },
          connector_type: 4,
          // connectorLevel = 2,
        },

      ],
      connector_type: 1,
    },
    {
      modelName: '1031-0002-A01-iMX350_PS_MV_LV-ASSY--PxC-20191025.glb',
      materialName: 'materials.mtl',
      image: '1144367_1031-0002-A01-iMX350_PS_MV_LV-ASSY_1.png',
      title: 'FL SWITCH EP7400-PS-HV',
      articule: '1144175',
      dataUrl: '',
      text: 'Подробный текст',
      errorRate: { x: 0, y: 0, z: 0 },
      position: { x: 0, y: 0, z: 0 },
      id: 5,
      connector_type: 2,
    },
    {
      modelName: '1031-0002-A01-iMX350_PS_MV_LV-ASSY--PxC-20191025.glb',
      materialName: 'materials.mtl',
      image: '1144367_1031-0002-A01-iMX350_PS_MV_LV-ASSY_1.png',
      title: 'FL SWITCH EP7400-PS-LV',
      articule: '1144367',
      dataUrl: '',
      text: 'Подробный текст',
      errorRate: { x: 0, y: 0, z: 0 },
      position: { x: 0, y: 0, z: 0 },
      id: 6,
      connector_type: 2,
    },
    {
      modelName: '1031-0002-A01-iMX350_PS_MV_LV-ASSY--PxC-20191025.glb',
      materialName: 'materials.mtl',
      image: '1144367_1031-0002-A01-iMX350_PS_MV_LV-ASSY_1.png',
      title: 'FL SWITCH EP7400-PS-MV',
      articule: '1144372',
      dataUrl: '',
      text: 'Подробный текст',
      errorRate: { x: 0, y: 0, z: 0 },
      position: { x: 0, y: 0, z: 0 },
      id: 7,
      connector_type: 2,
    },
    {
      modelName: 'Оптический модуль.glb',
      materialName: 'materials.mtl',
      articule: 'Артикул 5',
      dataUrl: '',
      image: 'Оптичeский модуль.png',
      title: 'Оптический модуль',
      text: 'Подробный текст',
      errorRate: { x: 4, y: 6, z: -38 },

      id: 8,
      connector_type: 4,
    },
    {
      modelName: 'Медный модуль.glb',
      materialName: 'materials.mtl',
      articule: 'Артикул 5',
      dataUrl: '',
      image: 'Медный модуль.png',
      title: 'Медный модуль',
      text: 'Подробный текст',
      errorRate: { x: 1, y: 6, z: -45 },

      id: 9,
      connector_type: 4,
    },
    {
      modelName: 'Заглушка EP 7400.glb',
      materialName: 'materials.mtl',
      articule: 'Артикул 5',
      dataUrl: '',
      image: 'Заглушка.png',
      title: 'Заглушка',
      text: 'Подробный текст',
      errorRate: { x: 78, y: -10, z: 60 },
      id: 10,
    },
  ]
};

let mainObject;
let mainObjectData;
let mainObjectCenter;
let model_decriptions_info;
let replaceId;
let filledPorts = [];
let clearPorts = []
const scene = new THREE.Scene();
const canvas = document.querySelector('#canvas');
const camera = new THREE.PerspectiveCamera(100, canvas.width / canvas.height, 10, 1000);
let canvasPosition = canvas.getBoundingClientRect();
const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,

});
renderer.setClearColor(0xFFFFFF);
const fov = 50;
const aspect = 2;  // the canvas default
const near = 0.01;
const far = 10;
var controls = new THREE.OrbitControls(camera, renderer.domElement);

// call this only in static scenes (i.e., if there is no animation loop)
controls.update()
//onCLick stuff
renderer.domElement.addEventListener("mousedown", onclick, true);
renderer.domElement.addEventListener("mousemove", onMouseMove, true);

// renderer.domElement.addEventListener("contextmenu", contextmenu, false);
let currentConnector = { object: null };

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
let focusObject = null;
//Шаг добавления объекта
const coordStepZ = -0.01;
const coordStepY = 0.05;
const coordStepX = 0.05;
const coordTest = 0.01;

//Массив oбъектов
let objectPool = [];
let model_return = document.querySelector('.configurator_block');
const configurator_modal = document.querySelector('.configurator-modal');
let connectorPool = [];
let currentobject;
let configurator = [];
let configurator_list = [];
let configurator_table = document.querySelector('.configurator-table')
let positionGreenX = document.querySelector('.positionX');
// const camera = new THREE.PerspectiveCamera(fov, window.innerWidth / window.innerHeight, near, far);
camera.position.set(0, 0.05, 400);
const zeroPosition = new THREE.Vector3(0, 0, 0);
const configurator_button_list = document.querySelector("#btn-sania");
//onCLick stuff
let zang = records.objects.find(object => object.id === 10);
let lastInsertObject;

function onMouseMove(event) {

  mouse.x = ((event.clientX - canvasPosition.x) / canvasPosition.width) * 2 - 1;
  mouse.y = -((event.clientY - canvasPosition.y) / canvasPosition.height) * 2 + 1;
  raycaster.setFromCamera(mouse, camera);
  let intersects = raycaster.intersectObjects(connectorPool);

  if (intersects.length > 0) {
    const firstIntersectObject = intersects[0].object;

    if (firstIntersectObject !== currentConnector) {

      if (!focusObject) {
        focusObject = firstIntersectObject;

        objectOpacity(focusObject, 0.5);

      } else if (focusObject !== firstIntersectObject && focusObject !== currentConnector.object) {
        objectOpacity(focusObject, 1);
        focusObject = null;
      }

    } else {

      if (focusObject) {

        if (focusObject !== currentConnector.object) {
          focusObject.material.opacity = 1;
        }

        focusObject = null;
      }

    }

  }
}

const objectOpacity = (object, opacity) => {
  object.material.transparent = 1;
  object.material.opacity = opacity;
}

const setCurrentConnector = (newCurrentConnector) => {

  if (currentConnector.object) {

    objectOpacity(currentConnector.object, 1);
    currentConnector = { object: null };
  }
  currentConnector = newCurrentConnector;
  objectOpacity(currentConnector.object, 0.1)
}

function onclick(event) {
  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(scene.children, true);

  if (intersects.length && intersects[0].object.userData.type) {

    objectOpacity(focusObject, 0.5);
    let availableObjects = records.objects.filter(object => object.connector_type === intersects[0].object.userData.type);
    setCurrentConnector(intersects[0]);
    currentConnector = intersects[0];
    objectOpacity(currentConnector.object, 0.5);

    if (availableObjects.length > 0) {

      model_return.innerHTML = '';
      availableObjects.forEach(record => {

        model_return.innerHTML += detailCard(record.id, record.title, record.text, record.image);
        objectOpacity(currentConnector.object, 0.5);
      });

    }

    // connectorPool = connectorPool.filter(object => object.uuid !== intersects[0].uuid);

    // addObject();
    // scene.remove(intersects[0].object.parent);
  }

}


const createArea = (connector, object, objectId) => {
  let geometry = new THREE.BoxGeometry();
  let material = new THREE.MeshBasicMaterial({ color: '#575757' });
  //test color
  if (connector.connector_type == 4) {
    material = new THREE.MeshBasicMaterial({ color: '#cbced3' });
  }
  // objectData.parentId =object.scene.id;

  let mesh = new THREE.Mesh(geometry, material);
  mesh.scale.set(connector.scale.x, connector.scale.y, connector.scale.z);
  mesh.position.set(object.scene.position.x, object.scene.position.y, object.scene.position.z);

  if (connector) {
    mesh.position.add(getCenterPointX(connector, connector.errorRatePort));
  }

  scene.add(mesh);
  mesh.userData.type = connector.connector_type;
  mesh.userData.id = connector.id;
  mesh.userData.errorRate = connector.errorRate;
  mesh.userData.parentId = objectId;
  mesh.userData.name = connector.name;
  mesh.userData.parentUuid = object.scene.uuid;
  mesh.userData.connectorLevel = connector.connectorLevel;
  console.log('mesh.userData.parentUuid', mesh.userData.parentUuid)
  // console.log('mesh.position',mesh.position)
  getCenterPoint(mesh)
  connectorPool.push(mesh);

}



function main() {
  {
    const color = 0xFFFFF;
    const intensity = 1;
    const hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.20);
    hemiLight.position.set(0, 10, 0);
    let dirLight = new THREE.DirectionalLight(0xffffff, 0.46);
    dirLight.position.set(-8, 12, 8);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize = new THREE.Vector2(1024, 1024);
    scene.add(dirLight);
    // const light = new THREE.DirectionalLight(color, intensity);
    // light.position.set(-0.8, 1, 1.2);
    // scene.add(light);
  }

  mainObjectData = records.objects.find(object => object.id === 1);
  instantiateObject(mainObjectData);



  function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    const pixelRatio = window.devicePixelRatio;
    const width = canvas.clientWidth * pixelRatio | 0;
    const height = canvas.clientHeight * pixelRatio | 0;
    const needResize = canvas.width !== width || canvas.height !== height;

    if (needResize) {
      renderer.setSize(width, height, false);
    }

    return needResize;
  }

  var hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.61);
  hemiLight.position.set(0, 50, 0);
  // добавим полусферическии источник света 
  scene.add(hemiLight);

  function render(time) {
    time *= 0.001;

    if (resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement;
      camera.aspect = canvas.width / canvas.height;
      camera.updateProjectionMatrix();

    }

    renderer.render(scene, camera);

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}

function toDataURL(src, callback, outputFormat) {
  var img = new Image();
  img.crossOrigin = 'Anonymous';
  img.onload = function () {
    var canvas = document.createElement('CANVAS');
    var ctx = canvas.getContext('2d');
    var dataURL;
    canvas.height = this.naturalHeight;
    canvas.width = this.naturalWidth;
    ctx.drawImage(this, 0, 0);
    dataURL = canvas.toDataURL(outputFormat);
    callback(dataURL);
  };
  img.src = src;

  if (img.complete || img.complete === undefined) {
    img.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
    img.src = src;
  }

}

let rotete_test = () => {
  camera.position.z *= -1;
  camera.position.x *= -1;
  camera.lookAt(new THREE.Vector3(0, 0.05, 0));
}

const instantiateObject = (objectData, position = new THREE.Vector3(0, 0, 0), replacedConnector = null) => {

  const mtlLoader = new THREE.MTLLoader();
  const dracoLoader = new THREE.DRACOLoader();
  dracoLoader.setPath('draco/gltf/');
  mtlLoader.load(objectData.materialName, function (materials) {
    materials.preload();

    var objLoader = new THREE.GLTFLoader();
    // objLoader.setMaterials( materials );
    objLoader.setDRACOLoader(dracoLoader);

    objLoader.load(objectData.modelName, function (object) {
      let modelObject = currentConnector.object;
      
      scene.add(object.scene);
      
      // objectData.uuid = object.scene.uuid;
      object.scene.position.copy(position);
      objectData.position = object.scene.children[0].children[0].position;
      objectData.uuid = object.scene.uuid;
      
      configurator.push(objectData);
    
        console.log('objectData.childrenUUidModel',objectData.childrenUUidModel)
        configurator_table.append(modal_configurator(objectData.id, objectData.uuid,objectData.childrenUUidModel, objectData.title, objectData.articule, objectData.text, objectData.image));
        toDataURL('assets/images/' + objectData.image, function (dataUrl) {

        configurator_list.push([objectData.id, objectData.uuid, objectData.title, objectData.articule, objectData.text, {
          image: dataUrl,
          width: 100
        }]);
      
      })
      
      configurator.push(objectData);

      if (configurator.length > 1) {
        confifurator_block();
      }

      if (objectData.modelName === 'model_test.glb') {
        new THREE.Box3().setFromObject(object.scene.children[0].children[0]).getCenter(object.scene.children[0].children[0].position).multiplyScalar(- 1);
      } else {

        if (objectData.modelName == '1031-0011-A02--ASSY_LM-10G-PxC-20191025.glb') {
          new THREE.Box3().setFromObject(object.scene.children[0].children[0]).getCenter(object.position);
          object.scene.children[0].children[0].rotation.y = (3.14 / 2) * 2;
        }

        if (objectData.modelName === 'Медный модуль.glb' || objectData.modelName === 'Оптический модуль.glb') {
          new THREE.Box3().setFromObject(object.scene.children[0].children[0]).getCenter(object.position);

          object.scene.children[0].children[0].rotation.z = -4.65;
          object.scene.children[0].children[0].rotation.x = -4.65;
        }

        if (objectData.modelName === 'Медный модуль.glb') {
          new THREE.Box3().setFromObject(object.scene.children[0].children[0]).getCenter(object.position);
          object.scene.children[0].children[0].rotation.z = -7.85;
        }
        // object.userData = {
        //   connectorId: currentConnector.object.userData.id,
        //   parentId: currentConnector.object.userData.parentId,
        //   errorRate: objectData.errorRate,
        //   children: currentConnector.object.children,
        //   uuid: currentConnector.object.uuid,
        //   connectorLevel: objectData.connectorLevel,
        //   id: objectData.id
        // };

        object.userData.errorRate = objectData.errorRate;
        object.userData.connectorLevel = objectData.connectorLevel;
        objectData.uuid = object.scene.uuid;

        // new THREE.Box3().setFromObject( object.scene.children[0].children[0] ).getCenter( object.scene.children[0].children[0].position ).multiplyScalar( - 1 );
        object.scene.position.add(getCenterPointX(object.scene, object.userData.errorRate));

        object.userData.id = objectData.id;
        filledPorts.push(object);

        if (replacedConnector) {
          currentConnector.object = replacedConnector;
        }

        if (currentConnector.object) {

          if (replacedConnector) {
            object.scene.position.add(replacedConnector.userData.errorRate);
          } else {
            object.scene.position.add(currentConnector.object.userData.errorRate);
          }
          object.userData.parentId = currentConnector.object.userData.parentId;
          object.userData.connectorId = currentConnector.object.userData.id;
          object.userData.children = currentConnector.object.children;
          object.userData.parentUuid = object.scene.uuid;
          object.userData.childrenUUid = currentConnector.object.userData.parentUuid;
          connectorPool = connectorPool.filter(connector => connector.uuid !== currentConnector.object.uuid);
          lastInsertObject = object;
          currentConnector = { object: null };
          
        }

      }

      objectPool.push(object);

      if (objectData.connectors) {
        // console.log('connector',connector);

        console.log('objectData.id', objectData.id);
        objectData.connectors.map(connector => createArea(connector, object, objectData.id));
      }

      lastInsertObject = object.scene;
      console.log('object ', object);
      return object, lastInsertObject;
    });
  });
};

main();



function getCenterPoint(mesh) {

  mesh.geometry.center();

  const boundingBox = mesh.geometry.boundingBox;
  var centerX = 0.5 * (boundingBox.max.x - boundingBox.min.x);
  var centerY = 0.5 * (boundingBox.max.y - boundingBox.min.y);
  var centerZ = 0.5 * (boundingBox.max.z - boundingBox.min.z);
  return new THREE.Vector3(centerX, centerY, centerZ);
}

function getCenterPointX(mesh, errorRate) {

  // mesh.geometry.computeBoundingBox();
  // const boundingBox =  new THREE.Box3().setFromObject( mesh );

  let centerX;
  let centerY;
  let centerZ;

  if (errorRate.x) {
    centerX = errorRate.x;
  } else {
    // centerX = 0.5 * ( boundingBox.max.x - boundingBox.min.x );
  }
  centerX = errorRate.x;
  centerY = errorRate.y;
  centerZ = errorRate.z;

  return new THREE.Vector3(centerX, centerY, centerZ);
}

const addPlug = (plug) => {

  plug = plug.map((item) => {
    item.zang_model = zang; 
    
    if (item) {
      setDetail(item);
    }

  })
  // for (let i = 0; i <= plug.length; i++) {
  //   console.log('Port zang', i);

  // }
}

const setDetail = (detail) => {

  if (currentConnector.object) {

    instantiateObject(detail, currentConnector.object.position);
    console.log('currentConnector', currentConnector)
    scene.remove(currentConnector.object);
  }

  if (detail.zang_model) {
    instantiateObject(detail.zang_model, detail.position, detail);
    connectorPool = connectorPool.filter(item => item.uuid !== detail.uuid);
    console.log('detail.zang_model', detail.zang_model)
    scene.remove(detail);
  }

};



const deleteObject = function (e) {
  const target = e.target;
  const objectuuId = this.dataset['uuid'];
  this.parentElement.parentElement.remove();
  // configurator_list = configurator_list.filter(object => object[0] !== parseInt(objectuuId)); 
  target.parentElement.parentElement.remove();
  //TODO переписать id на uuid

  const object = objectPool.find(object => object.scene.uuid === objectuuId);
  console.log('object', object)

  if (object) {
    let recordItem = records.objects.find(item => item.id === object.userData.id);
  
    if (recordItem) {
      const parentObject = records.objects.find(item => item.id === object.userData.parentId);

      if (parentObject) {
        const connector = parentObject.connectors.find(connector => connector.id === object.userData.connectorId);

        if (connector) {

          const childrenObject = objectPool.find(children => children.scene.uuid === object.userData.childrenUUid);
          console.log('childrenObject',childrenObject)
          const parentSceneObject = objectPool.find(object => object.uuid === object.userData.parentUuid);
          let childrenListObject = objectPool.map((children) => {
            
            if (object.scene.uuid === children.userData.childrenUUid) {
              objectPool = objectPool.filter(item => item.scene.uuid !== children.userData.childrenUUid);
              let modal_element =document.querySelector('.row[data-uuid = "'+ (children.userData.childrenUUid +'"]'));
              modal_element.remove(modal_element);
              console.log('modal_element',modal_element)
              scene.remove(children.scene)
            }
          })
          console.log('objectPool', objectPool);
          // console.log('connectorPool',connectorPool);
          let connectorPoolDelete = connectorPool.filter(item => item.userData.parentUuid === object.scene.uuid);
          connectorPoolDelete = connectorPoolDelete.map((item) => {
            console.log('connectorPoolDelete',connectorPoolDelete);
            connectorPool = connectorPool.filter(element => element !== item);

            scene.remove(item);
          });
      
          objectPool = objectPool.filter(item => item.scene.uuid !== object.scene.uuid);
          console.log('object',object)
          
          configurator_list = configurator_list.filter(element => element[1] !== object.scene.uuid);
          
          scene.remove(object.scene);
          clearPorts = filledPorts.filter(function (f) { return f !== object.userData.connectorId });
          // console.log('connector delete',connector);
          console.log('parentSceneObject delete', object);
          // console.log('object.userData.parentId delete',object.userData.parentId);
          createArea(connector, childrenObject, object.userData.parentId);
        }

      }
    }
    // const connector = records.objects.connectors.find(connector => connector.id === object.userData.connectorId );
  }
}


const replaceArea = (event) => {

  object = records.objects.find(item => item.id == event.target.dataset.modelId);

  if (object) {

    setDetail(object);
  } else {

  }
}

const setPlugs = () => {
  let connectorZang = connectorPool.filter(item => item.userData.connectorLevel === 1);
  addPlug(connectorZang);
}

const confifurator_block = () => {
  configurator_button_list.disabled = false;

  if (configurator) {
    for (let index = 0; index < configurator.length; index++) {
      modal_configurator(configurator[index])
    }
  }

}

var docInfo = {

  info: {
    title: 'Кофигурация',
    author: 'Viktor',
    subject: 'Theme',
    keywords: 'Ключевые слова'
  },

  pageSize: 'A4',
  pageOrientation: 'landscape',//'portrait'
  pageMargins: [50, 50, 30, 60],

  header: function (currentPage, pageCount) {
    return {
      text: currentPage.toString() + ' из ' + pageCount,
      alignment: 'right',
      margin: [0, 30, 10, 50]
    }
  },

  footer: [
    {
      text: 'нижний колонтитул',
      alignment: 'center',//left  right
    }
  ],

  content: [

    {
      text: 'Ваша конфигурация',
      fontSize: 20,
      alignment: 'center',
      margin: [0, 200, 70, 50]
      //pageBreak:'after'
    },

    {
      table: {
        widths: ['*', '*', 100, 150],
        body: [

        ],
        headerRows: 0
      }
    },

  ],

  styles: {
    header: {
      fontSize: 25,

      bold: true,
      alignment: 'right'
    }
  },
  pageMargins: [40, 60, 40, 60],
}

const createPdfconfigurator = () => {

  const pdfItemList = configurator_list.map(item => {
    return [
      item[1], item[2], item[3], item[5]
    ]
    
  });

  docInfo.content[1].table.body = pdfItemList;

  pdfMake.createPdf(docInfo).download('name.pdf');

}

const modal_configurator = (id, uuid,childrenUUid, title, articule, text, image) => {

  const row = document.createElement("div");
  row.classList = "row";
  row.style.display = "flex";
  row.style.flexDirection = "row";
  row.style.flexWrap = "nowrap";
  row.style.justifyContent = "space-between";
  row.dataset.childrenuuid = childrenUUid;

  const el_title = document.createElement("div");
  el_title.classList = "col-md-2";
  el_title.textContent = title;

  const el_text = document.createElement("div");
  el_text.classList = "col-md-3";
  el_text.textContent = text;
  const el_articule = document.createElement("div");
  el_articule.classList = "col-md-3";
  el_articule.textContent = articule;
  const el_block_img = document.createElement("div");
  el_block_img.classList = "col-md-3";

  const el_img = document.createElement("img");
  el_img.src = "assets/images/" + image;
  el_img.classList = "card-img-top";

  el_block_img.append(el_img);

  const el_block_link = document.createElement("div");
  el_block_link.classList = "col-md-2";

  const el_link = document.createElement("button");
  el_link.classList = "btn btn-danger";
  el_link.dataset.uuid = uuid
  el_link.innerHTML = "<i class='fa fa-trash' aria-hidden='true'></i>";
  el_link.onclick = deleteObject;

  if (id != 1) {
    el_block_link.append(el_link);
  }

  row.append(el_title);
  row.append(el_text);
  row.append(el_articule);
  row.append(el_block_img);
  row.append(el_block_link);

  return row;
}

const detailCard = (id, title, text, image) => {
  return `<div class="card col-6 m-3 configurator-card">
  <img src="assets/images/${image}" class="card-img-top" alt="...">
  <div class="card-body">
    <a href="#" class="configurator-link" data-model-id=${id} onclick="replaceArea(event)">
      <i class="fa fa-plus-square configurator-icons" aria-hidden="true"></i>      
      ${title}
  </a>
    <p class="card-text">${text}</p>
  </div>
</div>`;
}
