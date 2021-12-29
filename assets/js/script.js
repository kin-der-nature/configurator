//dbRecord

// let backArea = createArea({x: 0.142, y: 0.04, z: 0.1}, {x: 0.12999999999999998, y: -0.030000000000000006, z: 0.060000000000000005});

const records = {
  objects: [
    {
      modelName: 'model_test3.obj',
      image: 'FL SWITCH EP7400 M4TGSFP 1.png',
      title: 'FL SWITCH EP7400 M4TGSFP 1',
      text : 'Текст',
      articule:'Артикул 1',
      dataUrl: '',
      id:2,
      materialName: 'materials.mtl',
      errorRate:{x:-0.0488,y:-0.023,z:-0.007},
      connector_type: 3
    },
    {
      id: 1, 
      modelName: 'model_test1.obj',
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
          scale: {x: 0.13, y: 0.021, z: 0.000001},
          position: {x: 0.0159, y:0.009, z: 0.210000000000000005},
          errorRate: {x: 0, y: -0.009, z: 0.002},
          connector_type: 3
        },
        {
          id:2,
          name: 'back_left_bot',
          scale: {x: 0.13, y: 0.021, z: 0.000001},
          position: {x: 0.0159, y: -0.0097, z: 0.210000000000000005},
          errorRate: {x: 0, y: -0.009, z: 0.002},
          connector_type: 1
        },
        {
          id:3,
          name: 'back_right_top',
          scale: {x: 0.13, y: 0.021, z: 0.0000001},
          position: {x: 0.153, y: -0.0097, z: 0.210000000000000005},
          errorRate: {x: 0, y: -0.009, z: 0.002},
          connector_type: 1
        },
        {
          id:4,
          name: 'back_right_bot',
          scale: {x: 0.13, y: 0.021, z: 0.00000001},
          position: {x: 0.153, y:0.009, z: 0.210000000000000005},
          errorRate: {x: 0, y: -0.009, z: 0.002},
          connector_type: 3
        },
        {
          id:5,
          name: 'front_left',
          scale: {x: 0.095, y: 0.0370, z: 0.000000001},
          position: {x: -0.072, y:0.0009, z: -0.15600000000000009},
          errorRate: {x: -0.020, y: -0.037, z: -0.075},
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
          scale: {x: 0.095, y: 0.0370, z: 0.001},
          position: {x: -0.160, y:0.0009, z: -0.15600000000000009},
          errorRate: {x: -0.027, y: -0.037, z: -0.075},
          connector_type: 2
        }
      ]
    },
    {
      modelName: 'test.obj',
      materialName: 'materials.mtl',
      image: '1144367_1031-0002-A01-iMX350_PS_MV_LV-ASSY_1.png',
      title:'1144367 1031 0002 A01 iMX350 PS MV LV-ASSY 1',
      text:'Подробный текст',
      articule:'Артикул 3',
      dataUrl: '',
      id: 3,
      errorRate:{x:0.012,y:0.02,z:-0.0035},
      connector_type: 2,
    },
    {
      modelName: 'model_test.obj',
      materialName: 'materials.mtl',
      image: 'FL SWITCH EP7400 M8GRJ45 1 .png',
      title:'FL SWITCH EP7400 M8GRJ45 1',
      articule:'Артикул 4',
      dataUrl: '',
      text:'Подробный текст',
      errorRate:{x:-0.001,y:0,z:0},
      id: 4,
      connector_type: 1,
    },
    {
      modelName: 'model_test2.obj',
      materialName: 'materials.mtl',
      articule:'Артикул 5',
      dataUrl: '',
      image: 'FL SWITCH EP7400 M8GRJ45 1 .png',
      title:'FL SWITCH EP7400 M8GRJ45',
      text:'Подробный текст',
      errorRate:{x:0.013,y:0.017,z:-0.003},
      id: 5,
      connector_type: 1,
    },
  ]
};

let mainObject;
let mainObjectData;
let mainObjectCenter;
let model_decriptions_info;
let replaceId;
const scene = new THREE.Scene();
const canvas = document.querySelector('#canvas');
const camera = new THREE.PerspectiveCamera( 50, canvas.width / canvas.height, 0.1, 100);
let canvasPosition = canvas.getBoundingClientRect();
const renderer = new THREE.WebGLRenderer({canvas, antialias:true});
renderer.setClearColor(0xFFFFFF);
const fov = 50;
const aspect = 2;  // the canvas default
const near = 0.01;
const far = 10;
controls = new THREE.OrbitControls( camera, renderer.domElement );
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
camera.position.set(0, 0.05, 0.7);
const zeroPosition = new THREE.Vector3(0,0,0);
const configurator_button_list = document.querySelector("#btn-sania");
//onCLick stuff

function onMouseMove( event ) {
  
	mouse.x = ((event.clientX - canvasPosition.x) / canvasPosition.width) * 2 - 1;
	mouse.y = -((event.clientY - canvasPosition.y) / canvasPosition.height) * 2 + 1;
  raycaster.setFromCamera(mouse, camera);
  let intersects = raycaster.intersectObjects(connectorPool);
  
  if ( intersects.length > 0 && intersects[0].object !== currentConnector.object) {

    if(!focusObject) {
      focusObject = intersects[0].object;
      
      objectOpacity(focusObject, 0.5);
    } else if(focusObject !== intersects[0].object && focusObject !== currentConnector.object) {
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

  currentConnector = newCurrentConnector;
  objectOpacity(currentConnector.object, 0.1);
}
function onclick(event) {
    
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children, true);
    if(intersects.length && intersects[0].object.userData.type)
    {
      
      // objectOpacity(focusObject, 0.5);
      let availableObjects = records.objects.filter(object => object.connector_type === intersects[0].object.userData.type);
      setCurrentConnector(intersects[0]);
      // currentConnector = intersects[0];
      // objectOpacity(currentConnector.object, 0.5);
      if(availableObjects.length > 0)
      {
        
        model_return.innerHTML = '';
        availableObjects.forEach(record => {
          model_return.innerHTML += detailCard(record.id, record.title, record.text, record.image);
        
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

const onDelete =(event)=>
{
 
}
const createArea = ( connector) =>
{
  let geometry =new THREE.BoxGeometry();
  let material =new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  let mesh = new THREE.Mesh(geometry, material);
  mesh.scale.set(connector.scale.x, connector.scale.y, connector.scale.z);
  mesh.position.set(connector.position.x, connector.position.y, connector.position.z);
  scene.add(mesh);
  mesh.userData.type = connector.connector_type;
  mesh.userData.id = connector.id;
  mesh.userData.errorRate = connector.errorRate;
  
  mesh.userData.name = connector.name;

  connectorPool.push(mesh);
}

function main() {
    {
      const color = 0xFFFFF;
      const intensity = 1;
      const hemiLight = new THREE.HemisphereLight( 0xffffff, 0xffffff, 0.20 );
      hemiLight.position.set( 0, 50, 0 );
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
    mtlLoader.load( objectData.materialName, function( materials ) {
    materials.preload();
    var objLoader = new THREE.OBJLoader();
    objLoader.setMaterials( materials );
    objLoader.load( objectData.modelName, function ( object ) {
      scene.add( object );
      // console.log("Data info" , objectData.id);
      
      if(objectData.errorRate)
      {
        object.userData.errorRate = objectData.errorRate;
      }
      
      object.position.copy(position);
      configurator.push(objectData);
      configurator_table.append(modal_configurator(objectData.id,objectData.title,objectData.articule,objectData.text,objectData.image));
      
      // toDataURL(objectData.image, function(dataUrl) {
      //   objectData.image = dataUrl;
      //   console.log('RESULT:', objectData.image)
      //   configurator_list.push([objectData.title,objectData.text,objectData.image]);
      // })
      toDataURL('assets/images/'+objectData.image, function(dataUrl) {
       
        configurator_list.push([objectData.id,objectData.title,objectData.articule,objectData.text,{
          image:dataUrl,
          width:100
        }]);
        // console.log('RESULT:', dataUrl)
      })
      console.log('массив данных pdf',configurator_list);
      configurator.push(objectData);
      if(configurator.length > 1)
      {
        confifurator_block();
      }

      
      if(objectData.modelName === 'model_test1.obj') {
        object.position.add(getCenterPoint(object.children[0]));
      } else {

        if(objectData.modelName === 'model_test3.obj') {
          object.rotation.y += (3.14 / 2) * 2;
        }

        
        object.position.add(getCenterPointX(object.children[0], object.userData.errorRate));
        object.userData.connectorId = currentConnector.object.userData.id;
        //Заполнение id в userData для модуля
        object.userData.id = objectData.id;
    
        if(currentConnector) {
          object.position.add(getCenterPointX(object.children[0], currentConnector.object.userData.errorRate));
          connectorPool = connectorPool.filter(connector => connector.uuid !== currentConnector.object.uuid);
          currentConnector = {object:null};
        }
        
      }
      
      objectPool.push(object);
      
      if(objectData.connectors) {
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
  const positionX =(isIncrement = true) =>
  {
    records.connectors.map(connector => {
      connector.position.x += isIncrement ? coordTest :(coordTest*-1);
    })
    // positionGreenX.innerHTML = currentobject.position.x;

  }
  const positionY =(isIncrement = true) =>
  {
    records.connectors.map(connector => {
      connector.position.y += isIncrement ? coordTest :(coordTest*-1);
    });
  }
  const positionZ =(isIncrement = true) =>
  {
    // positionGreenPlusX.innerHTML = currentobject.position.x;
    currentobject.position.z += isIncrement ? coordTest :(coordTest*-1);
    console.log('Z =' , currentobject.position.z);
  }
  
  main();

  function getCenterPoint(mesh) {

    mesh.geometry.computeBoundingBox();

    const boundingBox = mesh.geometry.boundingBox;
    var centerX = 0.5 * ( boundingBox.max.x - boundingBox.min.x );
    var centerY = 0.5 * ( boundingBox.max.y - boundingBox.min.y );
    var centerZ = 0.5 * ( boundingBox.max.z - boundingBox.min.z );
    return new THREE.Vector3(centerX, centerY, centerZ);
}

function getCenterPointX(mesh, errorRate) {

  mesh.geometry.computeBoundingBox();
  const boundingBox = mesh.geometry.boundingBox;

  let centerX;

  if(errorRate.x) {
    centerX = errorRate.x;
  } else {
    centerX = 0.5 * ( boundingBox.max.x - boundingBox.min.x );
  }

  let centerY = errorRate.y;
  let centerZ = errorRate.z;

  return new THREE.Vector3(centerX, centerY, centerZ);
}
const setDetail = (detail) => {

  if(currentConnector.object) {
    scene.remove(currentConnector.object);
    instantiateObject(detail, currentConnector.object.position);
    // currentConnector = null; 
  }

  return object;
};

const deleteObject = function(e){
  console.log(e);
  const target = e.target;
  console.log('id детали',target.dataset);
  const objectId = this.dataset['id'];
  console.log('objectId',objectId);
  // configurator_list[0].remove();
    this.parentElement.parentElement.remove();
    console.log('configurator_list qwe',configurator_list);
    configurator_list = configurator_list.filter(object => object[0] !== parseInt(objectId));
    console.log('configurator_list asd',configurator_list)
  // target.parentElement.parentElement.remove();
  //TODO переписать id на uuid
  const object = objectPool.find(object => object.userData.id == objectId);

  if(object)
  {
    const connector = records.objects[1].connectors.find(connector => connector.id === object.userData.connectorId );

    if(connector)
    {
      console.log(object);
      scene.remove(object);
      objectPool = objectPool.filter(item => item.uuid !== object.uuid);
      console.log(configurator);
      createArea(connector);
    }

    
  }
 
}

const replaceArea = (objectId) =>
{
  object = records.objects.find(item => item.id === objectId);
  console.log(object);
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
console.log(configurator.model);





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


const modal_configurator =(id,title,articule,text,image) =>
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
el_link.dataset.id = id;
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
  
  // `<div class="row" style="display: flex; flex-direction: row;flex-wrap: nowrap;justify-content: space-between;">
  //   <div class="col-md-2">${title}</div>
  //   <div class="col-md-3">${text}</div>
  //   <div class="col-md-3"><img src="assets/images/${image}" class="card-img-top" alt="..."></div>
  //   <div class="col-md-2">${(id !== 1) ? `<a href="#" class="btn btn-danger fun-btn-delete" data-id="${id}"><i class="fa fa-trash" aria-hidden="true"></i></a>`: ``}</div></div>
  // </div>`

  // `<tr>
  // <td>${title}</td>
  // <td>${text}</td>
  // <td><img src="assets/images/${image}" class="card-img-top" alt="..."></td>
  // </tr>`
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
