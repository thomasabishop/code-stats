## CodeStats

CodeStats is a **work in progress**. 

It is built with React.js and hosted with AWS Amplify. View the WIP [here](https://master.d35mas48oflx0l.amplifyapp.com/).

The data ~~is~~ will be dynamic and sourced from the WakaTime and GitHub User APIs. WakaTime is a software that hooks into your text editor or IDE and records metrics about your coding over time.

The app is not intended to be responsive on viewports < 1080px 

### Pipeline

* Create dark theme for graphs
* Create custom graph theme, ensure colours map to languages
* Set up AWS Lambda to privately source API keys 
* Use Context API to create global timeframe state 
* Create reducer for managing graph state
* Write async scripts to query APIs 
* Integrate async scripts with `useSideEffect` hook 
* Component unit tests
* Install JSDoc and annotate components 
