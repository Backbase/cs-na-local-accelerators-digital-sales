# Helm Charts

Here we have Helm Charts following Backbase Guidelines. For more info check the 
internal [guidelines](https://backbase.atlassian.net/wiki/spaces/GUIL/pages/1820691788/Helm+Charts) and also the proposal [to move Charts into 
 their own repos](https://backbase.atlassian.net/wiki/spaces/GUIL/pages/2652209206/Move+Helm+Charts+next+to+the+code)

# Pushing Chart to experimental

Currently we need to push Charts manually to Harbor/development. Team `IT Flows!` is working on a generic pipeline, so 
when you change your Chart it gets published automatically. More info on https://stash.backbase.com/projects/ITF/repos/golden-sample/browse/charts

## Push using Helm 2
To do that, see https://flow.sdlc.backbase.eu/docs/reference.html#helm-charts and install `chartmuseum/helm-push`, then
 
```bash 
helm dependency update
helm push . https://harbor.backbase.eu/chartrepo/development --username=your_username  --password="your_password"
```
