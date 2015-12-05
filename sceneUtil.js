function SceneUtil () {

	this.addFluid = function ( scene, fluid ) {

		for ( var i = 0; i < fluid.particles.length; i++ ) {

			scene.add( fluid.particles[ i ] );
		}
	};
};