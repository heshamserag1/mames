import React from "react";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default ">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
       

        </div>
        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >

          <ul className="nav navbar-nav navbar-right">
          <li>

          <img src="img/logo.jpg" className="logo" alt="" />{" "}

            </li>           
            <li>
            <a href="#features" className="page-scroll">
              </a>

  </li>  
             <li>

              <a href="App" className="page-scroll">
                الرئيسية
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                كيفية الانضمام
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                الاسعار
              </a>
            </li>
            <li>
              <a href="#team" className="page-scroll">
                من نحن
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                تواصل معنا
              </a>
            </li>
          
          </ul>

        </div>
      </div>
    </nav>
  );
};
