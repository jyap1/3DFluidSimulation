var main = function() {
	
	var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 500 );

	var renderer = new THREE.WebGLRenderer( { alpha: true } );
	renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.setClearColor( 0xffffff, 0);
	document.body.appendChild( renderer.domElement );

	var fluid = new Fluid( 2, 100 );

	var sceneUtil = new SceneUtil();
	sceneUtil.addFluid( scene, fluid );

	//camera.position.x = 150;
	//camera.position.y = 100;
	camera.position.z = 200;
	//camera.lookAt( scene.position );
	//camera.position.y -= 100;

	var render = function () {
		
		requestAnimationFrame( render );

		move( fluid );

		renderer.render( scene, camera );
	};

	render();
};

var move = function ( fluid ) {

	for ( var i = 0; i < fluid.particles.length; i++ ) {

		//fluid.particles[ i ].position.x += 1;
		fluid.particles[ i ].position.y -= 1;
	}
};