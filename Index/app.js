// Set the selector data
function init() {
    let selector = d3.select("#selDataset");

    d3.json("http://127.0.0.1:5000/api/v1.0/global_inflation").then((data) => {

        for (let i = 0; i < data.length; i++) {
            let countryName = data[i].country
            // console.log(countryName)
            selector.append("option").text(countryName).property("value", countryName);
        }

    })

}

init();

// inflation information data

function buildMetadata(country) {
    let selector = d3.select("#countryData");
    selector.html("")
    // console.log(country)
    d3.json("http://127.0.0.1:5000/api/v1.0/global_inflation").then((data) => {

        for (let i = 0; i < data.length; i++) {
            let countryName = data[i].country
            if (countryName == country) {
                let code = data[i].country_code;
                selector.append("p").text("country code: " + code)
                for (let j = 2005; j < 2023; j++) {
                    let year = data[i]["year_" + j];
                    selector.append("p").text(j + ": " + year)
                }


            }
        }
    })
}

// bar graph for inflation info
function buildCharts(country) {
    d3.json("http://127.0.0.1:5000/api/v1.0/global_inflation").then((data) => {

        xticks = ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022']
        for (let i = 0; i < data.length; i++) {
            let countryName = data[i].country

            if (countryName == country) {
                let code = data[i].country_code;
                inflation = []
                for (let j = 2005; j < 2023; j++) {
                    inflation.push(data[i]["year_" + j]);
                }

                let barData = [{
                    x: xticks,
                    y: inflation,
                    type: "bar"
                }]
                let barLayout = {
                    title: "<b>Inflation Data</b>",
                    margine: {
                        t: 50,
                        l: 150
                    }
                }

                Plotly.newPlot("bar", barData, barLayout)

            }
        }
    });
}

//Top 10 inflation info

function barGraph(country) {
    d3.json("http://127.0.0.1:5000/api/v1.0/global_inflation").then((data) => {

        for (let i = 0; i < data.length; i++) {
            let countryName = data[i].country
            if (countryName == country) {
                inflation = []
                for (let j = 2005; j < 2023; j++) {
                    inflation.push(["Year " + j, data[i]["year_" + j]]);
                }
                inflation.sort(compareSecondColumn);
                let top10 = inflation.slice(0, 10);
                let year = top10.map(function(tuple) {
                    return tuple[0];
                })
                let inflationData = top10.map(function(tuple) {
                    return tuple[1];
                })



                let barData = [{
                    y: year.reverse(),
                    x: inflationData.reverse(),
                    type: "bar",
                    orientation: "h"
                }]
                let barLayout = {
                    title: "<b>Top 10 Inflation Info</b>",
                    margine: {
                        t: 50,
                        l: 150
                    }
                }

                Plotly.newPlot("bar2", barData, barLayout)


            }
        }
    })

}

function compareSecondColumn(a, b) {
    if (a[1] === b[1]) {
        return 0;
    } else {
        return (a[1] > b[1]) ? -1 : 1;
    }
}

//lowest 10 inflation rates
function barGraph2(country) {
    d3.json("http://127.0.0.1:5000/api/v1.0/global_inflation").then((data) => {

        for (let i = 0; i < data.length; i++) {
            let countryName = data[i].country
            if (countryName == country) {
                inflation = []
                for (let j = 2005; j < 2023; j++) {
                    inflation.push(["Year " + j, data[i]["year_" + j]]);
                }
                inflation.sort(compareSecondColumn).reverse();
                let top10 = inflation.slice(0, 10);
                let year = top10.map(function(tuple) {
                    return tuple[0];
                })
                let inflationData = top10.map(function(tuple) {
                    return tuple[1];
                })



                let barData = [{
                    y: year.reverse(),
                    x: inflationData.reverse(),
                    type: "bar",
                    orientation: "h"
                }]
                let barLayout = {
                    title: "<b>Bottom 10 Inflation Info</b>",
                    margine: {
                        t: 50,
                        l: 150
                    }
                }

                Plotly.newPlot("bar3", barData, barLayout)


            }
        }
    })

}


function optionChanged(country) {
    buildCharts(country);
    buildMetadata(country);
    barGraph(country);
    barGraph2(country);
}