import Navbar from "./assets/Navbar.tsx";
import Home from "./Home.tsx";
import Images from "./images.tsx";
import TodoList from "./TodoList.tsx";
import About from "./About.tsx";


function App() {
    let component
    switch (window.location.pathname) {
        case "/":
            component = <Home />

            break;
        case "/images":
            component = <Images />
            break;
        case "/About":

            component = <About />
            break;

        case "/TodoList":
            component = <TodoList />
            break;
        default:
            component = <Home />
            break;
    }

    return (
        <>
            <Navbar />
            {component}
        </>
    )
}
export default App

