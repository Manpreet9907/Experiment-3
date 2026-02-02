<img width="1358" height="788" alt="image" src="https://github.com/user-attachments/assets/7ce86a81-04af-464d-89ea-1d479556a578" />
<img width="978" height="770" alt="Screenshot 2026-02-02 151256" src="https://github.com/user-attachments/assets/630a7830-6719-4e38-aaa5-6bcc54406d68" />

In this experiment, React Router DOM is used to manage navigation between multiple components within a React application. The BrowserRouter component wraps the entire application to enable routing functionality. The Routes component is used to define multiple routes, and each Route maps a specific URL path to a corresponding React component.

Two simple components, Home and About, are created to represent different pages. When the user navigates to the root path (/), the Home component is rendered, and when the path changes to /about, the About component is displayed. The transition between these pages happens dynamically without reloading the browser, demonstrating the concept of client-side routing.


<img width="1599" height="661" alt="Screenshot 2026-02-02 152702" src="https://github.com/user-attachments/assets/15758d5f-f47b-4d35-8bcb-e09060984344" />

<img width="1599" height="722" alt="Screenshot 2026-02-02 152714" src="https://github.com/user-attachments/assets/a8b54db6-ef5e-4a9b-bf10-25414449c11b" />



In this experiment, the application is wrapped inside the BrowserRouter component to enable routing. A fixed navigation bar is created at the top of the page using inline CSS. The navigation bar contains Link components that provide access to different routes such as Profile and Dashboard.

Two separate components, Profile and Dashboard, are defined. The Profile component displays user information such as name, image, and project titles, while the Dashboard component displays a list of technical skills. The Link components are mapped to specific routes using the to attribute, allowing smooth navigation between these components.

The Routes and Route components are used to define the path and the corresponding component to be rendered. When a navigation link is clicked, the URL changes, and the required component is rendered dynamically without refreshing the page. This ensures fast and seamless navigation, which is a key feature of Single Page Applications.

<img width="520" height="713" alt="image" src="https://github.com/user-attachments/assets/165d7767-42a1-40ff-88a6-eb42a114ae34" />
<img width="814" height="781" alt="Screenshot 2026-02-02 153021" src="https://github.com/user-attachments/assets/efa21163-63ad-4cd9-a0c0-864cb2f3c1cf" />
In this experiment, multiple React components such as Profile and Dashboard are created to represent different pages of the application. The BrowserRouter component is used to enable routing functionality, while the Routes and Route components are used to map each URL path to its respective component.

The Profile component displays user information such as an image, name, and project title, while the Dashboard component displays a list of technical skills. When the URL path changes, React Router renders the corresponding component without reloading the browser.

