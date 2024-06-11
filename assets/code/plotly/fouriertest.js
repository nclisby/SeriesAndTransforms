        // Function to compute Fourier series
        function fourierSeries(x, n) {
            let sum = 0;
            for (let k = 1; k <= n; k++) {
                sum += (Math.sin(k * x)) / k;
            }
            return sum;
        }

        // Function to update the plot
        function updatePlot(terms) {
            let xValues = [];
            let yValues = [];
            for (let i = 0; i <= 100; i++) {
                let x = 2 * Math.PI * i / 100;
                xValues.push(x);
                yValues.push(fourierSeries(x, terms));
            }

            let trace = {
                x: xValues,
                y: yValues,
                type: 'scatter'
            };

            let layout = {
                title: 'Fourier Series with ' + terms + ' Terms',
                xaxis: {title: 'x'},
                yaxis: {title: 'f(x)'}
            };

            Plotly.react('plotly-div', [trace], layout);
        }

        // Initial plot with default terms
        let terms = 5;
        updatePlot(terms);

        // Create a canvas element for slider and plot
        let container = document.createElement('div');
        container.style.display = 'flex';
        container.style.flexDirection = 'column';
        container.style.alignItems = 'center';
        container.style.marginTop = '20px';

        // Create a canvas for the plot
        let plotlyDiv = document.createElement('div');
        plotlyDiv.id = 'plotly-div';
        container.appendChild(plotlyDiv);

        // Create the slider input
        let sliderLabel = document.createElement('label');
        sliderLabel.innerText = 'Number of terms: ';
        sliderLabel.style.marginTop = '20px';

        let slider = document.createElement('input');
        slider.type = 'range';
        slider.min = '1';
        slider.max = '20';
        slider.value = terms;
        slider.style.width = '80%';

        slider.oninput = function () {
            terms = this.value;
            updatePlot(terms);
        };

        container.appendChild(sliderLabel);
        container.appendChild(slider);
        document.body.appendChild(container);
