const heading = React.createElement("h1", {id:"heading"}, "Hello world from React!");

const parent = React.createElement("div", {id:"parent"}, 
                [React.createElement("div", {id:"child1"}, 
               [React.createElement("h1", {}, "Hi, I am a H1 tag!"), 
                React.createElement("h2", {}, "Hi, I am a H2 tag!")]),
                React.createElement("div", {id:"child2"}, 
                    [React.createElement("h1", {}, "Hi, I am a H1 tag!"), 
                     React.createElement("h2", {}, "Hi, I am a H2 tag!")])]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

