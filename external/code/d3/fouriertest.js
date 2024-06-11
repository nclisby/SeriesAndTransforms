// This does not work. I quit.
// Ensure plot-container takes up available space
// document.getElementById('fourier-test').style.width = '10%';
// document.getElementById('fourier-test').style.display = 'flex';
// document.getElementById('fourier-test').style.flexDirection = 'column';
// document.getElementById('fourier-test').style.alignItems = 'center';
// document.getElementById('fourier-test').style.overflow = 'hidden';


// Set up dimensions and margins for the plot
const margin = {top: 20, right: 30, bottom: 40, left: 50};
const width = 400 - margin.left - margin.right;
const height = 300 - margin.top - margin.bottom;

        // Create an SVG element
        // const svg = d3.select("#plot-container").append("svg")
        //     .attr("width", width + margin.left + margin.right)
        //     .attr("height", height + margin.top + margin.bottom)
        //     .append("g")
        //     .attr("transform", `translate(${margin.left},${margin.top})`);

// var width = 480,
//     height = 480;

// Create an SVG element
// const svg = d3.select("#fourier-test").append("svg")
// .attr("width", width)
// .attr("height", height)
const svg = d3.select("#fourier-test").append("svg")
.attr("width", width + margin.left + margin.right)
.attr("height", height + margin.top + margin.bottom)
.append("g")
.attr("transform", `translate(${margin.left},${margin.top})`);

// var svg = d3.select("#fourier-test").append("svg")
//     .attr("width", width)
//     .attr("height", height);

        // Set up the scales
        const xScale = d3.scaleLinear()
            .domain([0, 2 * Math.PI])
            .range([0, width]);

        const yScale = d3.scaleLinear()
            .domain([-2, 2])
            .range([height, 0]);

        // Add the X Axis
        svg.append("g")
            .attr("transform", `translate(0,${height})`)
            .call(d3.axisBottom(xScale).ticks(10));

        // Add the Y Axis
        svg.append("g")
            .call(d3.axisLeft(yScale).ticks(10));

        // Add the X Axis label
        svg.append("text")
            .attr("class", "x label")
            .attr("text-anchor", "end")
            .attr("x", width / 2)
            .attr("y", height + margin.bottom - 5)
            .text("x");

        // Add the Y Axis label
        svg.append("text")
            .attr("class", "y label")
            .attr("text-anchor", "end")
            .attr("y", -margin.left + 15)
            .attr("x", -height / 2 + 10)
            .attr("dy", ".75em")
            // .attr("transform", "rotate(-90)")
            .text("f(x)");

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
            const data = [];
            for (let i = 0; i <= 100; i++) {
                let x = 2 * Math.PI * i / 100;
                data.push({x: x, y: fourierSeries(x, terms)});
            }

            // Bind data to the path element
            const line = d3.line()
                .x(d => xScale(d.x))
                .y(d => yScale(d.y));

            // Remove any existing line
            svg.selectAll(".line").remove();

            // Add the new line
            svg.append("path")
                .datum(data)
                .attr("class", "line")
                .attr("fill", "none")
                .attr("stroke", "steelblue")
                .attr("stroke-width", 2)
                .attr("d", line);
        }

        // Initial plot with default terms
        let terms = 5;
        updatePlot(5);

        // Create a container for the slider
        // const sliderContainer = d3.select("body").append("div")
        const sliderContainer = d3.select("#fourier-test").append("div")
            .style("display", "flex")
            .style("flex-direction", "column")
            .style("align-items", "center")
            .style("margin-top", "20px")
            .style("width", "80%");

        // Create the slider label
        sliderContainer.append("label")
            .attr("class", "slider-label")
            .style("margin-bottom", "10px")
            .text("Number of terms: " + terms);

        // Create the slider input
        sliderContainer.append("input")
            .attr("type", "range")
            .attr("class", "slider")
            .attr("min", "1")
            .attr("max", "20")
            .attr("value", terms)
            .style("max-width", "400px")
            .on("input", function() {
                terms = +this.value;
                updatePlot(terms);
                d3.select(".slider-label").text("Number of terms: " + terms);
            });
