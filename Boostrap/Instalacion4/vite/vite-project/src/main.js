import '../assests/sccs/custom.scss'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'


import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div >
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    
  
    <h1 class="text-bg-primary">primary </h1>
    <h1 class="text-bg-secondary">secondary </h1>

    
    <h1 class="--bs-red"> Vermell</h1>
    <h1 class="text-bg-primary" > blau </h1>
    
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
    
    <button class="btn btn-outline-primary btn-lg text-danger"> Boto1 </button>
    
   <nav class="navbar navbar-expand-lg bg-body-tertiary position-absolute position-sticky top-0">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

<h1>Empieza el formulario sin que se pueda cerrar</h1>


<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#guidoBtn">
  Launch static backdrop modal
</button>

<!-- Modal -->
<div class="modal fade" id="guidoBtn" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
     <form>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Recipient:</label>
            <input type="text" class="form-control" id="recipient-name">
          </div>
          <div class="mb-3">
            <label for="message-text" class="col-form-label">Message:</label>
            <textarea class="form-control" id="message-text"></textarea>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Understood</button>
      </div>
    </div>
  </div>
</div>
<br>

    <div >
        <div class="bg-danger border border-success border-2 my-3" style=" width: 100px; height: 100px">
        <img style="height: 100px; width: 100px" class="object-fit-sm-contain  " src="../assests/hombre.jpg" alt="">
        </div>
    
     <div class="bg-danger border border-success border-2 ms-5" style=" width: 100px; height: 100px">
        <img style="height: 100px; width: 100px" class="object-fit-sm-cover " src="../assests/hombre.jpg" alt="">
        </div>
        
     <div class="bg-danger border border-success border-2 p-2" style=" width: 100px; height: 100px">
        <img style="height: 100px; width: 100px" class="object-fit-sm-fill " src="../assests/hombre.jpg" alt="">
        </div>
        
        <div class="bg-danger border border-success border-2 ms-xxl-5 ms-lg-4 ms-md-2 ms-sm-1" style=" width: 100px; height: 100px">
        <img style="height: 100px; width: 100px" class="object-fit-sm-scale " src="../assests/hombre.jpg" alt="">
        </div>
       <div class="bg-danger border border-success border-2" style=" width: 100px; height: 100px">
        <img style="height: 100px; width: 100px" class="object-fit-sm-none " src="../assests/hombre.jpg" alt="">
        </div>
        
         <div class="bg-danger border border-success border-2 ms-xxl-5 ms-lg-4 ms-md-2 ms-sm-1" style=" width: 100px; height: 100px">
        <img style="height: 100px; width: 100px" class="object-fit-sm-scale " src="../assests/hombre.jpg" alt="">
        </div>
         <div class="bg-danger border border-success border-2 ms-xxl-5 ms-lg-4 ms-md-2 ms-sm-1" style=" width: 100px; height: 100px">
        <img style="height: 100px; width: 100px" class="object-fit-sm-scale " src="../assests/hombre.jpg" alt="">
        </div>
         <div class="bg-danger border border-success border-2 ms-xxl-5 ms-lg-4 ms-md-2 ms-sm-1" style=" width: 100px; height: 100px">
        <img style="height: 100px; width: 100px" class="object-fit-sm-scale " src="../assests/hombre.jpg" alt="">
        </div>
         <div class="bg-danger border border-success border-2 ms-xxl-5 ms-lg-4 ms-md-2 ms-sm-1" style=" width: 100px; height: 100px">
        <img style="height: 100px; width: 100px" class="object-fit-sm-scale " src="../assests/hombre.jpg" alt="">
        </div>
         <div class="bg-danger border border-success border-2 ms-xxl-5 ms-lg-4 ms-md-2 ms-sm-1" style=" width: 100px; height: 100px">
        <img style="height: 100px; width: 100px" class="object-fit-sm-scale " src="../assests/hombre.jpg" alt="">
        </div>
         <div class="bg-danger border border-success border-2 ms-xxl-5 ms-lg-4 ms-md-2 ms-sm-1" style=" width: 100px; height: 100px">
        <img style="height: 100px; width: 100px" class="object-fit-sm-scale " src="../assests/hombre.jpg" alt="">
        </div>
         <div class="bg-danger border border-success border-2 ms-xxl-5 ms-lg-4 ms-md-2 ms-sm-1" style=" width: 100px; height: 100px">
        <img style="height: 100px; width: 100px" class="object-fit-sm-scale " src="../assests/hombre.jpg" alt="">
        </div>
         <div class="bg-danger border border-success border-2 ms-xxl-5 ms-lg-4 ms-md-2 ms-sm-1" style=" width: 100px; height: 100px">
        <img style="height: 100px; width: 100px" class="object-fit-sm-scale " src="../assests/hombre.jpg" alt="">
        </div>
         <div class="bg-danger border border-success border-2 ms-xxl-5 ms-lg-4 ms-md-2 ms-sm-1" style=" width: 100px; height: 100px">
        <img style="height: 100px; width: 100px" class="object-fit-sm-scale " src="../assests/hombre.jpg" alt="">
        </div>
         <div class="bg-danger border border-success border-2 ms-xxl-5 ms-lg-4 ms-md-2 ms-sm-1" style=" width: 100px; height: 100px">
        <img style="height: 100px; width: 100px" class="object-fit-sm-scale " src="../assests/hombre.jpg" alt="">
        </div>
        
        
    </div>

  </div>
`

setupCounter(document.querySelector('#counter'))
