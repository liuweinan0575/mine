# Mine

This is project to introduce myself to the world. The UI style is following the design of one excellent work in [dribbble](https://dribbble.com/shots/3135702-Design-Blog-Mobile-Sneak-Peek/attachments/663977). 

## Basis

The project takes advantage of react and material design. Alought I use redux and router, but currently there is no effective redux and router related code. I use them only for the futher consideration that I may improve this project with more pages, data and api calls. Besides, for material design, I use the library from getmdl, and only import three components from the library, i.e., Card, Cell and Icons.

During my daily work, I write very less css code as I use bootstrap for UI build. In this project, I write a lot of css code which I think can surely improve my css skill.

I abstract four react components, Card, List, Square and Table which you can find in components folder. More component can be extracted, so as the style related code, which, I can write them in css/scss files. Yes, these are the further work on this project.

## Better experience

I want to make the ui vertical and horizontal centered. There are a lot of ways. I tried also succeed. But when I integrate them with responsive experience, they all failed or distorted the ui, such as "top 50%; left 50% with transform" and "table tag with vertical-align". So I decided to give up the vertical and horizontal centered feature. Now the better experience is to set the screen of web browser as 1000px * 540px.