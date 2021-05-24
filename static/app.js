// Use the D3 library to read in samples.json.
init();

d3.json("static/samples.json").then((incomingData) => {
    var data = incomingData;

    var names  = data.names;
    var metadata = data.metadata;
    var samples = data.samples;

    console.log(names);
    console.log(metadata);
    console.log(samples);

    var layout = {
        margin: {
          l: 100,
          r: 100,
          t: 100,
          b: 100
        }
      };
});

function demographicInfo() {
    
    var id = d3.select("#selDataset").property("value");

    demo = metadata.find(element => element = id);

    console.log(demo);

    d3.select("#sample-metadata").append("h3").text(demo);

};


function init() {

    names.forEach(function(Append) {
            var option = d3.select("#selDataset");
            option.append("option").text(Append);
        }); 

    var trace = {
        x: topTenRev.map(object => object.sample_values),
        y: topTenRev.map(object => object.otu_ids),
        text: topTenRev.map(object => object.otu_labels),
        name: "Top 10 OTUs",
        type: "bar",
        orientation: "h"
    };
    
    var data = [trace];
    
    var layout = {
        margin: {
            l: 100,
            r: 100,
            t: 100,
            b: 100
        }
    };
    
    Plotly.newPlot("bar", data, layout);
};



var selector = d3.select("#selDataset").on("change", optionChanged)



function optionChanged(incomingData) {
    demographicInfo(incomingData);
    barPlot(incomingData);
    // bubblePlot(incomingData);
    
};

function barPlot() {
        // we need to sort specific arrays based on their ids and then display them in the table, we just want top 10 sample_values per id
    
    var topTen = samples.sort((a, b) =>
        parseFloat(b.sample_values) - parseFloat(a.sample_values));
    console.log(topTen);
    
    var topTenSlice = topTen.slice(0, 10);
    console.log(topTenSlice);

    var topTenRev = topTenSlice.reverse();

    console.log(topTenRev);
    
   // Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

    var trace1 = {
        x: topTenRev.map(object => object.sample_values),
        y: topTenRev.map(object => object.otu_ids),
        text: topTenRev.map(object => object.otu_labels),
        name: "Top 10 OTUs",
        type: "bar",
        orientation: "h"
    };

    var data_1 = [trace1];

    var layout_1 = {
        margin: {
          l: 100,
          r: 100,
          t: 100,
          b: 100
        }
      };

    
    // Use sample_values as the values for the bar chart
    // Use otu_ids as the labels for the bar chart.
    // Use otu_labels as the hovertext for the chart.

    updatePlotly(data);
};

function updatePlotly(newdata) {
    Plotly.restyle("bar", [newdata], layout);
}


// Create a bubble chart that displays each sample.

// var trace2 = {
//     x: samples1.map(object => object.otu_ids),
//     y: samples1.map(object => object.sample_values),
//     mode: 'markers',
//     marker: {
//         color: samples1.map(object => object.otu_ids),
//         size: samples1.map(object => object.sample_values)
//       },
//     text: samples1.map(object => object.otu_labels)
//   };
  
//   var data_2 = [trace2];
  
//   var layout_2 = {
//     title: 'Marker Size',
//     showlegend: false,
//     height: 600,
//     width: 600
//   };
  
//   Plotly.newPlot('myDiv', data_2, layout_2);

// Use otu_ids for the x values.


// Use sample_values for the y values.


// Use sample_values for the marker size.


// Use otu_ids for the marker colors.


// Use otu_labels for the text values.











// Display the sample metadata, i.e., an individual's demographic information.


// Display each key-value pair from the metadata JSON object somewhere on the page.


// Update all of the plots any time that a new sample is selected.
