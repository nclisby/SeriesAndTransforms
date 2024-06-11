            (function() {
                const board = JXG.JSXGraph.initBoard('fourier-test', {
                    boundingbox: [-0.5, 2.5, 2 * Math.PI + 0.5, -2.5],
                    showcopyright: false,
                    axis: true
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
                const slider = board.create('slider', [[0.5, -2], [2 * Math.PI - 0.5, -2], [1, 5, 20]], {
                    name: 'Number of terms',
                    snapWidth: 1,
                    withLabel: false
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
                    terms = slider.Value();
                    board.removeObject(curve);
                    curve = board.create('functiongraph', [
                        function(x) {
                            return fourierSeries(x, terms);
                        },
                        0, 2 * Math.PI
                    ]);
                });

                // Add the label for the slider
                board.create('text', [0.5, -2.3, function() {
                    return 'Number of terms: ' + Math.round(slider.Value());
                }]);
            })();
