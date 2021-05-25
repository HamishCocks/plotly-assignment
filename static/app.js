// Use the D3 library to read in samples.json.


init();

function init() {
    d3.json("static/samples.json").then((incomingData) => {
        
        var data = incomingData;
    
        var names  = data.names;   

        names.forEach(function(Append) {
            var option = d3.select("#selDataset");
            option.append("option").text(Append);
        }); 

        var metadata = data.metadata;

        console.log(metadata);

        var sel_valuexx = 940

        console.log(sel_valuexx);

        var demoArray = metadata.find(o => o.id === sel_valuexx);

        console.log(demoArray);

        d3.select("#sample-metadata").html("");

        Object.entries(demoArray).forEach(([key, value]) => {
            d3.select("#sample-metadata").append("h5").text(`${key}: ${value}`);
        });

        var sel_value = "940";

        var samples = data.samples;

        var idArr = samples.filter(sample => sample.id === sel_value);
        
        var top_otu_IDs = idArr[0].otu_ids.slice(0, 10);

        console.log(top_otu_IDs);

        var topValues = idArr[0].sample_values.slice(0, 10).reverse();

        console.log(topValues);

        var topLabels = idArr[0].otu_labels.slice(0, 10).reverse();

        console.log(topLabels);

        var yticks = top_otu_IDs.map(otuID => `OTU ${otuID}`).reverse();
        
        // Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

        var trace1 = {
            type: "bar",
            x: topValues,
            y: yticks,
            text: topLabels,
            orientation: "h"
        };

        var data_1 = [trace1];

        var layout_1 = {
            title: "Top 10 OTUs",
            margin: { t: 30, l: 150 }
        };

        Plotly.newPlot("bar", data_1, layout_1);



        var top_otu_IDs1 = idArr[0].otu_ids;

        console.log(top_otu_IDs1);

        var topValues1 = idArr[0].sample_values;

        console.log(topValues1);

        var topLabels1 = idArr[0].otu_labels;

        console.log(topLabels1);

        var yticks1 = top_otu_IDs1.map(otuID => otuID);

        var trace2 = {
            x: yticks1,
            y: topValues1,
            mode: 'markers',
            marker: {
                color: yticks1,
                size: topValues1
            },
            text: topLabels1
        };
        
        var data_2 = [trace2];
        
        var layout_2 = {
            title: 'SAMPLE SIZE',
            xaxis: {
                title:'OTU IDs',
                autorange: true,
            },
            showlegend: false,
            height: 600,
            width: 1500
        };

        Plotly.newPlot('bubble', data_2, layout_2);
    });
};



var selector = d3.selectAll("#selDataset").on("change", optionChanged);


function optionChanged(incomingData) {

    demographicInfo(incomingData);
    buildPlot(incomingData);
    
};

function unpack(rows, index) {
    return rows.map(function(row) {
      return row[index];
    });
};

function demographicInfo() {
    d3.json("static/samples.json").then((incomingData) => {
        
        var data = incomingData;

        console.log(data);

        var metadata = data.metadata;

        console.log(metadata);

        var sel_value = parseInt(d3.select("#selDataset").property("value"));

        console.log(sel_value);

        var demoArray = metadata.find(o => o.id === sel_value);

        console.log(demoArray);

        d3.select("#sample-metadata").html("");

        Object.entries(demoArray).forEach(([key, value]) => {
            d3.select("#sample-metadata").append("h5").text(`${key}: ${value}`);
        });
    });
};


function buildPlot() {
    d3.json("static/samples.json").then((incomingData) => {

        var sel_value = d3.select("#selDataset").property("value");    
        
        console.log(typeof sel_value);

        var data = incomingData;

        var samples = data.samples;

        console.log(samples);
        
        var idArr = samples.filter(sample => sample.id === sel_value);

        //use a filter function instead of find !!!

        console.log(idArr);

        // we need to sort specific arrays based on their ids and then display them in the table, we just want top 10 sample_values per id
        
        // we need to get the id selector and then sort the sample values for that SPECIFIC id, rather than all the ids
        
        var top_otu_IDs = idArr[0].otu_ids.slice(0, 10);

        console.log(top_otu_IDs);

        var topValues = idArr[0].sample_values.slice(0, 10).reverse();

        console.log(topValues);

        var topLabels = idArr[0].otu_labels.slice(0, 10).reverse();

        console.log(topLabels);

        var yticks = top_otu_IDs.map(otuID => `OTU ${otuID}`).reverse();
        
        // Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

        var trace1 = {
            type: "bar",
            x: topValues,
            y: yticks,
            text: topLabels,
            orientation: "h"
        };

        var data_1 = [trace1];

        var layout_1 = {
            title: "Top 10 OTUs",
            margin: { t: 30, l: 150 }
        };

        Plotly.newPlot("bar", data_1, layout_1);



        var top_otu_IDs1 = idArr[0].otu_ids;

        console.log(top_otu_IDs1);

        var topValues1 = idArr[0].sample_values;

        console.log(topValues1);

        var topLabels1 = idArr[0].otu_labels;

        console.log(topLabels1);

        var yticks1 = top_otu_IDs1.map(otuID => otuID);

        var trace2 = {
            x: yticks1,
            y: topValues1,
            mode: 'markers',
            marker: {
                color: yticks1,
                size: topValues1
            },
            text: topLabels1
        };
        
        var data_2 = [trace2];
        
        var layout_2 = {
            title: 'SAMPLE SIZE',
            xaxis: {
                title:'OTU IDs',
                autorange: true,
            },
            showlegend: false,
            height: 600,
            width: 1500
        };

        Plotly.newPlot('bubble', data_2, layout_2);
        
        // Use sample_values as the values for the bar chart
        // Use otu_ids as the labels for the bar chart.
        // Use otu_labels as the hovertext for the chart.
    });
};


// Use otu_ids for the x values.


// Use sample_values for the y values.


// Use sample_values for the marker size.


// Use otu_ids for the marker colors.


// Use otu_labels for the text values.











// Display the sample metadata, i.e., an individual's demographic information.


// Display each key-value pair from the metadata JSON object somewhere on the page.


// Update all of the plots any time that a new sample is selected