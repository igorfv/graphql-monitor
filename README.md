# Apollo Tracing Developer Tools Extension

This is a chrome dev tool extension that I wrote in a couple of hours to help me visualize the GraphQL tracing data from my requests.
It probably have some bugs but I'll fix them as soon as I can.

Also, this project was quickly done while I was learning how to create an extension, so as you can see it's not very organized. That means that before adding any new feature I need to organize it and create a build structure. Please feel free to contribute if you think you can help.

![](docs/interface-example.png)

## Todo list

### Basic structure
- [x] Pack extension on prod build
- [x] Add webpack (or other tool)
- [x] Uglify
- [x] Add babel and JSX support
- [x] Add SASS/Styled components
- [ ] Add Jest and write unit tests
- [x] Split component files
- [x] Create a better layout
- [ ] Find a designer to create an actual good layout

### Features
- [ ] Save request for later
- [ ] Compare requests
- [x] Hide items slammer than 1ms
- [ ] Display requests made before extension opens
