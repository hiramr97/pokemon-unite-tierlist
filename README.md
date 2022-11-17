# Pokemon Unite Tier List


## Project Description

A tier list based off of the game "Pokemon Unite". It has tiers for each lane and also descriptions for each pokemon with builds and recommended lanes.

## Project Links

- [Github Repo](https://github.com/hiramr97/pokemon-unite-tierlist)
- [Deployed Site](https://pokemon-unite-tierlist.vercel.app/)
- [Demo Recording]()

## Wireframes

- [Wireframe](https://user-images.githubusercontent.com/114940348/202488875-51a4957b-01da-4561-8c71-c7f61d2a7d15.jpg)

## MVP/PostMVP  

#### MVP
- Pictures of each Pokemon 
- Seperate tier list for each role 
- Interactive screen to choose which Pokemon to look at

#### PostMVP
- Recommended builds and lanes

## Components

| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull and include React Router| 
| Home | This is where all of the Pokemon will be displayed to choose which ones to look at | 
| Header | This is the logo image, background image and includes a Navbar with the 3 different lanes | 
| Top, Center and Bottom Lane | These each contain seperate tier list for each of the Pokemon depending on which lane you're looking at | 
| Description | This is where all the data is, this links to a seperate build component and using the API to match all the data together with the Pokemon. |


## Code Snippet

This code snippet shows two different major problems that I was having and how I was able to get through them. The fetch call was happening before the page loaded so I had to return a "loading" state to process the information first. The data was in an object so I had to convert it to an array or get the values from the object. The API had the "ids" for each Pokemon starting at 1 so I had to alter it to match the current code I was running.

```
  useEffect(() => {
    fetchPokemon();
  }, []);

  if (data === undefined) return;

  let newData = Object.values(data);
  const pictureData = +data.id+ - 1;
```

## Issues and Resolutions
**ERROR**: API was returning "undefined" and then the actual data needed.                              
**RESOLUTION**:
```
  useEffect(() => {
    fetchPokemon();
  }, []);

  if (data === undefined) return;
  ```
