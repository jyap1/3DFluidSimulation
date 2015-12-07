function Fluid ( grain, bulk ) {

	this.grain = grain;
	this.bulk = bulk;

	this.particles = [];
	this.geometry = new THREE.SphereBufferGeometry( grain, 8, 8 );
	this.material = new THREE.MeshDepthMaterial();

	this._createFluid = function () {
		
		var particleTemplate = new THREE.Mesh( this.geometry, this.material );
		for( var x = 0; x < this.bulk; x += 1.5 * grain ) {
			for( var y = 0; y < 1.5 * this.bulk; y += 1.5 * grain ) {
				for( var z = 0; z < this.bulk; z += 1.5 * grain ) {

					var particle = particleTemplate.clone();

					particle.position.x = x;
					particle.position.y = y;
					particle.position.z = z;

					this.particles.push( particle );
				}
			}
		}
	};

	this._createFluid();
};