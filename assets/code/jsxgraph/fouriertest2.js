            (function() {
                const board = JXG.JSXGraph.initBoard('fourier-test2', {
                    boundingbox: [-0.5, 2.5, 2 * Math.PI + 0.5, -2.5],
                    showCopyright: false,
                    axis: true
                });

                const sliderBoard = JXG.JSXGraph.initBoard('fourier-test2-slider', {
                    boundingbox: [-1, 1, 21, -1],
                    axis: false,
                    showNavigation: false,
                    showCopyright: false
                });

                // Function to compute Fourier series
                function fourierSeries(x, n) {
                    let sum = 0;
                    for (let k = 1; k <= n; k++) {
                        sum += (Math.sin(k * x)) / k;
                    }
                    return sum;
                }

                // Initial number of terms
                let terms = 5;

                // Create the slider
                const slider = sliderBoard.create('slider', [[1, 0.5], [20, 0.5], [1, 5, 20]], {
                    snapWidth: 1,
                    name: 'Number of terms',
                    withLabel: true
                });


                // Create the curve
                let curve = board.create('functiongraph', [
                    function(x) {
                        return fourierSeries(x, terms);
                    },
                    0, 2 * Math.PI
                ]);

                // Update the curve when the slider is moved
                slider.on('drag', function() {
                    terms = Math.round(slider.Value());
                    board.removeObject(curve);
                    curve = board.create('functiongraph', [
                        function(x) {
                            return fourierSeries(x, terms);
                        },
                        0, 2 * Math.PI
                    ]);
                    sliderBoard.update();
                });

                // Add the label for the slider
                sliderBoard.create('text', [9.5, 0.0, function() {
                    return 'Number of terms: ' + Math.round(slider.Value());
                }]);
                slider.label.setAttribute({fontSize:60});
            })();


