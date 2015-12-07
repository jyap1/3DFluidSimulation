function SceneUtil ( scene ) {

	this.scene = scene;

	this.addFluid = function ( fluid ) {

		for ( var i = 0; i < fluid.particles.length; i++ ) {

			this.scene.add( fluid.particles[ i ] );
		}
	};

	this.addBoundary = function ( boundary ) {

		this.scene.add( boundary.mesh );
	};
};