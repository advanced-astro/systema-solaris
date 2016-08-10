define(
    [
        'Scene',
        'SolarSystem'
    ],
    function(Scene, SolarSystem) {

        /**
         * SunFactory
         *
         * Builds the Solar System's parent star. The Sun object provides approximately 85% of the light in the scene.
         * The remaining 15% of ambient light can be adjusted from within the Scene object.
         */
        var SunFactory = {
            getTexture: function() {
                return new THREE.ImageUtils.loadTexture('/textures/sun_detailed.png');
            },

            build: function() {
                return $.Deferred(function(promise) {
                    var texture = SunFactory.getTexture();

                    var material = new THREE.MeshLambertMaterial({
                                          ambient: 0xffffff,
                                          emissive: 0xffffff,
                                          map: texture,
                                          transparent: true,
                                          opacity: 1
                                        });

                    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
                    texture.anisotropy = 1;

                    var sunGeometry = new THREE.SphereGeometry(
                                            SolarSystem.parent.radius,
                                            120,
                                            90
                                        );

                    var Sun = new THREE.Mesh(sunGeometry, material),
                        pointLight = new THREE.PointLight(0xffffff, 1.12)
                    ;

                    // Flip axis
                    Sun.rotation.x = Math.PI / 2;

                    Sun.position.set(0, 0, 0);

                    Scene.Sun = Sun;

                    Scene.scene.add(pointLight);
                    Scene.scene.add(Sun);
                });
            }
        };

        return SunFactory;
    }
);