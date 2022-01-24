//dbRecord

// let backArea = createArea({x: 0.142, y: 0.04, z: 0.1}, {x: 0.12999999999999998, y: -0.030000000000000006, z: 0.060000000000000005});

const records = {
  objects: [
    {
      modelName: '1031-0011-A02--ASSY_LM-10G-PxC-20191025.glb',
      image: 'FL SWITCH EP7400 M4TGSFP 1.png',
      title: 'FL SWITCH EP7400 M4TGSFP 1',
      text : 'Текст',
      articule:'Артикул 1',
      dataUrl: '',
      id:2,
      materialName: 'optica_materials.mtl',
      errorRate:{x:25,y:-53.5,z:56},
      connector_type: 3
    },
    {
      id: 1, 
      modelName: 'model_test.glb',
      materialName: 'materials.mtl',
      image:"EP7400-Chassis_Back_2.png",
      title:'Шасси',
      articule:'Артикул 2',
      dataUrl: '',
      text:'Текст',
      connectors: [
        {
          id: 1,
          name: 'back_left_top',
          scale: {x: 140, y: 20, z:100},
          position: {x:5, y:10, z: 130},
          errorRate: {x:4, y: 20, z: 2},
          connector_type: 3
        },
        {
          id:2,
          name: 'back_left_bot',
          scale: {x: 140, y: 20, z:100},
          position: {x:5, y:-10, z: 130},
          errorRate: {x:4, y: 20, z: 2},
          connector_type: 1
        },
        {
          id:3,
          name: 'back_right_top',
          scale: {x: 140, y: 20, z:100},
          position: {x:150, y:10, z: 130},
          errorRate: {x:-4, y: 20, z: 2},
          connector_type: 1
        },
        {
          id:4,
          name: 'back_right_bot',
          scale: {x: 140, y: 20, z:100},
          position: {x:150, y:-10, z: 130},
          errorRate: {x:-4, y: 20, z: 2},
          connector_type: 3
        },
        {
          id:5,
          name: 'front_left',
          scale: {x: 90, y: 40, z:100},
          position: {x:-75, y:0, z: -150},
          errorRate: {x: -12, y: -18, z: -110},
          connector_type: 2
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
          id:6,
          name: 'front_right',
          scale: {x: 90, y: 40, z:100},
          position: {x:-170, y:0, z: -150},
          errorRate: {x: -12, y: -18, z: -110},
          connector_type: 2
        }
      ]
    },
    {
      modelName: '1031-0011-A02--ASSY_LM-10G-PxC-20191025.glb',
      materialName: 'optica_materials.mtl',
      image: '1144367_1031-0002-A01-iMX350_PS_MV_LV-ASSY_1.png',
      title:'1144367 1031 0002 A01 iMX350 PS MV LV-ASSY 1',
      text:'Подробный текст',
      articule:'Артикул 3',
      dataUrl: '',
      id: 3,
      errorRate:{x:25,y:-53.5,z:56},
      connector_type: 1,
    },
    {
      modelName: '1031-0017-A02--iRM-L3-LM-8RJ45-ASSY-iMX-PxC-20191025.glb',
      materialName: 'optica_materials.mtl',
      image: '1144367_1031-0002-A01-iMX350_PS_MV_LV-ASSY_1.png',
      title:'fea',
      text:'Подробный текст',
      articule:'Артикул 3',
      dataUrl: '',
      id: 4,
      errorRate:{x:73,y:-29.2,z:62},
      connector_type: 1,
    },
    {
      modelName: '1031-0002-A01-iMX350_PS_MV_LV-ASSY--PxC-20191025.glb',
      materialName: 'materials.mtl',
      image: 'FL SWITCH EP7400 M8GRJ45 1 .png',
      title:'FL SWITCH EP7400 M8GRJ45 1',
      articule:'Артикул 4',
      dataUrl: '',
      text:'Подробный текст',
      errorRate:{x:0,y:0,z:0},
      id: 5,
      connector_type: 2,
    },
    {
      modelName: '1031-0002-A01-iMX350_PS_MV_LV-ASSY--PxC-20191025.glb',
      materialName: 'materials.mtl',
      articule:'Артикул 5',
      dataUrl: '',
      image: 'FL SWITCH EP7400 M8GRJ45 1 .png',
      title:'FL SWITCH EP7400 M8GRJ45',
      text:'Подробный текст',
      errorRate:{x:0,y:0,z:0},
      id: 6,
      connector_type: 2,
    },
  ]
};

let mainObject;
let mainObjectData;
let mainObjectCenter;
let model_decriptions_info;
let replaceId;
let filledPorts = [];
let clearPorts  =[]
const scene = new THREE.Scene();
const canvas = document.querySelector('#canvas');
const camera = new THREE.PerspectiveCamera( 100, canvas.width / canvas.height, 10, 1000);
let canvasPosition = canvas.getBoundingClientRect();
const renderer = new THREE.WebGLRenderer({canvas, antialias:true});
renderer.setClearColor(0xFFFFFF);
const fov = 50;
const aspect = 2;  // the canvas default
const near = 0.01;
const far = 10;
var controls = new THREE.OrbitControls( camera, renderer.domElement );

// call this only in static scenes (i.e., if there is no animation loop)
controls.addEventListener( 'change', renderer ); 
//onCLick stuff
renderer.domElement.addEventListener("mousedown", onclick, true);
renderer.domElement.addEventListener("mousemove", onMouseMove, true);

// renderer.domElement.addEventListener("contextmenu", contextmenu, false);
let currentConnector = {object:null};

const  raycaster = new THREE.Raycaster();
const  mouse = new THREE.Vector2();
let focusObject = null;
//Шаг добавления объекта
const coordStepZ = -0.01;
const coordStepY = 0.05;
const coordStepX = 0.05;
const coordTest =0.01;

//Массив oбъектов
let objectPool = [];
let model_return =document.querySelector('.configurator_block');
const configurator_modal =document.querySelector('.configurator-modal');
let connectorPool =[];
let currentobject;
let configurator = [];
let configurator_list = [];
let configurator_table =document.querySelector('.configurator-table')
let positionGreenX = document.querySelector('.positionX');
// const camera = new THREE.PerspectiveCamera(fov, window.innerWidth / window.innerHeight, near, far);
camera.position.set(0, 0.05, 400);
const zeroPosition = new THREE.Vector3(0,0,0);
const configurator_button_list = document.querySelector("#btn-sania");
//onCLick stuff

function onMouseMove( event ) {
  
	mouse.x = ((event.clientX - canvasPosition.x) / canvasPosition.width) * 2 - 1;
	mouse.y = -((event.clientY - canvasPosition.y) / canvasPosition.height) * 2 + 1;
  raycaster.setFromCamera(mouse, camera);
  let intersects = raycaster.intersectObjects(connectorPool);

  if(intersects.length > 0) {
    const firstIntersectObject = intersects[0].object;

    if (firstIntersectObject !== currentConnector) {
    
      if(!focusObject) {
        focusObject = firstIntersectObject;
        
        objectOpacity(focusObject, 0.5);
      } else if(focusObject !== firstIntersectObject && focusObject !== currentConnector.object) {
        objectOpacity(focusObject, 1);
        focusObject = null;
        
      }
  
    } else {
  
      if(focusObject) {
  
        if(focusObject !== currentConnector.object) {
          focusObject.material.opacity = 1;
        }
        
        focusObject = null;
      }
      
    }

  }
}

const objectOpacity = (object,opacity) =>
{
    object.material.transparent = 1;
    object.material.opacity = opacity;
}

const setCurrentConnector = (newCurrentConnector) =>
{
  
  if(currentConnector.object)
  {

    objectOpacity(currentConnector.object, 1);
    currentConnector = {object:null};
  }
  console.log('newCurrentConnector', newCurrentConnector.object)
  currentConnector = newCurrentConnector;
  console.log('currentConnector test',currentConnector)
  objectOpacity(currentConnector.object, 0.1)
}

function onclick(event) { 
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children, true);

    if(intersects.length && intersects[0].object.userData.type)
    {
     
      objectOpacity(focusObject, 0.5);
      let availableObjects = records.objects.filter(object => object.connector_type === intersects[0].object.userData.type);
      setCurrentConnector(intersects[0]);
      currentConnector = intersects[0];
      console.log('onmouse',currentConnector)
      objectOpacity(currentConnector.object, 0.5);

      if(availableObjects.length > 0)
      {
        console.log('currentConnector.object',currentConnector.object)
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
    // for(let index = 0; index < intersects.length; index++)
    // {
     
    // }
    
}


const createArea = ( connector) =>
{

  let geometry =new THREE.BoxGeometry();
  let material =new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  let mesh = new THREE.Mesh(geometry, material);
  mesh.scale.set(connector.scale.x, connector.scale.y, connector.scale.z);
  mesh.position.set(connector.position.x, connector.position.y, connector.position.z);
  scene.add(mesh);
  
  console.log(mesh);
  mesh.userData.type = connector.connector_type;
  mesh.userData.id = connector.id;
  mesh.userData.errorRate = connector.errorRate;
  
  mesh.userData.name = connector.name;
  getCenterPoint(mesh)
  connectorPool.push(mesh);
}

function main() {
    {
      const color = 0xFFFFF;
      const intensity = 1;
      const hemiLight = new THREE.HemisphereLight( 0xffffff, 0xffffff, 0.20 );
      hemiLight.position.set( 0, 10, 0 );
      let dirLight = new THREE.DirectionalLight( 0xffffff, 0.46 );
      dirLight.position.set( -8, 12, 8 );
      dirLight.castShadow = true;
      dirLight.shadow.mapSize = new THREE.Vector2(1024, 1024);
      scene.add( dirLight );
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

    var hemiLight = new THREE.HemisphereLight( 0xffffff, 0xffffff, 0.61 );
    hemiLight.position.set( 0, 50, 0 );
    // добавим полусферическии источник света 
    scene.add( hemiLight );

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
    img.onload = function() {
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
  
  

  let rotete_test =() =>
    {
      camera.position.z *= -1;
      camera.position.x *= -1;
      camera.lookAt(new THREE.Vector3(0,0.05,0));
    }
  
  const instantiateObject = (objectData, position = new THREE.Vector3(0, 0, 0)) => {
  
    const mtlLoader = new THREE.MTLLoader();
    
    mtlLoader.load( objectData.materialName , function( materials ) {
    materials.preload();
   
    var objLoader = new THREE.GLTFLoader();
    // objLoader.setMaterials( materials );
    objLoader.load( objectData.modelName, function ( object ) {
      
      scene.add( object.scene );
      console.log("Data info" , objectData.id);
      console.log('object waf', objectData);
      
      objectData.uuid =object.scene.uuid;
      object.scene.children[0].children[0].position.copy(position);

      configurator.push(objectData);
      
      configurator_table.append(modal_configurator(objectData.id,objectData.uuid,objectData.title,objectData.articule,objectData.text,objectData.image));
    
      toDataURL('assets/images/'+objectData.image, function(dataUrl) {
       
        configurator_list.push([objectData.id,objectData.uuid,objectData.title,objectData.articule,objectData.text,{
          image:dataUrl,
          width:100
        }]);
        // console.log('RESULT:', dataUrl)
      })
      console.log('массив данных pdf',configurator_list);
      configurator.push(objectData);
      console.log('objectData',objectData.uuid);
      if(configurator.length > 1)
      {
        confifurator_block();
      }
      
     
      if(objectData.modelName === 'model_test.glb') {
        new THREE.Box3().setFromObject( object.scene.children[0].children[0] ).getCenter( object.scene.children[0].children[0].position ).multiplyScalar( - 1 );
      } 
      
      else {
      
        if(objectData.modelName == '1031-0011-A02--ASSY_LM-10G-PxC-20191025.glb') {
      
          new THREE.Box3().setFromObject(object.scene.children[0].children[0]).getCenter( object.position );
          object.scene.children[0].children[0].rotation.y= (3.14 / 2) * 2;
        }
        
        object.userData.connectorId = currentConnector.object.userData.id;
        object.userData.errorRate =objectData.errorRate;
        console.log('object data',objectData)
          // new THREE.Box3().setFromObject( object.scene.children[0].children[0] ).getCenter( object.scene.children[0].children[0].position ).multiplyScalar( - 1 );
        object.scene.position.add(getCenterPointX(object.scene, object.userData.errorRate));
        object.userData.id = objectData.id;
      
        
        // object.userData.uuid = objectData.uuid;
        console.log('object.userData.uuid',objectData.uuid)
        //Заполнение id в userData для модуля
       
        filledPorts.push(object);
        console.log('object.userData.connectorId',object.userData.connectorId);
        if(currentConnector) {
          console.log('object.scene.children[0].children[0].position ',object.scene.children[0].children[0].position);
          
          object.scene.position.add(currentConnector.object.userData.errorRate);
          connectorPool = connectorPool.filter(connector => connector.uuid !== currentConnector.object.uuid);
          currentConnector = {object:null};
        }
        
      }
      
      objectPool.push(object);
      
      if(objectData.connectors) {
        console.log('objectData.connectors', objectData.connectors);
        objectData.connectors.map(connector => createArea(connector));
      }

      return object;
      });
    } );
    
  };



  const remove_position = (object, connector) =>
  {
    console.log()
  }
  
  main();

  function getCenterPoint(mesh) {

    mesh.geometry.center();

    const boundingBox = mesh.geometry.boundingBox;
    var centerX = 0.5 * ( boundingBox.max.x - boundingBox.min.x );
    var centerY = 0.5 * ( boundingBox.max.y - boundingBox.min.y );
    var centerZ = 0.5 * ( boundingBox.max.z - boundingBox.min.z );
    return new THREE.Vector3(centerX, centerY, centerZ);
}

function getCenterPointX(mesh, errorRate) {

  // mesh.geometry.computeBoundingBox();
  // const boundingBox =  new THREE.Box3().setFromObject( mesh );
  let centerX;
  if(errorRate.x) {
    centerX = errorRate.x;
  } else {
    // centerX = 0.5 * ( boundingBox.max.x - boundingBox.min.x );
  }
  
  let centerY = errorRate.y;
  let centerZ = errorRate.z;

  return new THREE.Vector3(centerX, centerY, centerZ);
}

const addPlug = (plug) =>
{
  for(let i = 0; i <= plug.length;i++)
  {   
      
      console.log('Port zang', plug[i])
   
  }
} 

const setDetail = (detail) => {

  if(currentConnector.object) {

    scene.remove(currentConnector.object);
    
    instantiateObject(detail, currentConnector.object.position);
    // currentConnector = {object: null}; 
    console.log('fwfwafwafawfaw',currentConnector)
  
  
  }

  // return object;
};

const deleteObject = function(e){
  console.log(e);
  
  const target = e.target;
  console.log('id детали',target.dataset);
  const objectuuId = this.dataset['uuid'];
  console.log('objectuuId',objectuuId);
    this.parentElement.parentElement.remove();
    console.log('configurator_list qwe',configurator_list);
    // configurator_list = configurator_list.filter(object => object[0] !== parseInt(objectuuId)); 
    console.log('configurator_list asd',configurator_list);
    target.parentElement.parentElement.remove();
   
  //TODO переписать id на uuid

  const object = objectPool.find(object => object.scene.uuid === objectuuId);
  console.log('object',object)
  if(object)
  {
    const connector = records.objects[1].connectors.find(connector => connector.id === object.userData.connectorId );
    console.log(object);
    console.log('connector',connector)
    if(connector)
    {
      console.log('object remove',object);
      console.log('object.userData.connectorId',object.userData.connectorId)
      // filledPorts.remove(parseInt(object.userData.connectorId))
    
      scene.remove(object.scene);
      clearPorts = filledPorts.filter(function(f) {return f !== object.userData.connectorId});
      addPlug(clearPorts);
      console.log('filledPorts',clearPorts);
      console.log('objectPool',objectPool);
      
      createArea(connector);
   
    }

    
  }
  console.log('objectPool', objectPool);
}

const getOjbect = (object) =>
{
  // object = object.scene.children[0].children[0].children;
  console.log(object.scene.children[0].children[0].position);
  // return object;
}
const replaceArea = (objectId) =>
{
  object = records.objects.find(item => item.id === objectId);
  console.log('object ',object);
  if(object) {
    setDetail(object);
  } else {
    console.log('can\'t find object', objectId)
  }
}

const modelReplace = (objectId) =>
{
  object =records.objects.find(item => item.id ===objectId);
  if(object)
  {
    
  }
}

const confifurator_block = () =>
{
  configurator_button_list.disabled = false;
  if(configurator)
  {

    for(let index = 0;index < configurator.length;index ++)
    {
      
      modal_configurator(configurator[index])
    }
  }
  
}

var docInfo = {
	
	info: {
		title:'Кофигурация',
		author:'Viktor',
		subject:'Theme',
		keywords:'Ключевые слова'
	},
	
	pageSize:'A4',
	pageOrientation:'landscape',//'portrait'
	pageMargins:[50,50,30,60],
	
	header:function(currentPage,pageCount) {
		return {
			text: currentPage.toString() + ' из ' + pageCount,
			alignment:'right',
			margin:[0,30,10,50]
		}
	},
	
	footer:[
		{
			text:'нижний колонтитул',
			alignment:'center',//left  right
		}
	],
	
	content: [
	
		{
			text:'Ваша конфигурация',
			fontSize:20,
      alignment:'center',
			margin:[0,200,70,50]
			//pageBreak:'after'
		},

		{
			table:{
				widths:['*','*',100,150],
				body:[
          
				],
				headerRows:0
			}
		},
		
	],
	
	styles: {
		header: {
			fontSize:25,
      
			bold:true,
			alignment:'right'
		}
	},
  pageMargins: [ 40, 60, 40, 60 ],
}

const createPdfconfigurator = () =>
{
  // console.log('body', docInfo.content[1].table.body);
  console.log('docInfo.content[1].table.body', docInfo.content[1].table.body);

  const pdfItemList = configurator_list.map(item => {
    return [
        item[1],item[2],item[3],item[4]
    ]
  });

  docInfo.content[1].table.body = pdfItemList;

  pdfMake.createPdf(docInfo).download('name.pdf');
  
}

const modal_configurator =(id,uuid,title,articule,text,image) =>
{

const row = document.createElement("div");
row.classList = "row";
row.style.display = "flex";
row.style.flexDirection = "row";
row.style.flexWrap = "nowrap";
row.style.justifyContent = "space-between";

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
el_link.dataset.uuid = uuid;
el_link.innerHTML = "<i class='fa fa-trash' aria-hidden='true'></i>";
el_link.onclick = deleteObject;
if(id != 1)
{
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
    <a href="#" class="configurator-link" onclick="replaceArea(${id})">
      <i class="fa fa-plus-square configurator-icons" aria-hidden="true"></i>      
      ${title}
  </a>
    <p class="card-text">${text}</p>
  </div>
</div>`;
}
