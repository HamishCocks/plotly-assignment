// Use the D3 library to read in samples.json.

// 

d3.json("static/samples.json").then((incomingData) => {
    console.log(incomingData[0]);
    var data = incomingData;
//storing each array value as a variable to access later -- not sure if this is correct
    var names1  = data.names
    var metadata1 = data.metadata
    var samples1 = data.samples

    console.log(samples1);
    
    samples1.length
    
    //trying to get first element of each samples item ie. get the id value and then store it so I can then append each as an option in the dropdown 
    function printID(id) {
        console.log(id);
    }

    for (var i = 0; i <= samples1.length; i++) {
        printID(samples1[i])
    }

    function optionChanged(element) {
        //fill with the samples ids list, yes need to be within the script line and within <option/> could probably append every single id as an option and then take the selected one and run it through the table code 
    }

    // we need to sort specific arrays based on their ids and then display them in the table, we just want top 10 sample_values per id
    samples1.sort(function(a, b) {
        return parseFloat(b.sample_values) - parseFloat(a.sample_values);
    });

    samples1 = samples1.slice(0, 10);

    samples1 = samples1.reverse();

    console.log(samples1);

    
// Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.


// Use sample_values as the values for the bar chart.


// Use otu_ids as the labels for the bar chart.


// Use otu_labels as the hovertext for the chart.







// Create a bubble chart that displays each sample.



// Use otu_ids for the x values.


// Use sample_values for the y values.


// Use sample_values for the marker size.


// Use otu_ids for the marker colors.


// Use otu_labels for the text values.

// Display the sample metadata, i.e., an individual's demographic information.


// Display each key-value pair from the metadata JSON object somewhere on the page.


// Update all of the plots any time that a new sample is selected.

});