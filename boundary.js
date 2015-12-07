function Boundary ( size ) {

	this.geometry = new THREE.BoxGeometry( size, 0.75 * size, size );
	
	this.material = new THREE.MeshNormalMaterial();
	this.material.transparent = true;
	this.material.opacity = 0.25;

	this.mesh = new THREE.Mesh( this.geometry, this.material );
	this.mesh.position.x += 25;
	this.mesh.position.y += -100;
	this.mesh.position.z += 25;
};