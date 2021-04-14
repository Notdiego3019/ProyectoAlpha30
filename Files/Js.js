
// instantiate a loader
var loader = new THREE.OBJLoader();

// load a resource
loader.load(
    // resource URL
    'models/skinned/UCS_config.json',
    // Function when resource is loaded
    function ( object ) {
        scene.add( object );
        }
);