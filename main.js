var main = function() {
	
	var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

	var renderer = new THREE.WebGLRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );

	var fluid = new Fluid( .05, 2 );

	var sceneUtil = new SceneUtil();
	sceneUtil.addFluid( scene, fluid );

	camera.position.z = 5;

	var render = function () {
		
		requestAnimationFrame( render );

		increaseY( fluid );

		renderer.render(scene, camera);
	};

	render();
};

var increaseY = function ( fluid ) {

	for ( var i = 0; i < fluid.particles.length; i++ ) {

		fluid.particles[ i ].position.x += .02;
		fluid.particles[ i ].position.y += .02;
	}
};