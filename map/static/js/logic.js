


let countryCode = [];
let inflation = [];

d3.json("http://127.0.0.1:5000/api/v1.0/location_code").then((data) => {
  for (let i = 0; i < data.length; i++) {
    

    countryCode.push(data[i].code)  
    inflation.push(data[i].inflation_2022) 
      
  }
})
// 

console.log(inflation)
console.log(countryCode)



const map = new jsVectorMap({ 
  selector: "#map",
 
  markers: [    
    { coords: [6.3654, 2.4183], labelName: '1.31'},
    { coords: [-16.5, -68.15], labelName: '1.75'},
    { coords: [39.9075, 116.397], labelName: '1.97'},
    { coords: [35.6895, 139.692], labelName: '2.5'},
    { coords: [24.6905, 46.7096], labelName: '2.5'},
    { coords: [46.9481, 7.4474], labelName: '2.8'},
    { coords: [23.6139, 58.5922], labelName: '2.81'},
    { coords: [8.9958, -79.52], labelName: '2.86'},
    { coords: [21.0245, 105.841], labelName: '3.16'}, 
    { coords: [3.1412, 101.687], labelName: '3.38'},
    { coords: [35.6944,51.4215], labelName: '42.44'},
    { coords: [15.3531,44.2078], labelName: '43.85'},
    { coords: [6.9319, 79.8478], labelName: '50.43'},
    { coords: [5.8664, -55.167], labelName: '54.26'},
    { coords: [39.9199, 32.8543], labelName: '72.31'},
    { coords: [-34.605, -58.4], labelName: '72.43'},
    { coords: [15.5518, 32.5324], labelName: '138.81'},
    { coords: [33.9, 35.4833], labelName: '171.2'},
    { coords: [10.488, -66.879], labelName: '220.84'}, 
    { coords: [-19.0154, 29.1549], labelName: '284.94'},

    
     ],
     series: {
        markers: [{
          attribute: 'fill',
          scale: ['#0071A4', '#FF0000'],
          normalizeFunction: 'polynomial',
          // values: [408, 512, 550, 781],
          legend: {
            vertical: true,
            title : "Inflation",
            labelRender: function(v){
              return {
                1: 'high (above 40)',
                0: 'low (below 4)'
              }[v];
            }
          }
        }]},


  labels: {
    markers: {
      render(marker, index) {
        return marker.name || marker.labelName || 'Not available'
      },
    }
  },

  visualizeData: {
    
  scale: ['#0071A4', '#FF0000'],
   values: {
    BJ:1.31,
	  BO:1.75,
	  CN:1.97,
	  JP:2.5,
	  SA:2.5,
    CH:2.8,
	  OM:2.81,
	  PA:2.86,
	  VN:3.16,
	  MY:3.38,
    IR:42.44,
    YE:43.85,
    LK:50.43,
    SR:54.26,
    TR:72.31,
    AR:72.43,
    SD:138.81,
    LB:171.2,
    VE:220.84,
    ZW:284.94
 }
}
});

