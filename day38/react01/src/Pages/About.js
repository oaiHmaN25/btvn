export const About = () => {
    return `
    <header class = "mb-3">
    <div class = "container">
        <h1><a href = "/" data-router>Header</a></h1>
    </div>
  </header>
  <main id="main">
    <div class = "container">
        <div class = "row">
            <div class = "col-3">
                <h2>Menu</h2>
                <ul>
                    <li><a href = "/" data-router>Trang chu</a></li>
                    <li><a href = "/gioi-thieu" data-router>Gioi thieu</a></li>
                    <li><a href = "/san-pham" data-router>San pham</a></li>              
                </ul>
            </div>
            <div class = "col-9">
            <h1>Gioi thieu</h1>
            </div>
        </div>
  </div>
  <footer class="mt-3">
  <div class= "container">
   <h1>FOOTER</h1>
   </div>
  </footer>
  </main>

    `
}