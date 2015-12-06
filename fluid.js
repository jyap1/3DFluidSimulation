function Fluid ( grain, bulk ) {
	/*
		grain: radius of each individual particle
		bulk: cubic volume in which particles are created
	*/

	this.grain = grain;
	this.bulk = bulk;

	this.particles = [];
	this.geometry = new THREE.CircleGeometry( grain, 8 );
	this.material = new THREE.MeshNormalMaterial();

	this._createFluid = function () {
		
		this.bulk = this.bulk / 2;
		for( var x = -this.bulk; x < this.bulk; x += grain  ) {
			for( var y = -this.bulk; y < this.bulk; y += grain ) {
				//for( var z = -this.bulk; z < this.bulk; z += grain ) {

					var particle = new THREE.Mesh( this.geometry, this.material );

					particle.position.x = x;
					particle.position.y = y;
					//particle.position.z = z;

					this.particles.push( particle );
				//}
			}
		}
	};

	this._createFluid();
};