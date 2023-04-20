                                                        WORLD COUNTRY’S INFLATION
INTRODUCTION

Inflation affects all aspects of the economy, from consumer spending, business investment and employment rates to government programs, tax policies, and interest rates.
Understanding inflation is crucial to investing because it can reduce the value of investment returns. With inflation rising recently after several years of relative calm to its highest level in four decades, investors may benefit from knowing the factors driving inflation, the impact on their portfolios, and steps to consider as the investment landscape shifts.

![alt text](https://www.currencytransfer.com/wp-content/uploads/2022/08/Rising-Inflation.min_.jpg)


WHAT IS INFLATION?

Inflation is a sustained rise in overall price levels. Inflation measures how much more expensive a set of goods and services has become over a certain period. 


HOW IS INFLATION MEASURED?

When economists and central banks try to discern the rate of inflation, they generally focus on “core inflation,” such as “core CPI” or “core PCE.” Unlike the inflation, core inflation excludes food and energy prices, which are subject to sharp, short-term price swings, and could give a misleading picture of long-term inflation trends.


WHAT CAUSES INFLATION?

Economists do not always agree on what spurs inflation at any given time, but in general they bucket the factors into two different types: cost-push inflation and demand-pull inflation.
	Rising commodity prices are an example of cost-push inflation because when commodities rise in price, the costs of basic goods and services generally increase.
	Demand-pull inflation occurs when aggregate demand in an economy rises too quickly. This can occur if a central bank rapidly increases the money supply without a corresponding increase in the production of goods and service. Demand outstrips supply, leading to an increase in prices.


HEADLINER INFLATION: 

Headline inflation is the raw inflation figure reported through the Consumer Price Index (CPI) that is released monthly by the Bureau of Labor Statistics (BLS).
In this case we analyzed the headliner inflation in every country of the world yearly since the year of 2005 to 2022.


HOW WE DID OUR PROJECT?

1.	We got our first data from “country-capital-lat-long-population” - Omar Nomad’s GitHub (username: ofou) (link will be provided below). This data provided inflation in all countries of the world from the year of 1970 to 2022, containing 5 types of inflation: Headline Consumer Price Inflation, Energy Consumer Price Inflation, Food Consumer Price Inflation, Official Core Consumer Price Inflation, Official Core Consumer Price Inflation. 

2.	To be able to create our map we added a second database with the latitude and longitude of the countries of the world that we found (link will be provided below)


3.	Data was cleaned and we focused on Headline Consumer Price Inflation from 2005 to 2022 using pandas in phyton program. 

4.	Data was transformed into a CSV file.


5.	Data was loaded into two SQL tables database using PgAdmin.

6.	API was generated using api.py, ps code, d3 library, jsvectormap, plotly and javascript in the Visual Studio Code.


HOW TO USE OUR PROJECT: 

*BAR CHARTS:
Using the drop-down tool, which is a graphic control element that allows the user to choose one country from the list shown, you will be able to observe the following bar charts visualizations:
	Inflation rates: Shows the inflation for the selected country from 2005 to 2022.

	Top 10 inflation: Shows the top 10 years with the highest inflation for the selected country.
 
	Bottom 10 inflation: Shows the top 10 years with the lowest inflation for the selected country.
 

*MAP:
We selected the top 10 highest and lower headliner inflation per country worldwide for 2022. The map shows in blue the countries with the lowest inflation and in red the ones with the highest inflation with their respectively inflation rates. Positioning the mousse pointer in the map will allow to read the name of the country.
 
 
 
WHY TO USE IT?

Our project can be used as a great informative tool:
	The inflation performance of economies is interesting to academic economists, policymakers, politicians, and the electorate.

	Inflation affects all aspects of the economy, from consumer spending, business investment and employment rates to government programs, tax policies, and interest rates.

	Understanding inflation is crucial to investing because it can reduce the value of investment returns. With inflation rising recently after several years of relative calm to its highest level in four decades, investors may benefit from knowing the factors driving inflation, the impact on their portfolios, and steps to consider as the investment landscape shifts.



RESOURCES: 

1.	“Global dataset of inflation” – 
https://www.kaggle.com/datasets/belayethossainds/global-inflation-dataset-212-country-19702022

2.	 “country-capital-lat-long-population” - Omar Nomad’s GitHub (username: ofou)
https://gist.github.com/ofou/df09a6834a8421b4f376c875194915c9#file-country-capital-lat-long-population-csv

3.	Themustafaomar jsvectormap - https://github.com/themustafaomar/jsvectormap

4.	DenispSmith – Data Visualization US Accidents Tools - https://github.com/DennisPSmith5676/DataVisualization_US_AccidentsTools:

TOOLS:

	Discord.com - for meetings outside class

	Zoom – during class hours

	Google

	Kaggle

	Class content



PARTICIPANTS:

	Kim, Olivia

	Loprimo, Katherine

	Montalva, Romy

	Owens, Amber

	Patel, Avani

	Rose, Amanda
