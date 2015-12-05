function Fluid ( grain, bulk ) {
	/*
		grain: radius of each individual particle
		bulk: cubic volume in which particles are created
	*/

	this.grain = grain;
	this.bulk = bulk;

	this.particles = [];
	this.geometry = new THREE.SphereGeometry( grain, 12, 12 );
	this.material = new THREE.MeshNormalMaterial();

	this._initializeFluid = function () {
		
		this.bulk = this.bulk / 2;
		for( var x = -this.bulk; x < this.bulk; x += grain  ) {
			for( var y = -this.bulk; y < this.bulk; y += grain ) {
				for( var z = -this.bulk; z < this.bulk; z += grain ) {

					var sphere = new THREE.Mesh( this.geometry, this.material );

					sphere.position.x = x;
					sphere.position.y = y;
					sphere.position.z = z;

					this.particles.push( sphere );
				}
			}
		}
	};

	this._initializeFluid();
};