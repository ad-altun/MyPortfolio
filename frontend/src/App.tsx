import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CustomThemeProvider } from "./context/ThemeContext.tsx";
import './App.css';
import RootLayout from "./pages/RootLayout.tsx";
import { About } from "./components/About.tsx";
import Resume from "./components/Resume.tsx";
import ProjectDetailPage from "./pages/ProjectDetailPage.tsx";
import { Projects } from "./components/Projects.tsx";

// Main App Component
function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <RootLayout />,
            children: [
                {
                    index: true,
                    element: <About />
                },
                {
                    path: '/resume',
                    element: <Resume />
                },
                {
                    path: '/projects',
                    element: <Projects />
                },
                {
                    path: '/projects/:projectId',
                    element: <ProjectDetailPage />
                }
            ]
        },
    ])

    return (
        <CustomThemeProvider>
            <RouterProvider router={ router } />
        </CustomThemeProvider>
    );
}

export default App;
